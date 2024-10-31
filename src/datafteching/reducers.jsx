import React, { useReducer, useEffect } from 'react';

const initialState = {
  data: null,
  loading: true,
  error: null,
};

function dataReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
// useReducer is highly suitable for managing complex or structured state, 
// including the results of fetched data, loading states, and error handling. 
// While useEffect is typically used to trigger the data fetch, 
// useReducer can efficiently store and manage the fetched data 
// as part of a more sophisticated state management approach.
function DataFetchingComponent() {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchData();
  }, []);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <div>
      <h1>Data using reducer:</h1>
      <pre>{JSON.stringify(state.data, null, 2)}</pre>
    </div>
  );
}

export default DataFetchingComponent;

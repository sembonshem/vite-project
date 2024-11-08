import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './classcomp.jsx'
import FuncComp from './funccomps/funccomp.jsx'
import HocNovel from './funccomps/higherodercomp/hocnovel.jsx'
import FuncUseState from './funccomps/funhooks.jsx'
import FuncLifeCycle from './funccomps/funclifecylce.jsx'
import ItemList from './funccomps/managinglists.jsx'
//import element is not exported by default
import {StylesCollection} from './reactstyles/stylescollec.jsx'
import TodoList from './TodoList/TodoList.jsx'
import { ToggleButton } from './funccomps/customhooks.jsx'
import ExampleForm from './exampleforms.jsx'
import UserList from './datafteching/userlist.jsx'
import DataFetchingComponent from './datafteching/reducers.jsx'
function App() {
  const [count, setCount] = useState(0)

  const novel = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel about the American Dream and the pursuit of wealth and status.',
    type: 'Fiction',
  }

  return (
    <>
    <DataFetchingComponent />
    <UserList />
    <ExampleForm />
    <ToggleButton />
    <TodoList />
    <StylesCollection />
    <ItemList />
    <FuncLifeCycle />
    <FuncUseState />
    <HocNovel title={novel.title} author={novel.author} 
    description={novel.description} type={novel.type} />
    <FuncComp />
    <ClassComp />  
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

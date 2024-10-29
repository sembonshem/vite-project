import React, { useEffect } from "react";

const FuncLifeCycle = () => {
   //step 1 in itnitialising usestate
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState('red');
  const [externaldata, setExternalData] = React.useState(null);
  console.log('step 1 itnitialising usestates: Fetch data');

  //step 2 in itnitialising
  // called after usestate to perform any effects
 //which with an empty dependency
 //array to ensure the effect runs only once after the initial render. 
  useEffect(() => {
// add CORS origin alow block to web server or add cors module to django app whose link u put here
//     <IfModule mod_headers.c>
//     Header set Access-Control-Allow-Origin "*"
//     Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
//     Header set Access-Control-Allow-Headers "Content-Type, Authorization"
// </IfModule>
    const requestOptions = {
      method: "POST",
      redirect: "follow",
        headers: {
			'Content-Type': 'application/x-www-form-urlencoded',  // Set content type for form encoding  to be passed as form data
        },
        body: {},
        cache: "no-cache"
    };
    
    fetch("https://bcs.nftconsult.com/api", requestOptions)
      .then((response) => response.text())
      .then((result) => setExternalData(result))
      .catch((error) => {console.error('Error fetching data:', error)
        setExternalData('Error fetching data');
    });
    console.log('step 2 itnitialising effects: Fetch data');
  });

  //timer exmaple with cleanup incase of dismount
  useEffect(() => {
    const timerTick = setInterval(() => {
      console.log('Timer tick:', new Date().toLocaleTimeString());
    }, 10000);
    return () => {
      clearInterval(timerTick);
      console.log('timer cleanedup during dismount');
    };
  }, []);

  return(
    <>
      <h2>Function component life cycle</h2>
      <input type='number' value={count} onChange={(e) => setCount(e.target.value)} />
      <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />
      <div style={{ color: color }}>count:{count}</div>
      <h3>External Data: {externaldata}</h3>
      {/* colors should be color codes instead of standard words to
       avoid being converted to RGB on render and failing test */}
      <button onClick={() => setColor('#10d510')}>Force color to Green</button>
    </>
  )

};

export default FuncLifeCycle;

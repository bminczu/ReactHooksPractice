import React, {useState} from 'react';




function App() {

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')

  //if you don't want your state "clashing" separate them



  function decrementCount(){
    setCount(prevCount => prevCount -1)
  }

  function incrementCount(){
   setCount(prevCount => prevCount + 1)
   setTheme('light')
  //  setCount(prevCount => prevCount + 1)
  }
  return(

    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>

    </div>
  )
}



export default App;

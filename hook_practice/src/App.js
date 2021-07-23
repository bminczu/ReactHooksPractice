import React, {useState} from 'react';




function App() {

  const [state, setState] = useState({count: 55, theme: "dark"})
  const count = state.count
  const theme = state.theme


  function decrementCount(){
    setState(prevState => {
      return {...prevState, count: prevState.count - 1}
    })
    // setCount(prevCount => prevCount - 1)
  }

  function incrementCount(){
    setState(prevState => {
      return {...prevState, count: prevState + 1}
    })
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

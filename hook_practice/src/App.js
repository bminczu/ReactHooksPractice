import React, {useState} from 'react';




function App() {

  const [count, setCount] = useState(89)

  function decrementCount(){
    setCount(count-1)
  }

  return(

    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>

    </div>
  )
}



export default App;

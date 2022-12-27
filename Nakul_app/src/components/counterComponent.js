import { useState } from 'react';
function CounterComponent() {
  // const state = useState();
  const [count, setCount] = useState(0)

  function incNum() {
    setCount(count + 2)
  }

  return (
    <div>
      <h1 className='number'>{count}</h1>
      <button className="addbtn" onClick={incNum}>Click to add</button>
    </div>
  )
}

export default CounterComponent;

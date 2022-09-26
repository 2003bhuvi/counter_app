import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5 ">
      <div className='card text-center my-5 '>
        <div className='card-body border-0'>
          <h1 className="t1"> 🔥🔥 Counter App 🔥🔥</h1>
          <div className='my-5'>
            <h2 className='my-5 t1'> 😂 {count} 😂</h2>
            <div className="btngroup">
            <button className='btn btn-success mx-3 habibula' onClick={() => setCount(count + 1)}>LIKE</button>
            <button className='btn btn-danger mx-3 habibula' onClick={() => setCount(count - 1)} disabled={count === 0}>DISLIKE</button>
            <button className='btn btn-primary mx-3 habibula' onClick={() => setCount(count + 1)}>SUBSCRIBE</button>
            <button className='btn btn-secondary mx-3 habibula' onClick={() => setCount(count - 1)} disabled={count === 0}>UNSUBSCRIBE</button>
            <button className='btn border mx-3 habibula' onClick={() => setCount(0)}>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

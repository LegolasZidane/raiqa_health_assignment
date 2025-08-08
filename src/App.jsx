import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
//F5CBCB
//748DAE
//9ECAD6
  return (
    <>

      <div className="bg-[#F5CBCB] counter w-1/3 h-1/5 flex flex-col justify-evenly">

        <div className="heading-counter">
          <h1 className="bg-[#748DAE] inline rounded-lg">Counter App</h1>
        </div>

        <div className="mid-counter flex justify-evenly">
          <button onClick={() => setCount((count) => count + 1)}>
            incr
          </button>
          <h1>{count}</h1>
          <button onClick={() => setCount((count) => count + 1)}>
            incr
          </button>
        </div>

        <div className="end-counter flex justify-center">
          <button>
            Add
          </button>
        </div>

      </div>

      <div className="bg-[#F5CBCB] list w-1/3 h-3/5 flex flex-col">

        <div className="heading-list flex items-center justify-evenly py-4">

          <button>
            Add
          </button>
          <h1>List</h1>
          <button>
            Add
          </button>

        </div>

        <div className="mid-list flex-col">

          

        </div>

      </div>

    </>
  )
}

export default App

import { useState } from 'react';

export default function Counter(props){

    const [count, setCount] = useState(0);

    function handleClick(operation){

    if( count === 0 && operation === 'decr' )
      console.log('Respect the constraint');
    else if( operation === 'incr' )
      setCount((prev) => prev + 1);
    else
      setCount((prev) => prev - 1)

  }

    return (
        <div className="bg-[#F5CBCB] border-4 border-[#748DAE] counter w-1/4 h-1/5 flex flex-col justify-evenly rounded-md">
            <div className="heading-counter bg-[#748DAE] rounded-lg flex justify-evenly">
                <h1>Counter App</h1>
            </div>

            <div className="mid-counter flex justify-evenly text-center">
                <button className="bg-[#748DAE] w-8 h-8 rounded-full" onClick={() => handleClick('incr')}>
                    +
                </button>
                <h1 className="bg-[#748DAE] rounded-full">{count}</h1>
                <button className="bg-[#748DAE] w-8 h-8 rounded-full" onClick={() => handleClick('decr')}>
                    -
                </button>
            </div>

            <div className="end-counter flex justify-center">
                <button className="bg-[#748DAE] p-2 rounded-lg" onClick={() => {
                    props.onAdd(count);
                    setCount(() => 0);
                }}>
                    Add
                </button>
            </div>
        </div>
    );
}
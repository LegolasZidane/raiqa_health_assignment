import { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [ list, setList ] = useState([]);
  const [ sort, setSort ] = useState(true);
  const [ max, setMax ] = useState(-1);
  const [ min, setMin ] = useState(50000);
//FFEAEA
//F5CBCB
//748DAE
//9ECAD6

  function handleAdd(count){

    if( count === 0 )
      return;

      setList((prev) => prev.filter((item) => count !== item));

      if( max < count )
        setMax(count);
      if( min > count )
        setMin(count);
      
      setList((prev) => [...prev, count]);
      console.log(list);

  }

  function handleSort(){
    
    if( sort ){

      setList((prev) => prev.sort((a,b) => a - b));
      setSort((prev) => !prev);

    } else {

      setList((prev) => prev.sort((a,b) => b - a));
      setSort((prev) => !prev);

    }

  }

  return (
    <>
      <Counter onAdd={handleAdd}/>

      <div className="bg-[#F5CBCB] border-4 border-[#748DAE] list w-1/4 h-3/5 flex flex-col rounded-md">

        <div className="heading-list bg-[#748DAE] rounded-lg flex items-center justify-evenly py-4">

          <button onClick={() => setList(() => [])} className="rounded-lg">
            Reset
          </button>
          <h1>List</h1>
          <button onClick={handleSort}>
            Sort {sort ? "ASC" : "DESC"}
          </button>

        </div>

        <div className="mid-list flex-col h-full w-full flex flex-col items-center">

          {list.map((item) => {
            
            if( item === max || item === min )
              return <p className="bg-[#748DAE] p-2 inline rounded-2xl">{item}</p>
            else
              return <p className="text-black inline rounded-lg">{item}</p>

          })}

        </div>

      </div>

    </>
  )
}

export default App

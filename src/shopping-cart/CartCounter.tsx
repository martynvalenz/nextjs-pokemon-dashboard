'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';
import { useEffect/* , useState */ } from 'react';

interface Props {
  value?: number;
}
export interface CounterResponse {
  count:  number;
  method: string;
}

// export const CartCounter = ({value = 0}:Props) => {
//   const [count, setCount] = useState(value);
  
//   return (
//     <>
//       <span className="text-9xl">{count}</span>

//       <div className="flex flex-row">
//         <button className="flex items-center justify-center p-2 text-2xl rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={() => setCount(count + 1)}>+1</button>

//         <button className="flex items-center justify-center p-2 text-2xl rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={() => setCount(count - 1)}>-1</button>
//       </div>
//     </>
//   )
// }

const getApiCounter = async ():Promise<CounterResponse> => {
  const data = await fetch('/api/counter')
  .then(res => res.json());

  return data as CounterResponse;
}

export const CartCounter = ({value = 0}:Props) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter()
    .then(({count}) => {
      dispatch(initCounterState(count));
    });
  }, [dispatch]);
  
  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex flex-row">
        <button className="flex items-center justify-center p-2 text-2xl rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={() => dispatch(addOne())}>+1</button>

        <button className="flex items-center justify-center p-2 text-2xl rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={() => dispatch(substractOne())}>-1</button>
      </div>
    </>
  )
}
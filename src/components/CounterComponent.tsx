import React from 'react'
import { useAppSelector } from '../redux/hooks';

const CounterComponent = () => {
  const count = useAppSelector((e) => e.counter)
  return <div>Counter Component: {count} </div>;
}

export default CounterComponent
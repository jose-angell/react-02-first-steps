import { useState } from 'react'
import './ItemCounter.css'
interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({name, quantity = 1}: Props) => {
// los hooks siempre van en el nivel mas alto del componente
  const [count, setCount] =  useState(quantity);

  const handeAdd = () => {
    setCount(count +1)
  }
  const handleSubtract = () => {
    if(count == 1) return;
    setCount(count -1);
  }

  return (
    <section 
       className='item-row'
    >
        <span
        className='item-text'
        style={{ color: count == 1 ? 'red' : 'black'}}
        > {name}</span>
        <button
        onClick={handeAdd}
        > +1 </button>
        <span> {count} </span>
        <button
        onClick={handleSubtract}
        > -1 </button>
    </section>
  )
}

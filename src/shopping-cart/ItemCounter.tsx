import { useState } from 'react'

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
        style = {{
        display: 'flex',
        alignItems: 'center',
        gap: 10
    }}>
        <span style={{ width: 150 }}
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

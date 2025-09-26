import React from 'react'

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = (props: Props) => {
  return (
    <section 
        style = {{
        display: 'flex',
        alignItems: 'center',
        gap: 10
    }}>
        <span style={{ width: 150 }}
        > {props.name}</span>
        <button> +1</button>
        <span> {props.quantity} </span>
        <button> -1</button>
    </section>
  )
}

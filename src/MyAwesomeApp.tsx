import type { CSSProperties } from "react";

const firstName = 'Jose angel';
const lastName = 'Gallardo';
const favoriteGames = ['Metal Gear', 'Death Stranding', 'Half Life'];
const isActive = false;
const address ={
    street: 'Calle falsa',
    number: 123,
    country: 'USA'
}  
const myStyles: CSSProperties = {

    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30
}
export function MyAwesomeApp(){

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <p>{isActive ? 'Activo' : 'No Activo'}</p>
            <p>{address.street}</p>
            <p style={myStyles}
            >{JSON.stringify(address)}</p>
        </>
    )
}
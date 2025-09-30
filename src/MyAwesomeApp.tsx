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
        <div data-testid="div-app">
            <h1 data-testid="first-name-little">{firstName}</h1>
            <h3>{lastName}</h3>
            <p className="mi-clase-favorita">{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>
            <p>{address.street}</p>
            <p style={myStyles}
            >{JSON.stringify(address)}</p>
        </div>
    )
}
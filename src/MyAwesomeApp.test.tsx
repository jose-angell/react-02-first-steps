import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import {render, screen} from '@testing-library/react'

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        const {container} = render(<MyAwesomeApp/>)
        //screen.debug()
        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain("Jose angel")
        const h3 = container.querySelector('h3');
        expect(h3?.innerHTML).toContain("Gallardo")
    })
    // test('should render firstName and lastName - screen', () => {
    //     render(<MyAwesomeApp/>)
    //     screen.debug()
    //     const h1 = screen.getByRole('heading', {
    //         level: 1
    //     });
    //     expect(h1.innerHTML).toContain("Jose angel")
    //     const h3 = screen.getByRole('heading', {
    //         level: 3
    //     });
    //     expect(h3.innerHTML).toContain("Gallardo")
    // })
    test('should match snapshot', () => {
        const {container} = render(<MyAwesomeApp/>)
        expect(container).toMatchSnapshot()
    })
// se asegura de que el componente no cambie
    test('should match snapshot', () => {
        render(<MyAwesomeApp/>)
        expect(screen.getByTestId('div-app')).toMatchSnapshot()
    })
})
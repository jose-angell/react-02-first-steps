import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemConter = vi.fn((props: unknown) => {
    return <div data-testid="ItemCounter" />
});
vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) =>  mockItemConter(props)
}));
//vi.mock('./shopping-cart/ItemCounter', () => ({
    //ItemCounter: (props: unknown) => (
    //<div data-testid="ItemCounter" name={props.nmae} quantity={props.quantity} />
    //),
//}));

describe('FirstStepsApp', () => {
    afterEach(() => {
        vi.clearAllMocks();
    })
    test('should match snapshot', () =>{
        const {container} = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    });
    test('should render the correct number of ItemCounter componentes', () => {
        render(<FirstStepsApp />);
        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toBe(3);
    });
    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);
        expect(mockItemConter).toHaveBeenCalledTimes(3)
        expect(mockItemConter).toHaveBeenCalledWith({
        name: "Nintendo Switch",quantity: 1
        });
        expect(mockItemConter).toHaveBeenCalledWith({
        name: "Pro Controller", quantity: 2
        });
        expect(mockItemConter).toHaveBeenCalledWith({
        name: "Super Smashs", quantity: 5
        });
    })
});
import {describe, expect, test} from 'vitest'
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
    test('should add two positive numbers', () => {
    
        // 1. Arrange
        const a = 1;
        const b = 2;
    
        // 2. Act
        const result = add(a, b);
    
        // 3. Assert
        expect(result).toBe(3);
    })
    test('should add two negative numbers', () => {
    
        // 1. Arrange
        const a = -1;
        const b = -2;
    
        // 2. Act
        const result = add(a, b);
    
        // 3. Assert
        expect(result).toBe(-3);
    })
})

describe('subtract', () => {
    test('shoud subtract two positive numbers', () => {
        // 1. Arrange 
        const a = 2
        const b = 1

        // 2. Act
        const result = subtract(a, b)

        // 3. Asset
        expect(result).toBe(1);
    })
    test('shoud subtract two negative numbers', () => {
        // 1. Arrange 
        const a = -2
        const b = -1

        // 2. Act
        const result = subtract(a, b)

        // 3. Asset
        expect(result).toBe(-1);
    })
})

describe('multiply', () => {
    test('shoud multiply two positive numbers', () => {
        // 1. Arrange
        const a = 1;
        const b = 2;
        // 2. Act
        const result = multiply(a, b);
        // 3. Assert
        expect(result).toBe(2);
    })
    test('shoud multiply two negative numbers', () => {
        // 1. Arrange
        const a = -1;
        const b = -2;
        // 2. Act
        const result = multiply(a, b);
        // 3. Assert
        expect(result).toBe(2);
    })
    test('shoud multiply one positive number and one negative number', () => {
        // 1. Arrange
        const a = 1;
        const b = -2;
        // 2. Act
        const result = multiply(a, b);
        // 3. Assert
        expect(result).toBe(-2);
    })
})


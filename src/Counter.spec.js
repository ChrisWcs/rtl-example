import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import HooksCounter from './HooksCounter'
import ClassCounter from './ClassCounter'

afterEach(cleanup)

it("is a HooksCounter with an increment button. It 0 then 1", () => {
    // Arrange
    const { getByTestId } = render(<HooksCounter />)
    const count = getByTestId('count')
    const plusButton = getByTestId('plus')

    // Asserting that it starts at 0
    expect(count.textContent).toBe('0')

    // Act
    fireEvent.click(plusButton)

    // Asserting that it now is 1
    expect(count.textContent).toBe('1')
})

it("is a ClassCounter with an increment button. It 0 then 1.", () => {
    // Arrange
    const { getByTestId } = render(<ClassCounter />)
    const count = getByTestId('count')
    const plusButton = getByTestId('plus')

    // Asserting that it starts at 0
    expect(count.textContent).toBe('0')

    // Act
    fireEvent.click(plusButton)

    // Asserting that it now is 1
    expect(count.textContent).toBe('1')
})
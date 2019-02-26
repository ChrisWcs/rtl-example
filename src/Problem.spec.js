import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import Problem from './Problem'

afterEach(cleanup)

it("has two inputs that I can change to see if it works", () => {
    // Arrange
    const { getByTestId } = render(<Problem total={30}/>)
    const checkResult = getByTestId('check')
    const input_one = getByTestId('input_one')
    const input_two = getByTestId('input_two')
    const result = getByTestId('result')

    // Act
    fireEvent.change(input_one, { target: { value: '10' } })
    fireEvent.change(input_two, { target: { value: '15' } })
    fireEvent.click(checkResult)

    // Asserting that it now is 1
    expect(result.textContent).toBe('Good')
})
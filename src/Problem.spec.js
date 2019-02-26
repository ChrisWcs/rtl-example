import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import Problem from './Problem'

afterEach(cleanup)

it("has two inputs that I can change to see if it works", () => {
    // Arrange
    const { getByTestId, getByPlaceholderText, getByLabelText } = render(<Problem total={30}/>)
    const checkResult = getByTestId('check')
    const input_one = getByPlaceholderText('Place the first number here!')
    const input_two = getByLabelText('Number 2')
    const result = getByTestId('result')

    // Act
    fireEvent.change(input_one, { target: { value: 10 } })
    fireEvent.change(input_two, { target: { value: 20 } })
    fireEvent.click(checkResult)

    // Asserting that it was correct
    expect(result.textContent).toBe('Good')
})
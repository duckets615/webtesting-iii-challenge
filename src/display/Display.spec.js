// Test away!
import {render,cleanup} from 'react-testing-library';
import Display from './Display.js';
import React from 'react';
import 'react-testing-library/cleanup-after-each';

afterEach(cleanup);

describe('Display', () => {
  test('render color at start?', () => {
    const {getByTestId} = render (<Display className = 'green-led'/>);
    getByTestId('green-led')
  })
  test('unlocked at the start?', () => {
    const {getByTestId} = render(<Display className = 'green-led'/>)
    getByTestId('unlocked-class')
  })
})

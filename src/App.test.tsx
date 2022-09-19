import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

// TDD -> 테스트 먼저 작성하고 컴포넌트를 작성하는 식으로
// 해야할일 -> 테스트 작성 -> 테스트 실패 -> 테스트에 대응하는 코드 작성 -> 테스트 작성
test('the counter starts at 0', () => {
  render(<App />);
  // screen object를 이용
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(String(0))
});

test('minus button has correct text,', () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId('minus-button');
  expect(minusButtonElement).toHaveTextContent('-')
});

test('plus button has correct text,', () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toHaveTextContent('+')
});

// FireEvent Api : 유저가 발생시키는 액션에 대한 테스트를 해야하는 경우 사용 
test('when the + button is pressed, the counter changes to 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement)
  // 카운터를 잡아서 확인 
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(String(1))
});

test('when the - button is pressed, the counter changes to -1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  fireEvent.click(buttonElement)
  // 카운터를 잡아서 확인 
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(String(-1))
});

test('on/off button has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button')
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'})
});


test('prevent the -.+ button on/off 버튼 클릭', () => {
  render(<App />);
  const onOffButton  = screen.getByTestId('on/off-button')
  fireEvent.click(onOffButton)
  const plusButtonElement = screen.getByTestId('plus-button')
  expect(plusButtonElement).toBeDisabled()
});
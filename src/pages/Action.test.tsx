import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Action from './Action';
/**
 * 1. getByRole:  accessibility tree에 노출된 모든 요코를 쿼리하는데 사용가능. 
 * 2. getByLabelText: 웹사이트 양식을 탐색할때 레이블 텍스트를 사용하여 요소를 찾음 
 * 3. getByPlaceholderText: placeholder에 있는 레이블 텍스트 사용하여 요소 찾음
 * 4. getByText: form외부에서 텍스트 콘텐츠를 찾는 주요한 방법. div, span등을 찾는데 사용할수있음
 */
test('버튼 클릭 이벤트 테스트', ()=>{
    // Render: DOM에 컴포넌트를 렌더링 하는 함수 
    // => 소스코드가 복잡해지면 비추, screen object를 사용
    render(<Action />)
    // getByRole이란: 특정 Role을 지니고 있는 엘리먼트 선택
    const event = screen.getByRole('button')
    fireEvent.click(event)
    userEvent.click(event)
})
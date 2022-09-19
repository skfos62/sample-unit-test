import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {cleanup, fireEvent, render,screen} from '@testing-library/react';
import Test from './Test';

test('컴포넌트 텍스트 테스트', ()=>{
    render(<Test /> );
    // getByText란? 해당하는 텍스트를 가진 컴포넌트를 찾는것
    // 성공 케이스 
    screen.getByText('컴포넌트 텍스트');
    // 실패케이스
    // screen.getByText('실패 테스트');
})


import Account, { sum, TestItems } from './Account'
import {act, queryAllByDisplayValue, render,screen} from '@testing-library/react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import { order } from './Account'

let container: any = null 

beforeEach(()=>{
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(()=>{
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

test("renders with or without a name", () => {
    const {container} = render(<Account name='테스트 텍스트'/>)
    expect(container.textContent).toBe("테스트 텍스트");
});

// 테스트할 array 
const menuItems: TestItems[] =[
  {
    id:1,
    name: 'burger',
    price: 10,
  },
  {
    id:2,
    name: '비빔밥',
    price: 20,
  },
  {
    id:3,
    name: '불고기',
    price: 30,
  },
]
// describe를 활용하여 테스트들을 감싸는 블록을 만들수 있음
describe("account functions test", () => {
  // array test 
  test("build an order object", ()=> {
    const result = {
      orderItems: menuItems,
      total:menuItems.length,
    }
    expect(order(menuItems)).toEqual(result)
  })
  // sum function test
  test("sum function", ()=>{
    expect(sum(4)).toBe(8)
  })
})


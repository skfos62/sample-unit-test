import React from 'react';

// 버튼 액션을 테스트 하기 위한 코드
export default function Action() {
    const [count,setCount] = React.useState(0)
    const increment =()=>{
        setCount(count+1)
    }
    return (
        <div>
            <button onClick={increment}>증가 클릭</button>
        </div>
    )
}
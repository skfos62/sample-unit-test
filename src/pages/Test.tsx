import React from 'react';

interface TestProps {
    selected?: boolean 
}

export default function Test({selected}:TestProps) {
    return (
        <div>
            <p style={{color: selected ? 'red' : 'gray'}}>컴포넌트 텍스트</p>
        </div>
    )
}
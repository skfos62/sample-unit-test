interface AccountProps {
    name: string
}
export interface TestItems {
    id: number
    name: string
    price: number
}
// test 파일에서 검사하는 함수
export function order(items: TestItems[]) {
    const total = items.length
    return {
        orderItems: items,
        total,
    }
}

export function sum(input: number): number {
    const result = input + input
    return result
}

const Account = ({name}: AccountProps) => {
    return(
        <div>
            {name}
        </div>
    )
}

export default Account
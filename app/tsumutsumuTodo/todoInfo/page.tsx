import CoinWithInfo from "@/components/tsumutsumuTodo/coinWithInfo";


// サーバで取得したデータのダミー
const currentInfo = {
    currentCoin: 8000000
}

// サーバで取得したデータのダミー
const dbData = [
    {
        goalTitle: 'test',
        goalDescription: 'test',
        goalDeadline: '2025-1-1',
        goalCoin: 20000000,
        currentCoin: 7500000,
        goalBox: 500,
    },
    {
        goalTitle: 'test',
        goalDescription: 'test',
        goalDeadline: '2025-1-1',
        goalCoin: 20000000,
        currentCoin: 7500000,
        goalBox: 500,
    },
    {
        goalTitle: 'test',
        goalDescription: 'test',
        goalDeadline: '2025-1-1',
        goalCoin: 20000000,
        currentCoin: 7500000,
        goalBox: 500,
    },
]


const TodoPage = () => {

    return (
        <>
            <CoinWithInfo dbData={dbData} currentInfo={currentInfo} />
        </>
    )
}

export default TodoPage;

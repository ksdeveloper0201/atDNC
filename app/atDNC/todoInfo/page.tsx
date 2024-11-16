import CoinWithInfo from "@/components/atDNC/coinWithInfo";
import { fetchGetUsers } from "@/lib/controler";
import { getData } from "@/lib/neon-control";


// サーバで取得したデータのダミー
const currentInfo = {
    username: 'satoshi',
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
        goalDeadline: '2026-1-1',
        goalCoin: 50000000,
        currentCoin: 7500000,
        goalBox: 500,
    },
    {
        goalTitle: 'test',
        goalDescription: 'test',
        goalDeadline: '2024-11-1',
        goalCoin: 20000000,
        currentCoin: 7500000,
        goalBox: 500,
    },
]


const TodoPage = async () => {
    const neonData = await getData()
    console.log('neonData', neonData)

    const users = await fetchGetUsers()
    console.log('todoPage users', users)


    return (
        <>
            <CoinWithInfo dbData={dbData} currentInfo={currentInfo} />
        </>
    )
}

export default TodoPage;

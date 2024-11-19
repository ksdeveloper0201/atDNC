import CoinWithInfo from "@/components/atDNC/coin-with-info";
import { fetchGetUsers } from "@/lib/controller";
// import { getData } from "@/lib/neon-control";
import { useSearchParams } from "next/navigation";


// サーバで取得したデータのダミー
// const currentInfo = {
//     username: 'satoshi',
//     currentCoin: 8000000
// }

// サーバで取得したデータのダミー
// const dbData = [
//     {
//         goalTitle: 'test',
//         goalDescription: 'test',
//         goalDeadline: '2025-1-1',
//         goalCoin: 20000000,
//         currentCoin: 7500000,
//         goalBox: 500,
//     },
//     {
//         goalTitle: 'test',
//         goalDescription: 'test',
//         goalDeadline: '2026-1-1',
//         goalCoin: 50000000,
//         currentCoin: 7500000,
//         goalBox: 500,
//     },
//     {
//         goalTitle: 'test',
//         goalDescription: 'test',
//         goalDeadline: '2024-11-1',
//         goalCoin: 20000000,
//         currentCoin: 7500000,
//         goalBox: 500,
//     },
// ]

const currentInfo = { currentCoin: 0 }
const dbData: any[] = []


const TodoPage = async () => {
    // const searchParams = useSearchParams()
    // const queryCurrentCoin = searchParams.get('currentCoin')
    // console.log('queryCurrentCoin', queryCurrentCoin)

    // const neonData = await getData()
    // console.log('neonData', neonData)

    const users = await fetchGetUsers()
    console.log('todoPage users', users)


    return (
        <>
            <CoinWithInfo dbData={dbData} currentInfo={'currentCoin' in currentInfo ? currentInfo : { currentCoin: 0 }} />
        </>
    )
}

export default TodoPage;

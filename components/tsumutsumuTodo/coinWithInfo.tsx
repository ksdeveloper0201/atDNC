'use client'

import TodoInfo from "@/components/tsumutsumuTodo/todoInfo";

interface CoinWithInfoType {
    currentInfo: CurrentInfoType;
    dbData: TodoObj[]
}


const CoinWithInfo: React.FC<CoinWithInfoType> = ({ currentInfo, dbData }) => {
    const updateCurrentCoin = (value: number) => {
        currentInfo.currentCoin = value
    }

    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col items-center p-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Todo Info</h1>

                {/* Current Coin Count */}
                <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md'>
                    <div className='text-center'>
                        <span className='text-lg text-gray-600'>現在のコイン数</span>
                        <span className='block text-3xl font-bold text-indigo-600 mt-2'>{currentInfo.currentCoin.toLocaleString()} 枚</span>
                    </div>
                </div>

                {/* Update Coin Section */}
                <div className='bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-6'>
                    <span className='text-lg text-gray-700 mb-2 block'>現在のコイン数を更新する</span>
                    <input
                        type="text"
                        placeholder="現在のコイン数を入力"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    {/* currentCointを更新 */}
                    <button className='w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700' onClick={() => updateCurrentCoin}>
                        更新する
                    </button>
                </div>

                {/* Todo Info List */}
                {dbData.length > 0 &&
                    dbData.map((data, index) => {
                        return (
                            <div key={index} className="my-4 w-full max-w-md">
                                <TodoInfo todoObj={data} currentCoin={currentInfo} />
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}

export default CoinWithInfo;

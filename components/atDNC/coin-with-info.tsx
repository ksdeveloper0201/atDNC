'use client'

import TodoInfo from "@/components/atDNC/todo-info";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface CoinWithInfoType {
    currentInfo?: CurrentInfoType;
    dbData?: TodoObj[]
}

const CoinWithInfo: React.FC<CoinWithInfoType> = ({ currentInfo, dbData }) => {
    const searchParams = useSearchParams();

    if (dbData && dbData.length === 0) {
        dbData = [{
            goalTitle: searchParams.get('goalTitle') ?? '',
            goalDeadline: searchParams.get('goalDeadline') ?? '',
            goalCoin: parseInt(searchParams.get('goalCoin') ?? "0"),
            currentCoin: parseInt(searchParams.get('currentCoin') ?? "0"),
            goalBox: parseInt(searchParams.get('goalBox') ?? "0"),
        }];
    }

    const [currentCoin, setCurrentCoin] = useState(currentInfo && currentInfo.currentCoin !== 0 ? currentInfo.currentCoin : parseInt(searchParams.get('currentCoin') ?? "0"));
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const updateCurrentCoin = () => {
        const newCoinValue = parseInt(inputValue);

        if (!isNaN(newCoinValue)) {
            setCurrentCoin(newCoinValue);
        }
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
            {/* Current Coin Count */}
            <div className="w-full max-w-3xl p-3">
                <div className="text-center">
                    <p className="text-lg text-gray-600">現在のコイン数</p>
                    <p className="text-4xl font-extrabold text-indigo-600 mt-2">{currentCoin.toLocaleString()} 枚</p>
                </div>
            </div>

            {/* Update Coin Section */}
            <div className="w-full max-w-3xl p-3">
                <p className="text-lg text-gray-700 mb-4">現在のコイン数を更新する</p>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="現在のコイン数を入力"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        onClick={updateCurrentCoin}
                    >
                        更新する
                    </button>
                </div>
            </div>

            {/* Todo Info List */}
            {dbData && dbData.length > 0 && (
                <div className="w-full max-w-3xl mt-6 space-y-4">
                    {dbData.map((data, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6">
                            <TodoInfo todoObj={data} currentCoin={currentCoin} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CoinWithInfo;
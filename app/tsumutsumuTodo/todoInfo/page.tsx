'use client';

import { formatDate } from '@/utils/util-function';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";

const TodoInfo = () => {
    const searchParams = useSearchParams();

    const todoObject = {
        goalTitle: searchParams.get('goalTitle') ?? '',
        goalDescription: searchParams.get('goalDescription') ?? '',
        goalDeadline: searchParams.get('goalDeadline') ?? new Date().toISOString(), // フォーマットをISOに統一
        goalCoin: parseInt(searchParams.get('goalCoin') ?? '0'),
        currentCoin: parseInt(searchParams.get('currentCoin') ?? '0'),
        goalBox: parseInt(searchParams.get('goalBox') ?? '0'),
    };

    // goalDeadlineが有効か確認
    const goalDeadline = new Date(todoObject.goalDeadline);
    const today = new Date();

    // 無効な日付に対処
    if (isNaN(goalDeadline.getTime())) {
        console.error('Invalid goalDeadline:', todoObject.goalDeadline);
        return <div>Invalid goal deadline provided.</div>;
    }

    // 日付の差を計算
    const tillGoalDatesTime = goalDeadline.getTime() - today.getTime();
    const tillGoalDates = Math.floor(tillGoalDatesTime / (1000 * 60 * 60 * 24));

    // コインの計算
    const goalCoin = todoObject.goalCoin ? todoObject.goalCoin : todoObject.goalBox * 30000;
    const goalBox = todoObject.goalBox ? todoObject.goalBox : Math.floor(todoObject.goalCoin / 30000);

    // 残り日数が0以下の場合の処理
    const oneDayNorma = tillGoalDates > 0 ? Math.floor((goalCoin - todoObject.currentCoin) / tillGoalDates) : 0;

    const calculatedTodoData = {
        ...todoObject,
        goalCoin: goalCoin,
        goalBox: goalBox
    };

    const sendTodoData = () => {
        try {
            localStorage.setItem('todoData', JSON.stringify(calculatedTodoData));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    };

    return (
        <div className='grid gap-6 p-6 bg-white shadow-md rounded-lg'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                    {todoObject.goalTitle || "目標なし"}
                </h1>
                <p className='text-gray-500'>{todoObject.goalDescription}</p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
                <div className='flex flex-col items-center'>
                    <span className='text-lg text-gray-700'>目標コイン枚数</span>
                    <span className='text-2xl font-semibold text-indigo-600'>{goalCoin} 枚</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='text-lg text-gray-700'>目標ボックス数</span>
                    <span className='text-2xl font-semibold text-indigo-600'>{goalBox} 個</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='text-lg text-gray-700'>現在のコイン枚数</span>
                    <span className='text-2xl font-semibold text-indigo-600'>{todoObject.currentCoin} 枚</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='text-lg text-gray-700'>目標期日</span>
                    <span className='text-xl font-semibold text-red-500'>{formatDate(todoObject.goalDeadline)}</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='text-lg text-gray-700'>残日数</span>
                    <span className='text-2xl font-semibold text-green-500'>{tillGoalDates} 日</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='text-lg text-gray-700'>1日のノルマコイン数</span>
                    <span className='text-2xl font-semibold text-blue-500'>{oneDayNorma} 枚</span>
                </div>
            </div>

            <div className='flex justify-center mt-6'>
                <Button onClick={sendTodoData} className='bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-lg shadow'>
                    登録する
                </Button>
            </div>
        </div>
    );
};

export default TodoInfo;

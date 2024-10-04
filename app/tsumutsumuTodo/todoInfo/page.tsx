'use client'

import { formatDate } from '@/utils/util-function';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Button } from "@/components/ui/button"

const TodoInfo = () => {
    const searchParams = useSearchParams();

    const todoObject = {
        goalTitle: searchParams.get('goalTitle') ?? '',
        goalDescription: searchParams.get('goalDescription') ?? '',
        goalDeadline: searchParams.get('goalDeadline') ?? (new Date()).toString(),
        goalCoin: parseInt(searchParams.get('goalCoin') ?? '0'),
        currentCoin: parseInt(searchParams.get('currentCoin') ?? '0'),
        goalBox: parseInt(searchParams.get('goalBox') ?? '0'),
    };

    const goalDeadline = new Date(todoObject.goalDeadline);
    const today = new Date();
    const tillGoalDatesTime = goalDeadline.getTime() - today.getTime();
    const tillGoalDates = Math.floor(tillGoalDatesTime / (60 * 60 * 24 * 1000));

    const goalCoin = todoObject.goalCoin ? todoObject.goalCoin : todoObject.goalBox * 30000;
    const goalBox = todoObject.goalBox ? todoObject.goalBox : Math.floor(todoObject.goalCoin / 30000);
    const oneDayNorma = (goalCoin - todoObject.currentCoin) / tillGoalDates;

    return (
        <>
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
                        <span className='text-2xl font-semibold text-blue-500'>{Math.floor(oneDayNorma)} 枚</span>
                    </div>
                </div>

                <div className='flex justify-center mt-6'>
                    <Button className='bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-lg shadow'>
                        登録する
                    </Button>
                </div>
            </div>
        </>
    );
};

const TodoInfoPage = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <TodoInfo />
        </Suspense>
    );
}

export default TodoInfoPage;

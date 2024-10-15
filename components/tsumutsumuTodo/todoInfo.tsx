'use client';

import { formatDate } from '@/utils/util-function';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { useEffect, useState, useMemo } from 'react';

interface TodoObj {
    goalTitle: string;
    goalDescription: string;
    goalDeadline: string;
    goalCoin: number;
    goalBox: number;
}

interface TodoInfoProps {
    todoObj?: TodoObj;
    currentCoin: number
}

const TodoInfo: React.FC<TodoInfoProps> = ({ todoObj, currentCoin }) => {
    const searchParams = useSearchParams();

    const [todoObject, setTodoObject] = useState<TodoObj>({
        goalTitle: '',
        goalDescription: '',
        goalDeadline: new Date().toISOString(),
        goalCoin: 0,
        goalBox: 0,
    });

    const [tillGoalDates, setTillGoalDates] = useState<number | null>(null);
    const [oneDayNorma, setOneDayNorma] = useState<number | null>(null);

    // クライアント側でのみ日数やノルマの計算を行う
    useEffect(() => {
        const goalDeadline = new Date(todoObject.goalDeadline);
        const today = new Date();
        const tillGoalDatesTime = goalDeadline.getTime() - today.getTime();
        const calculatedTillGoalDates = Math.max(Math.floor(tillGoalDatesTime / (1000 * 60 * 60 * 24)), 0);

        const goalCoin = todoObject.goalCoin ? todoObject.goalCoin : todoObject.goalBox * 30000;
        const calculatedOneDayNorma = calculatedTillGoalDates > 0 ? Math.floor((goalCoin - currentCoin) / calculatedTillGoalDates) : 0;

        setTillGoalDates(calculatedTillGoalDates);
        setOneDayNorma(calculatedOneDayNorma);
    }, [todoObject, currentCoin]);

    // todoObj または searchParams のデータを使って todoObject を更新
    useEffect(() => {
        if (todoObj) {
            setTodoObject(todoObj);
        } else {
            setTodoObject({
                goalTitle: searchParams.get('goalTitle') ?? '',
                goalDescription: searchParams.get('goalDescription') ?? '',
                goalDeadline: searchParams.get('goalDeadline') ?? new Date().toISOString(),
                goalCoin: parseInt(searchParams.get('goalCoin') ?? '0'),
                goalBox: parseInt(searchParams.get('goalBox') ?? '0'),
            });
        }
    }, [searchParams, todoObj]);

    const goalCoin = useMemo(() => {
        return todoObject.goalCoin ? todoObject.goalCoin : todoObject.goalBox * 30000;
    }, [todoObject.goalCoin, todoObject.goalBox]);

    const goalBox = useMemo(() => {
        return todoObject.goalBox ? todoObject.goalBox : Math.floor(todoObject.goalCoin / 30000);
    }, [todoObject.goalCoin, todoObject.goalBox]);

    const sendTodoData = () => {
        try {
            const everDateData = JSON.parse(localStorage.getItem('dateData') ?? '{}');
            const dateData = {
                ...everDateData,
                [formatDate(new Date())]: currentCoin,
            };

            const calculatedTodoData = {
                ...todoObject,
                goalCoin: goalCoin,
                goalBox: goalBox,
            };

            localStorage.setItem('todoData', JSON.stringify(calculatedTodoData));
            localStorage.setItem('dateData', JSON.stringify(dateData));
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
                    <span className='text-2xl font-semibold text-indigo-600'>{currentCoin} 枚</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='text-lg text-gray-700'>目標期日</span>
                    <span className='text-xl font-semibold text-red-500'>{formatDate(todoObject.goalDeadline)}</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='text-lg text-gray-700'>残日数</span>
                    <span className='text-2xl font-semibold text-green-500'>{tillGoalDates !== null ? tillGoalDates : '...'} 日</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='text-lg text-gray-700'>1日のノルマコイン数</span>
                    <span className='text-2xl font-semibold text-blue-500'>{oneDayNorma !== null ? oneDayNorma : '...'} 枚</span>
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

'use client'

import { useSearchParams } from 'next/navigation'; // 必要なインポートを追加
import { Suspense } from 'react';

const TodoInfo = () => {

    const searchParams = useSearchParams()

    const todoObject = {
        goalTitle: searchParams.get('goalTitle'),
        goalDescription: searchParams.get('goalDescription'),
        goalDeadline: searchParams.get('goalDeadline'),
        goalCoin: parseInt(searchParams.get('goalCoin') ?? '0'),
        currentCoin: parseInt(searchParams.get('currentCoin') ?? '0'),
        goalBox: parseInt(searchParams.get('goalBox') ?? '0'),
    }
    
    const tillGoalDates = new Date - new Date(todoObjext.goalDeadLine)
    const oneDayNolma = todoObject.goalCoin - todoObject.currentCoin
    
    console.log('tillGoalDates', tillGoalDates)

    console.log('todoObject', todoObject)


    console.log('searchParams', searchParams)

    return (
        <>
            <div>
                <div className='text-2xl'>
                    {todoObject.goalTitle}
                </div>
            </div>
            <div>
                <div>目標コイン枚数</div>
                <div>{todoObject.goalCoin ? todoObject.goalCoin : todoObject.goalBox * 30000}枚</div>
            </div>
            <div>
                <div>目標ボックス数</div>
                <div>{todoObject.goalBox ? todoObject.goalBox : todoObject.goalCoin / 30000}枚</div>
            </div>
            <div>
                <div>現在のコイン枚数</div>
                <div>{todoObject.currentCoin}枚</div>
            </div>
            <div>
                <div>目標期日</div>
                <div>{todoObject.goalDeadline}枚</div>
            </div>
                        <div>
                <div>残日数</div>
                <div>{tillGoalDates}枚</div>
            </div>
                        <div>
                <div>1日のノルマコイン数</div>
                <div>{todoObject.goalDeadline}枚</div>
            </div>
        </>
    );
}

const TodoInfoPage = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <TodoInfo />
        </Suspense>
    )
}

export default TodoInfoPage; // 追加

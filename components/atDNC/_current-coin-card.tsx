const currentCoinCard = (dbData: TodoObj[]) => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <span className='text-lg text-gray-700'>現在のコイン数</span>
                <span className='text-2xl font-semibold text-indigo-600'>{dbData[0].currentCoin} 枚</span>
            </div>

            <div className='flex flex-col items-center'>
                <span className='text-lg text-gray-700'>現在のコイン数を更新する</span>
                <input type="text" placeholder="現在のコイン数を入力" />
            </div>
        </div>
    );
}

export default currentCoinCard;
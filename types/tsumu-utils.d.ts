interface TodoObj {
    goalTitle: string;
    goalDeadline: string;
    goalCoin: number;
    currentCoin: number;
    goalBox: number;
}

interface TodoInfoType {
    todoObj?: TodoObj;
}

interface CurrentInfoType {
    currentCoin: number;
}

// // サーバで取得したデータのダミー
// const dbData = [
//     {
//         goalTitle: 'test',
//         goalDescription: 'test',
//         goalDeadline: '2025-1-1',
//         goalCoin: 20000000,
//         currentCoin: 7500000,
//         goalBox: 500,
//     },

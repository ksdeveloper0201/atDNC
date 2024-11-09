'use client'

import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    current_coin: number
}

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState('');
    const [currentCoin, setCurrentCoin] = useState(0)

    const fetchUsers = async () => {
        console.log('call api users')
        const resHello = await fetch('/api/hello');
        console.log('res hello', resHello)
        const res = await fetch('/api/users');
        console.log('api res', res)
        const data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const addUser = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                current_coin: currentCoin
            })
        })
        if (res.ok) {
            fetchUsers();
            setName('');
            setCurrentCoin(0);
        }
    };

    return (
        <div>
            <h1>Users</h1>

            {/* ユーザー追加フォーム */}
            <form onSubmit={addUser}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="number"
                    value={currentCoin}
                    onChange={(e) => setCurrentCoin(Number(e.target.value))}
                    placeholder="Current Coin"
                    required
                />
                <button type="submit">Add User</button>
            </form>

            {/* ユーザー一覧の表示 */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.current_coin} coins
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersPage
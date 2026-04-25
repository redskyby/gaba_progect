"use client";

import { useEffect, useState } from "react";

import User from "@/src/interfaces/User";
import { makeRequest } from "@/src/utils/baseFetch";
import UserCard from "@/src/widjets/UserCard";

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const data = await makeRequest<{ users: User[] }>("https://dummyjson.com/users", "GET");
                if (data && data.users) {
                    setUsers(data.users);
                }
            } catch (error) {
                console.error("Ошибка при получении пользователей:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    if (loading) return <div className="p-8 text-center">Загрузка...</div>;
    if (!users) return <div className="p-8 text-center text-red-500">Не удалось загрузить пользователя</div>;

    return (
        <div className="flex flex-wrap gap-4">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

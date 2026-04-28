"use client";

import { Spinner } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

import { BASE_ROUTE } from "@/src/const/ApiRoutes";
import useObserver from "@/src/hooks/useObserver";
import User from "@/src/interfaces/User";
import { makeRequest } from "@/src/utils/baseFetch";
import ButtonToTop from "@/src/widgets/buttonToTop/buttonToTop";
import UserCard from "@/src/widgets/UserCard";

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [page, setPage] = useState<number>(1);
    const lastElement = useRef<HTMLDivElement | null>(null);

    console.log(users);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);

                const data = await makeRequest<{ users: User[] }>(
                    `${BASE_ROUTE}?limit=10&skip=${(page - 1) * 10}`,
                    "GET",
                );

                if (data?.users) {
                    setUsers((prev) => [...prev, ...data.users]);
                }
            } catch (error) {
                console.error("Ошибка при получении пользователей:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [page]);

    useObserver({ loading, lastElement, setPage, users });

    if (loading && users.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner size="xl" />
            </div>
        );
    }

    if (!users) return <div className="p-8 text-center text-red-500">Не удалось загрузить пользователя</div>;

    return (
        <div className="flex flex-col gap-4 max-w-2xl mx-auto py-6">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}

            {/* loader при догрузке */}
            {loading && (
                <div className="flex justify-center py-4">
                    <Spinner />
                </div>
            )}

            <ButtonToTop />
            <div ref={lastElement}></div>
        </div>
    );
}

"use client";

import { Avatar, Card, Spinner } from "@heroui/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { BASE_ROUTE } from "@/src/const/ApiRoutes";
import User from "@/src/interfaces/User";
import { makeRequest } from "@/src/utils/baseFetch";
import ButtonBack from "@/src/widjets/buttonBack/ButtonBack";
export default function Home1() {
    const [user, setUser] = useState<User | null>(null);
    const params = useParams();
    const [loading, setLoading] = useState<boolean>(true);

    const id = params.id as string;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await makeRequest<User>(`${BASE_ROUTE}/${id}`, "GET");
                if (data) setUser(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner size="xl" />
            </div>
        );
    }

    if (!user) return <div className="p-8 text-center text-red-500">Не удалось загрузить пользователя</div>;

    return (
        <div className="max-w-xl mx-auto p-6 relative min-h-screen">
            <Card className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
                {/* Аватар + имя */}
                <div className="flex items-center gap-4">
                    <Avatar className="w-20 h-20">
                        <Avatar.Image
                            src={user.image}
                            alt={`${user.firstName} ${user.lastName}`}
                            className="object-cover"
                        />
                        <Avatar.Fallback className="text-2xl font-semibold">
                            {user.firstName[0]}
                            {user.lastName[0]}
                        </Avatar.Fallback>
                    </Avatar>

                    <div>
                        <h1 className="text-2xl font-bold">
                            {user.firstName} {user.lastName}
                            {user.maidenName && <span className="text-default-500"> ({user.maidenName})</span>}
                        </h1>

                        <p className="text-default-500">
                            {user.gender === "female" ? "Женщина" : "Мужчина"}, {user.age} лет
                        </p>
                    </div>
                </div>

                {/* Контакты */}
                <div className="mt-6 space-y-1">
                    <h2 className="text-lg font-semibold">Контакты</h2>
                    <p className="text-default-600">📧 {user.email}</p>
                </div>

                {/* Адрес */}
                {user.address && (
                    <div className="mt-6 space-y-1">
                        <h2 className="text-lg font-semibold">Адрес</h2>
                        <p className="text-default-600">{user.address.address}</p>
                        <p className="text-default-600">
                            {user.address.city}, {user.address.state} ({user.address.stateCode}),{" "}
                            {user.address.postalCode}
                        </p>
                    </div>
                )}

                {/* Компания */}
                {user.company && (
                    <div className="mt-6 space-y-1">
                        <h2 className="text-lg font-semibold">Компания</h2>
                        <p className="text-default-600">{user.company.name}</p>
                        <p className="text-default-600">
                            {user.company.department} · {user.company.title}
                        </p>
                    </div>
                )}
            </Card>

            {/* Кнопка назад — внизу справа */}
            <div className="fixed bottom-6 right-6 z-50">
                <ButtonBack />
            </div>
        </div>
    );
}

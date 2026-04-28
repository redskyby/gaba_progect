import { Avatar, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

import User from "@/src/interfaces/User";
const UserCard = ({ user }: { user: User }) => {
    const router = useRouter();

    const handleRowClick = (id: number) => {
        router.push(`pages/user/${id}`);
    };

    return (
        <div className="cursor-pointer" onClick={() => handleRowClick(user.id)}>
            <Card className="p-4 shadow-sm hover:shadow-md transition-shadow rounded-xl border border-gray-200 bg-white">
                <Card.Header className="flex gap-4 items-center">
                    <Avatar className="w-16 h-16">
                        <Avatar.Image src={user.image} className="w-16 h-16 rounded-full object-cover" />
                    </Avatar>

                    <div>
                        <h1 className="text-xl font-semibold leading-tight">
                            {user.firstName} {user.lastName}
                            {user.maidenName && <span className="text-default-500"> ({user.maidenName})</span>}
                        </h1>

                        <p className="text-default-500 text-sm">
                            {user.gender === "female" ? "Женщина" : "Мужчина"}, {user.age} лет
                        </p>
                    </div>
                </Card.Header>

                <div className="mt-4 space-y-5">
                    {/* Контакты */}
                    <section>
                        <h2 className="text-md font-semibold mb-1">Контакты</h2>
                        <p className="text-default-600">📧 {user.email}</p>
                    </section>

                    {/* Адрес */}
                    {user.address && (
                        <section>
                            <h2 className="text-md font-semibold mb-1">Адрес</h2>
                            <p className="text-default-600">{user.address.address}</p>
                            <p className="text-default-600">
                                {user.address.city}, {user.address.state} ({user.address.stateCode}),{" "}
                                {user.address.postalCode}
                            </p>
                        </section>
                    )}

                    {/* Компания */}
                    {user.company && (
                        <section>
                            <h2 className="text-md font-semibold mb-1">Компания</h2>
                            <p className="text-default-600">{user.company.name}</p>
                            <p className="text-default-600">
                                {user.company.department} · {user.company.title}
                            </p>
                        </section>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default UserCard;

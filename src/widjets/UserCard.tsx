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
        <div className="container mx-auto p-4 max-w-2xl" onClick={() => handleRowClick(user.id)}>
            <Card>
                <Card.Header className="flex gap-4 items-center">
                    <Avatar>
                        <Avatar.Image src={user.image} className="w-16 h-16 rounded-full" />
                    </Avatar>
                    <div>
                        <h1 className="text-xl font-bold">
                            {user.firstName} {user.lastName}
                            {user.maidenName && ` (${user.maidenName})`}
                        </h1>
                        <p className="text-default-500">
                            {user.gender === "female" ? "Женщина" : "Мужчина"}, {user.age} лет
                        </p>
                    </div>
                </Card.Header>

                <div className="space-y-4">
                    {/* Контакты */}
                    <div>
                        <h2 className="text-md font-semibold">Контакты</h2>
                        <p>📧 {user.email}</p>
                    </div>

                    {/* Адрес */}
                    {user.address && (
                        <div>
                            <h2 className="text-md font-semibold">Адрес</h2>
                            <p>{user.address.address}</p>
                            <p>
                                {user.address.city}, {user.address.state} ({user.address.stateCode}),{" "}
                                {user.address.postalCode}
                            </p>
                        </div>
                    )}

                    {/* Компания */}
                    {user.company && (
                        <div>
                            <h2 className="text-md font-semibold">Компания</h2>
                            <p>{user.company.name}</p>
                            <p>
                                {user.company.department} · {user.company.title}
                            </p>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default UserCard;

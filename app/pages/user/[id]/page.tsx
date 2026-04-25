"use client";

import { Avatar, Card } from "@heroui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import User from "@/src/interfaces/User";
import { makeRequest } from "@/src/utils/baseFetch";
export default function Home1() {
    const [user, setUser] = useState<User | null>(null);
    const params = useParams();
    const [loading, setLoading] = useState<boolean>(true);

    const id = params.id as string;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await makeRequest<User>(`https://dummyjson.com/users/${id}`, "GET");
                if (data) setUser(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div className="p-8 text-center">Загрузка...</div>;
    if (!user) return <div className="p-8 text-center text-red-500">Не удалось загрузить пользователя</div>;

    return (
        <div className="flex flex-wrap gap-4">
            hello
            <Card className="w-[200px] gap-2">
                <Image
                    alt="Indie Hackers community"
                    className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
                    loading="lazy"
                    src={user?.image}
                />
                <Card.Header>
                    <Card.Title>Indie Hackers</Card.Title>
                    <Card.Description>148 members</Card.Description>
                </Card.Header>
                <Card.Footer className="flex gap-2">
                    <Avatar aria-label="Martha's profile picture" className="size-5">
                        <Avatar.Image
                            alt="Martha's avatar"
                            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                        />
                        <Avatar.Fallback className="text-xs">IH</Avatar.Fallback>
                    </Avatar>
                    <span className="text-xs">By Martha</span>
                </Card.Footer>
            </Card>
        </div>
    );
}

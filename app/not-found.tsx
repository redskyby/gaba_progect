"use client";

import { Button, Card } from "@heroui/react";
import Link from "next/link";

const Page = () => (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
        <Card className="p-10 max-w-lg w-full text-center shadow-xl border border-red-300 bg-white rounded-3xl">
            <h1 className="text-4xl font-bold text-red-600 mb-2">Ошибка 404</h1>

            <p className="text-lg text-red-500 mb-6">Такой страницы не существует</p>

            <p className="text-default-600 mb-8">Возможно, вы перешли по неверной ссылке или страница была удалена.</p>

            <Link href="/" className="inline-block">
                <Button
                    variant="danger"
                    className="px-6 py-2 text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                    Вернуться на главную
                </Button>
            </Link>
        </Card>
    </section>
);

export default Page;

"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Page = () => (
    <section className="flex items-center justify-center h-full  bg-gray-100 mt-2.5">
        <div className="max-w-md px-8 py-6 rounded-lg border border-red-500 bg-white shadow-md text-center">
            <h1 className="text-2xl font-bold text-red-600">Ой, такой страницы не существует</h1>
            <h2 className="text-lg text-red-500">Попробуйте еще раз!</h2>
            <div className="flex flex-col items-center">
                <Link href="/">
                    <Button variant="danger" className="my-2.5 shadow-lg">
                        Вернуться на главную
                    </Button>
                </Link>
            </div>
        </div>
    </section>
);

export default Page;

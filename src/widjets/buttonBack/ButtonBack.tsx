"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonBack = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <Button onClick={handleBack} variant="primary" className="shadow rounded-lg">
            Назад
        </Button>
    );
};

export default ButtonBack;

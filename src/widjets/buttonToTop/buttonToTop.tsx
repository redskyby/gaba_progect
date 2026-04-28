"use client";

import { Button } from "@heroui/react";
import React, { useCallback, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const ButtonToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        // Появление кнопки после прокрутки одного экрана
        setIsVisible(scrollY > windowHeight);
    }, []);

    // Плавный скролл вверх
    const scrollToTop = () => {
        scroll.scrollToTop({ smooth: true });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <Button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`
                fixed bottom-6 right-6 z-50
                transition-all duration-300 ease-in-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
            `}
            variant="primary"
        >
            ↑
        </Button>
    );
};

export default ButtonToTop;

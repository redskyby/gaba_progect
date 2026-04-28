"use client";

import { useEffect, useRef } from "react";

import Observer from "@/src/interfaces/Observer";

const useObserver = ({ loading, lastElement, setPage, users }: Observer) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (loading && users.length === 0) return;

        if (observer.current) {
            observer.current.disconnect();
        }

        const callback: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting) {
                setPage((prev) => prev + 1);
            }
        };

        observer.current = new IntersectionObserver(callback);

        if (lastElement.current) {
            observer.current.observe(lastElement.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [loading, lastElement, setPage, users]);
};

export default useObserver;

import { RefObject } from "react";

export default interface Observer {
    loading: boolean;
    lastElement: RefObject<HTMLDivElement | null>;
    setPage: (value: ((prevState: number) => number) | number) => void;
}

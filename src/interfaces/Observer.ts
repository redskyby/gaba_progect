import { RefObject } from "react";

import User from "@/src/interfaces/User";

export default interface Observer {
    loading: boolean;
    lastElement: RefObject<HTMLDivElement | null>;
    setPage: (value: ((prevState: number) => number) | number) => void;
    users: User[];
}

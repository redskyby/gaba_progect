import Address from "@/src/interfaces/Address";
import Company from "@/src/interfaces/Company";

export default interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    image: string;
    address?: Address;
    company?: Company;
}

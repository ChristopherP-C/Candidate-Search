// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    id: number;
    name: string;
    username: string;
    email: string;
    avatar: string;
    location?: string;
    company?: string;
    bio?: string;
}
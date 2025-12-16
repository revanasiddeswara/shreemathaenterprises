import { randomUUID } from "crypto";
export class MemStorage {
    constructor() {
        this.users = new Map();
        this.enquiries = new Map();
    }
    async getUser(id) {
        return this.users.get(id);
    }
    async getUserByUsername(username) {
        return Array.from(this.users.values()).find((user) => user.username === username);
    }
    async createUser(insertUser) {
        const id = randomUUID();
        const user = { ...insertUser, id };
        this.users.set(id, user);
        return user;
    }
    async createEnquiry(insertEnquiry) {
        const id = randomUUID();
        const enquiry = {
            ...insertEnquiry,
            id,
            email: insertEnquiry.email || null,
            message: insertEnquiry.message || null,
            createdAt: new Date()
        };
        this.enquiries.set(id, enquiry);
        return enquiry;
    }
    async getEnquiries() {
        return Array.from(this.enquiries.values()).sort((a, b) => {
            const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return dateB - dateA;
        });
    }
}
export const storage = new MemStorage();

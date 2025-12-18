import type {
  User,
  InsertUser,
  Enquiry,
  InsertEnquiry
} from "../shared/schema.js";

import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getEnquiries(): Promise<Enquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private enquiries: Map<string, Enquiry>;

  constructor() {
    this.users = new Map();
    this.enquiries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    const id = randomUUID();
    const enquiry: Enquiry = { 
      ...insertEnquiry, 
      id,
      email: insertEnquiry.email || null,
      message: insertEnquiry.message || null,
      createdAt: new Date()
    };
    this.enquiries.set(id, enquiry);
    return enquiry;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return Array.from(this.enquiries.values()).sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });
  }
}

export const storage = new MemStorage();

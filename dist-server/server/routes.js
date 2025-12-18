import { storage } from "./storage.js";
import { insertEnquirySchema } from "../shared/schema.js";
import { z } from "zod";
export async function registerRoutes(httpServer, app) {
    app.post("/api/enquiries", async (req, res) => {
        try {
            const validatedData = insertEnquirySchema.parse(req.body);
            const enquiry = await storage.createEnquiry(validatedData);
            res.status(201).json(enquiry);
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).json({ error: "Invalid enquiry data", details: error.errors });
            }
            else {
                console.error("Error creating enquiry:", error);
                res.status(500).json({ error: "Failed to create enquiry" });
            }
        }
    });
    app.get("/api/enquiries", async (req, res) => {
        try {
            const enquiries = await storage.getEnquiries();
            res.json(enquiries);
        }
        catch (error) {
            console.error("Error fetching enquiries:", error);
            res.status(500).json({ error: "Failed to fetch enquiries" });
        }
    });
    return httpServer;
}

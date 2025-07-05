import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const clientId = process.env.CLIENT_ID;

export const getClient = async (_req: Request, res: Response) => {
  try {
    const client = await prisma.client.findUnique({ where: { id: clientId } });

    if (!client) {
      res.status(404).json({ message: "Client not found." });
      return;
    }

    res.status(200).json(client);
  } catch (error) {
    console.error("Error fetching client:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

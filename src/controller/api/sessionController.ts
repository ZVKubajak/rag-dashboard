import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const clientId = process.env.CLIENT_ID;

export const getSessions = async (_req: Request, res: Response) => {
  try {
    const sessions = await prisma.session.findMany({ where: { clientId } });
    res.status(200).json(sessions);
  } catch (error) {
    console.error("Error fetching all sessions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getSessionById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const session = await prisma.session.findUnique({
      where: { clientId, id },
    });

    if (!session) {
      res.status(404).json({ message: "Session not found." });
      return;
    }

    res.status(200).json(session);
  } catch (error) {
    console.error("Error fetching session by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteSession = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.session.delete({ where: { clientId, id } });
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting session:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const clearSessions = async (_req: Request, res: Response) => {
  try {
    await prisma.session.deleteMany({ where: { clientId } });
    res.sendStatus(204);
  } catch (error) {
    console.error("Error clearing sessions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

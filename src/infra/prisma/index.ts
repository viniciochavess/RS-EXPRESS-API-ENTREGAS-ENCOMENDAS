import { PrismaClient } from "@prisma/client";
import { query } from "express";
import env from "../../env";

const prisma = new PrismaClient({
    log: env.NODE_ENV === "PRODUCTION" ? ["query"] : []
})

export default prisma
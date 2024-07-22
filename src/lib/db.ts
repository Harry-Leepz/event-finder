import { PrismaClient } from "@prisma/client";

/*
 * This is a singleton function that returns a new PrismaClient instance.
 * This is useful for serverless functions and other instances where you want to
 * create a new PrismaClient instance for each request.
 * Also prevent having to create a new PrismaClient instance for each request across the application.
 */

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

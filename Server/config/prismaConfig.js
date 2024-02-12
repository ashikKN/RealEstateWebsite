import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export { prisma }


// use the Prisma Client in your application code to interact with your database.
// Prisma Client is auto-generated based on your Prisma schema.
// It provides methods for performing CRUD operations on your database tables/collections.
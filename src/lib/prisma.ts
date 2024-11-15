import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgres://default:BOqb3QaDuNC7@ep-dry-tree-a4025s4m.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
    }
  }
})

export default prisma 
// import express, { type Request, type Response } from 'express';

import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const createUser = await prisma.user.create({
    data: {
      name: 'rahim',
      email: 'rahim@example.com',
      password: '1234567',
    },
  });

  console.log(createUser, 'Create user response');
}

main();

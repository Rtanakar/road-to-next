import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const tickets = [
  {
    title: "ticket 1",
    content: "This is the first Ticket from the Database",
    status: "DONE" as const,
  },

  {
    title: "ticket 2",
    content: "This is the Second Ticket from the Database",
    status: "OPEN" as const,
  },

  {
    title: "ticket 3",
    content: "This is the Third Ticket from the Database",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();

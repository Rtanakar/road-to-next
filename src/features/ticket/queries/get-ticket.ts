import prisma from "@/lib/db";

export const getTicket = async (id: string) => {
  return prisma.ticket.findUnique({
    where: {
      id,
    },
  });
};

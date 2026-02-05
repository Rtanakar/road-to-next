// 1️⃣ Const assertion kya hota hai?
// TypeScript me as const ko hi const assertion kehte hain.
// 👉 Iska kaam hota hai:
// “Is value ko bilkul exact (literal) maan lo, broad type mat banao”

export const initialTickets = [
  {
    id: "1",
    title: "ticket 1",
    content: "This is the first Ticket",
    status: "DONE" as const,
  },

  {
    id: "2",
    title: "ticket 2",
    content: "This is the Second Ticket",
    status: "OPEN" as const,
  },

  {
    id: "3",
    title: "ticket 3",
    content: "This is the Third Ticket",
    status: "IN_PROGRESS" as const,
  },
];

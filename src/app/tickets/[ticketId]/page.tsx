import { initialTickets } from "@/data";

const TicketPage = async ({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  if (!ticket) {
    return <h3>Page not found</h3>;
  }

  return await (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
};

export default TicketPage;

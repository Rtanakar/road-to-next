const TicketPage = async ({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) => {
  const { ticketId } = await params;
  return await (<h1>This is a Ticket Id Route and ID: {ticketId}</h1>);
};

export default TicketPage;

import CardCompact from "@/components/card-compact/card-compact";
import TicketUpsertForm from "@/features/ticket/components/TicketUpsertForm";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketIdPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketEditPage = async ({ params }: TicketIdPageProps) => {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        title="Edit Ticket"
        description="Edit an Existing Ticket"
        content={<TicketUpsertForm ticket={ticket} />}
        className="w-full max-w-105 animate-fade-in-top"
      />
    </div>
  );
};

export default TicketEditPage;

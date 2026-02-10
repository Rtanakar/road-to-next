import CardCompact from "@/components/card-compact/card-compact";
import Heading from "@/components/heading/Heading";
import SpinnerLoading from "@/features/ticket/components/SpinnerLoading";
import TicketList from "@/features/ticket/components/TicketList";
import TicketUpsertForm from "@/features/ticket/components/TicketUpsertForm";
import { Suspense } from "react";

const TicketsPage = () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created"
        content={<TicketUpsertForm />}
        className="w-full max-w-105 self-center"
      />

      <Suspense fallback={<SpinnerLoading />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;

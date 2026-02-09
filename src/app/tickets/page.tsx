import Heading from "@/components/heading/Heading";
import TicketList from "@/features/ticket/components/TicketList";
import { Suspense } from "react";

const TicketsPage = () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <Suspense>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;

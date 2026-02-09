"use client";

import Heading from "@/components/heading/Heading";
import TicketItem from "@/features/ticket/components/TicketItem";
import { useEffect, useState } from "react";
import { Ticket } from "@/features/ticket/types";
import { getTickets } from "@/features/ticket/queries/get-tickets";

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const result = await getTickets();
      setTickets(result);
    };

    fetchTickets();
  }, []);

  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading
        title="TicketsPage"
        description="All your tickets at one place"
      />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;

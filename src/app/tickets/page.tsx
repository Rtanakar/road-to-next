import Link from "next/link";
import { initialTickets } from "@/app/data";

const TicketsPage = () => {
  return (
    <div className="p-5">
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={`/tickets/${ticket.id}`} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;

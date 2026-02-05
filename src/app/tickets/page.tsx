import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

// JavaScript object + dynamic key access
// object[key] = us key ka value nikaalna
// object = TICKET_ICONS
// key = ticket.status
const TICKET_ICONS = {
  OPEN: "O",
  IN_PROGRESS: ">",
  DONE: "X",
};

const TicketsPage = () => {
  return (
    <div className="p-5">
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <div>{TICKET_ICONS[ticket.status]}</div>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;

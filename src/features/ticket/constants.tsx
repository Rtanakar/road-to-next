import { CircleCheck, FileText, Pencil } from "lucide-react";

// JavaScript object + dynamic key access
// object[key] = us key ka value nikaalna
// object = TICKET_ICONS
// key = ticket.status
export const TICKET_ICONS = {
  OPEN: <FileText />,
  IN_PROGRESS: <Pencil />,
  DONE: <CircleCheck />,
};

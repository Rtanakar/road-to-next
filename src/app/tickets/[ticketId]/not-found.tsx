import Placeholder from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";
import Link from "next/link";

const NotFound = () => {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button asChild variant={"outline"}>
          <Link href={ticketsPath()}>Go to tickets</Link>
        </Button>
      }
    />
  );
};

export default NotFound;

import Heading from "@/components/heading/Heading";
import { ticketsPath } from "@/paths";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="HomePage" description="Your home place to start" />

      <div className="flex flex-col flex-1 items-center">
        <Link href={ticketsPath()}>Go To Tickets</Link>
      </div>
    </div>
  );
}

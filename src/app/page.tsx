import { ticketsPath } from "@/paths";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href={ticketsPath()}>Go To Tickets</Link>
    </div>
  );
}

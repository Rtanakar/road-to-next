import { ticketsPath } from "@/paths";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">HomePage</h1>
        <p className="text-sm text-gray-300">Your home place to start</p>
      </div>

      <div className="flex flex-col flex-1 items-center">
        <Link href={ticketsPath()}>Go To Tickets</Link>
      </div>
    </div>
  );
}

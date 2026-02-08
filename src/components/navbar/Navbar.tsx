import { homePath, ticketsPath } from "@/paths";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Kanban } from "lucide-react";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2.5 px-5 border-b fixed left-0 right-0 top-0 z-20 backdrop-blur-md">
      <div>
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <Kanban />
          <h1 className="text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-2">
        <ThemeSwitcher />

        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import Heading from "@/components/heading/Heading";
import SpinnerLoading from "@/features/ticket/components/SpinnerLoading";
import TicketList from "@/features/ticket/components/TicketList";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import Placeholder from "@/components/Placeholder";

const TicketsPage = () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <ErrorBoundary fallback={<Placeholder label="something went wrong!" />}>
        <Suspense fallback={<SpinnerLoading />}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TicketsPage;

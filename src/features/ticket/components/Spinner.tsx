import { Spinner } from "@/components/ui/spinner";

const SpinnerIcon = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Spinner className="size-16 animate-spin" />
    </div>
  );
};

export default SpinnerIcon;

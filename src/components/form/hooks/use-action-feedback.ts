import { useEffect, useRef } from "react";
import { ActionState } from "../utils/to-action-state";

interface OnArgs {
  actionState: ActionState;
}

interface useActionFeedbackProps {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
}

const useActionFeedback = (
  actionState: ActionState,
  options: useActionFeedbackProps,
) => {
  const prevTimestamp = useRef(actionState.timestamp);

  useEffect(() => {
    const isUpdate = prevTimestamp.current !== actionState.timestamp;
    if (!isUpdate) return;

    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      options.onError?.({ actionState });
    }

    prevTimestamp.current = actionState.timestamp;
  }, [actionState.timestamp, actionState, options]);
};

export default useActionFeedback;

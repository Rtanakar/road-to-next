import { useEffect } from "react";
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
  useEffect(() => {
    if (actionState.status === "SUCCESS") {
      // console.log(actionState.message);
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      // console.log(actionState.message);
      options.onError?.({ actionState });
    }
  }, [actionState, options]);
};

export default useActionFeedback;

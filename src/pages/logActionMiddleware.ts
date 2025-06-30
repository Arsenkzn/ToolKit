import { Middleware } from "redux";
import { ROOTState } from "src/store/store";

export const logAtionMiddleware: Middleware<{}, ROOTState> = (storeAPI) => {
  return function WrapDispatch(next) {
    return function handleAction(action: unknown) {
      return next(action);
    };
  };
};



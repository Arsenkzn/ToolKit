import { Middleware } from "redux";
import { RootState } from "src/store/store";

export const logAtionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
  return function WrapDispatch(next) {
    return function handleAction(action: unknown) {
      return next(action);
    };
  };
};



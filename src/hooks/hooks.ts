import { ROOTState } from "src/store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { ProjectActions } from "src/store/actions/actions";

export const useAppDispatch = useDispatch<
  ThunkDispatch<ROOTState, void, ProjectActions>
>;
export const useAppSelector: TypedUseSelectorHook<ROOTState> = useSelector;

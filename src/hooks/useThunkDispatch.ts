import { ThunkDispatch } from "redux-thunk";
import {useDispatch} from "react-redux";

export const useThunkDispatch = () : ThunkDispatch<{}, {}, any>  => {
  return useDispatch<ThunkDispatch<{}, {}, any>>();
}
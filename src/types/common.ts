import * as H from "history";
import {Location} from "history";
export interface IObjectWithAnyKeys {
  [key: string]: any;
}

export type LocationState = {
  from?: Location | undefined;
  state?: {
    from?: Location
  }
};

export type TModalState = {
  background?: H.Location
}

export interface IIdParams {
  id: string;
}
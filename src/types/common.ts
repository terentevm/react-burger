import * as H from "history";
import {Location} from "history";
export interface IObjectWithAnyKeys {
  [key: string]: any;
}

export interface IResponse<T> {
  readonly headers: IObjectWithAnyKeys;
  readonly ok: boolean;
  readonly body: any;
  readonly status: number;
  json: () => Promise<T>
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
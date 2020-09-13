// import * as H from "history";

// export interface RouteComponentProps<P> {
//   match: match<P>;
//   location: H.Location;
//   history: H.History;
//   staticContext?: any;
// }
//
// export interface match<P> {
//   params: P;
//   isExact: boolean,
//   patch: string;
//   url: string
// }

type TParams = {
  id: number
};

type TMatch = {
  params: TParams
};

export type TCastServer = {
  character: string,
  id: number,
  name: string,
  profile_path: string
};

export type TCast = {
  character: string,
  id: number,
  name: string,
  profilePath: string
};

export default TMatch;

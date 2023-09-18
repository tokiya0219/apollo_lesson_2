import { TrackAPI } from "./datasources/track-api";

export type DataSourceContext = {
  dataSources: {
    /** enough with TrackAPI. doesn't need instantiate the class */
    trackAPI: TrackAPI;
  };
  };
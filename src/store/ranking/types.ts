export const START_REQUEST = "START_REQUEST" as const;
export const RECEIVE_DATA = "RECEIVE_DATA" as const;
export const FINISH_REQUEST = "FINISH_REQUEST" as const;

export interface RankingType {
  code: string,
  name: string,
  url: string,
  imageUrl: string
}

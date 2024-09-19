import {
  DayScheduleType,
  EtcGames,
  GameBattersType,
  GamePitchersType,
  ScheduleListType,
  ScoreboardType,
} from "@customTypes/boxScore";

export type GameStoreType = {
  daySchedule: DayScheduleType | null;
  schedule: ScheduleListType | null;
  scoreBoard: ScoreboardType[] | null;
  etcGames: EtcGames[] | null;
  hBatters: GameBattersType[] | null;
  hPitchers: GamePitchersType[] | null;
  vBatters: GameBattersType[] | null;
  vPitchers: GamePitchersType[] | null;
  fetchDaySchedule: () => void;
  fetchBoxScore: (gameData: string, gmkey: string) => void;
};

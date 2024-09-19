export type DayScheduleType = {
  displayDate: string;
  gameDate: number;
  gmkey: string;
  gtime: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  stadium: string;
  stadiumKey: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
};

export type ScheduleType = {
  broadcast: string;
  cancelFlag: string;
  crowdCn: number;
  endFlag: string;
  game: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  hscore: number;
  stadium: string;
  stadiumKey: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
  vscore: number;
};

export type ScheduleListType = {
  current: ScheduleType;
  prev: ScheduleType;
};

export type ScoreboardType = {
  ballfour: string;
  bhome: number;
  bhomeName: string;
  error: string;
  gameDate: number;
  hit: string;
  run: string;
  score1: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
  score6: string;
  score7: string;
  score8: string;
  score9: string;
  score10: string;
  score11: string;
  score12: string;
};

export type FilterScoreboardType = {
  bhomeName: string;
  score1: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
  score6: string;
  score7: string;
  score8: string;
  score9: string;
  score10: string;
  score11: string;
  score12: string;
  run: string;
  hit: string;
  error: string;
  ballfour: string;
};

export type EtcGames = {
  gday: string;
  gmkey: string;
  how: string;
  result: string;
  seq: number;
};

export type GameBattersType = {
  ab: number;
  accmAb: number;
  accmHit: number;
  changeinn: string;
  gday: string;
  gmkey: string;
  hit: number;
  il1: string;
  il2: string;
  il3: string;
  il4: string;
  il5: string;
  il6: string;
  il7: string;
  il8: string;
  il9: string;
  il10: string;
  il11: string;
  il12: string;
  il13: string;
  il14: string;
  il15: string;
  il16: string;
  il17: string;
  il18: string;
  il19: string;
  il20: string;
  il21: string;
  il22: string;
  il23: string;
  il24: string;
  il25: string;
  inn1: string;
  inn2: string;
  inn3: string;
  inn4: string;
  inn5: string;
  inn6: string;
  inn7: string;
  inn8: string;
  inn9: string;
  inn10: string;
  inn11: string;
  inn12: string;
  inn13: string;
  inn14: string;
  inn15: string;
  inn16: string;
  inn17: string;
  inn18: string;
  inn19: string;
  inn20: string;
  inn21: string;
  inn22: string;
  inn23: string;
  inn24: string;
  inn25: string;
  name: string;
  oneturn: string;
  pcode: string;
  position: string;
  rbi: number;
  run: number;
  tb: string;
  turn: string;
};

export type GamePitchersType = {
  ab: number;
  accmEr: number;
  accmInn2: number;
  bbhp: number;
  bf: number;
  changeinn: string;
  er: number;
  game: number;
  gday: string;
  gmkey: string;
  hit: number;
  hr: number;
  inn: string;
  kk: number;
  l: number;
  name: string;
  pa: number;
  pcode: string;
  pos: string;
  r: number;
  s: number;
  tb: string;
  w: number;
  wls: string;
};

export type FilterGameBatterType = {
  oneturn: string;
  position: string;
  name: string;
  inn1: string;
  inn2: string;
  inn3: string;
  inn4: string;
  inn5: string;
  inn6: string;
  inn7: string;
  inn8: string;
  inn9: string;
  inn10: string;
  inn11: string;
  inn12: string;
  ab: number;
  run: number;
  hit: number;
  rbi: number;
  ba: string;
};

export type FilterGamePitcherType = {
  name: string;
  changeinn: string;
  wls: string;
  w: number;
  l: number;
  s: number;
  inn: string;
  pa: number;
  bf: number;
  ab: number;
  hit: number;
  hr: number;
  bbhp: number;
  kk: number;
  r: number;
  er: number;
  era: string;
};

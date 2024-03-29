export interface PlayerDataSpreadsheet {
  Nickname: string;
  Country: string;
  'Ubisoft Connect username': string;
  'Trackmania Account ID': string;
  'Discord username': string;
  Team: string;
  'Real Name': string;
  'Input device': string;
  'Input device model': string;
  'Preferred camera': string;
  'Preferred map style': string;
  'Last AOTC result': string;
  'Rookie?': string;
}

export interface PlayerData {
  accountId: string;
  nickname: string;
  realName: string;
  country: string;
  lastResult: string;
  inputDevice: string;
  inputDeviceModel: string;
  camera: string;
  preferredStyle: string;
  isRookie: boolean;
}

export interface MapDataSpreadsheet {
  UID: string;
  Name: string;
  Author: string;
  'Author Time': string;
  Road: string;
  Dirt: string;
  Grass: string;
  Ice: string;
  Plastic: string;
  Magnet: string;
}

export interface MapData {
  uid: string;
  name: string;
  author: string;
  authorTime: string;
  surfaces: string[];
}

export interface TMIOPlayerData {
  id: string;
  name: string;
  tag?: string;
  meta: Record<string, string>;
}

export interface TMIORecordData {
  filename: string;
  player: TMIOPlayerData;
  position: number;
  time: number;
  timestamp: string;
  url: string;
}

export interface MapRecordData {
  playercount: number;
  record?: TMIORecordData;
}

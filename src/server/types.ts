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
}

import type { WORDS } from "../type";

export class LangRU {
  private _WORDS: WORDS;

  constructor() {
    this._WORDS = {
      LOGO: "Logo",
      REG: {
        LOGIN: "Логин",
        PASSWORD: "Пароль",
      },
    };
  }

  public get WORDS() {
    return this._WORDS;
  }
}

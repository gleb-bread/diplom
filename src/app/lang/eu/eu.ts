import type { WORDS } from "../type";

export class LangEU {
  private _WORDS: WORDS;

  constructor() {
    this._WORDS = {
      LOGO: "Logo",
      REG: {
        LOGIN: "Login",
        PASSWORD: "Password",
      },
    };
  }

  public get WORDS() {
    return this._WORDS;
  }
}

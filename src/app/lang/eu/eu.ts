import type { WORDS } from "../type";

export class LangEU {
  private _WORDS: WORDS;

  constructor() {
    this._WORDS = {
      LOGO: "Logo",
      REG: {
        LOGIN: "Login",
        PASSWORD: "Password",
        TITLELOGIN: "Log in",
        TITLEREG: "Register",
        BTNLOGIN: "Log in",
        BTNREG: "Register",
        TITLEOR: "Or",
        BTNGOOGLE: "Log in using Google",
        TITLELINKREG: "Register",
        TITLELINKRESETPASSWORD: "Recover password",
      },
    };
  }

  public get WORDS() {
    return this._WORDS;
  }
}

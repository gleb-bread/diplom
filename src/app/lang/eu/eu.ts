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
        'EMIAL': 'Email',
        'PASSWORDAGAIN': 'Repeat the password',
        TITLEOR: "Or",
        BTNGOOGLE: "Log in using Google",
        TITLELINKREG: "Register",
        TITLELINKRESETPASSWORD: "Recover password",
      },
      'RULES': {
        'MINLENTH': (v: number) => this.MINLENGTHSTR(v),
        'EMAIL': 'The field must contain an email',
        'NUM': 'The field must contain only numbers',
        'ONLYSTRING': 'The field must contain letters',
        'PASSWORDSNOTEQUAL': 'Passwords do not match',
        'REQUIRED': 'The field is required'
      }
    };
  }

  public get WORDS() {
    return this._WORDS;
  }

  public MINLENGTHSTR(v: number) {
    if (v === 1) {
      return `Minimum length: ${v} character`;
    } else {
      return `Minimum length: ${v} characters`;
    }
  }
}

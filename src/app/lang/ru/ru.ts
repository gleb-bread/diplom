import type { WORDS } from "../type";

export class LangRU {
  private _WORDS: WORDS;

  constructor() {
    this._WORDS = {
      LOGO: "Logo",
      REG: {
        LOGIN: "Логин",
        PASSWORD: "Пароль",
        TITLELOGIN: 'Войти',
        TITLEREG: 'Зарегистрироваться',
        BTNLOGIN: 'Войти',
        BTNREG: 'Зарегистрироваться',
        TITLEOR: 'Или',
        BTNGOOGLE: 'Войти с помощью Google',
        TITLELINKREG: 'Зарегистрироваться',
        TITLELINKRESETPASSWORD: 'Восстановить пароль',
      },
    };
  }

  public get WORDS() {
    return this._WORDS;
  }
}

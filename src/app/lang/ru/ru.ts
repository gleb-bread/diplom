import type { WORDS } from "../type";

export class LangRU {
  private _WORDS: WORDS;

  constructor() {
    this._WORDS = {
      LOGO: "Logo",
      REG: {
        LOGIN: "Логин",
        PASSWORD: "Пароль",
        TITLELOGIN: "Войти",
        TITLEREG: "Зарегистрироваться",
        'EMIAL': 'Email',
        'PASSWORDAGAIN': 'Повторите пароль',
        BTNLOGIN: "Войти",
        BTNREG: "Зарегистрироваться",
        TITLEOR: "Или",
        BTNGOOGLE: "Войти с помощью Google",
        TITLELINKREG: "Зарегистрироваться",
        TITLELINKRESETPASSWORD: "Восстановить пароль",
      },
      'RULES': {
        'MINLENTH': (v: number) => this.MINLENGTHSTR(v),
        'EMAIL': 'Поле должно содержать email',
        'NUM': 'Поле должно содержать только цифры',
        'ONLYSTRING': 'Поле должно содержать буквы',
        'PASSWORDSNOTEQUAL': 'Пароли не совпадают',
        'REQUIRED': 'Поле обязательно к заполнению'
      }
    };
  }

  public get WORDS() {
    return this._WORDS;
  }

  public MINLENGTHSTR(v: number) {
    if (v % 10 === 1 && v % 100 !== 11) {
      return `Минимальная длина: ${v} символ`;
    } 
    else if ((v % 10 >= 2 && v % 10 <= 4) && (v % 100 < 12 || v % 100 > 14)) {
      return `Минимальная длина: ${v} символа`;
    } 
    else {
      return `Минимальная длина: ${v} символов`;
    }
  }
  
}

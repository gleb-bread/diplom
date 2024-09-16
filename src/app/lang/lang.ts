import { useUserStore } from "@/app/stores/user";
import type { Languages } from "@/shared/system/lang/type.d";
import { LanguagesList } from "@/shared/system/lang/type.d";
import * as LanguagesWords from "./langs.d";

export class Lang {
  private userStore: ReturnType<typeof useUserStore>;
  private langRU: LanguagesWords.LangRU;
  private langEU: LanguagesWords.LangEU;

  constructor() {
    this.userStore = useUserStore();
    this.langRU = new LanguagesWords.LangRU();
    this.langEU = new LanguagesWords.LangEU();
  }

  public setLangToken(token: string) {
    const langToken = token as Languages;
    if (LanguagesList.includes(langToken))
      this.userStore.setLangToken(langToken);
  }

  private getLangFromToken(token: string) {
    this.setLangToken(token);
    return this.userStore.getLangToken;
  }

  public get WORDS() {
    switch (this.userStore.getLangToken) {
      case "eu": {
        return this.langEU.WORDS;
      }

      case "ru": {
        return this.langRU.WORDS;
      }

      default: {
        return this.langRU.WORDS;
      }
    }
  }
}

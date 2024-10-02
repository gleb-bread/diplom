import { Lang } from "@/app/lang";

function getRule(rule: Function){
    return [rule];
}

function getString(value: string | null | undefined){
    return String(value ?? '');
}

function checkIsNum(value: string | null | undefined){
    if(value === null){
        return false;
    }

    return !isNaN(Number(value));
}

function initWords(){
    const Languages = new Lang();
    return Languages.WORDS;
}

export function combineRules(...rules: Function[][]): Function[] {
    return rules.flat();
  }

export const ruleRequired = function(){
    const WORDS = initWords();
    return getRule((value: string) => !!value || WORDS.RULES.REQUIRED);
}

export const ruleMinLength = function(value: number){
    const WORDS = initWords();
    return getRule((valueStr: string | null | undefined) => getString(valueStr).length < value ? WORDS.RULES.MINLENTH(value) : true);
}

export const ruleEmail = function(){
    const WORDS = initWords();
    return getRule((value: string) => getString(value).includes('@') || WORDS.RULES.EMAIL);
}

export const ruleNum = function(){
    const WORDS = initWords();
    return getRule((value: string) => checkIsNum(value) || WORDS.RULES.NUM);
}

export const ruleOnlyString = function(){
    const WORDS = initWords();
    const onlyLettersRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;

    return getRule((value: string) => onlyLettersRegex.test(value) || WORDS.RULES.ONLYSTRING);
}

export const ruleEqualPasswords = function(password: string){
    const WORDS = initWords();
    return getRule((value: string) => value == password || WORDS.RULES.PASSWORDSNOTEQUAL);
}

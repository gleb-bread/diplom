import * as CookieTypes from './type';

export function setCookie(
    name: string,
    value: string,
    days: number,
    options: CookieTypes.CookieOptions = {}
  ): void {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=${options.path || '/'}`;
  
    if (options.secure) cookieString += '; Secure';
    if (options.sameSite) cookieString += `; SameSite=${options.sameSite}`;
    if (options.httpOnly) cookieString += '; HttpOnly';
  
    document.cookie = cookieString;
  }
  
  export function getCookie(name: string): string | null {
    const nameEQ = encodeURIComponent(name) + '=';
    const cookies = document.cookie.split('; ');
  
    for (const cookie of cookies) {
      if (cookie.startsWith(nameEQ)) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
  
    return null;
  }
  
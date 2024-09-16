import { Lang } from "@/app/lang/lang";

export const getLang = function () {
  const token = localStorage.getItem("langToken");
  const Languges = new Lang();

  if (token) {
    Languges.setLangToken(token);
  }

  return Languges;
};

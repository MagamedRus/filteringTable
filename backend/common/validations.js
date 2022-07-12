import { getMonthsLengthList } from "./date.js";

export const isString = (varialbe) => {
  if (typeof varialbe == "string" || varialbe instanceof String) {
    return true;
  }
  return false;
};

export const isNumber = (value) => {
  return typeof value === "number" && isFinite(value);
};

export const isValidDate = (date) => {
  let isValid = false; // result
  const dateReg =
    /^\d{4}-(0[1-9]|1[0-2]|[1-9])-(0[1-9]|[12][0-9]|3[01]|[0-9])$/;
  if (!isString(date)) {
    return false;
  }
  if (dateReg.test(date)) {
    /** Decomposing parametr date */
    const parts = date.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    /** Getting list of amount of days in choosed year */
    const monthLengthList = getMonthsLengthList(year);

    /** Final validations with getted data*/
    const isGoodYear = year > 999 && year <= 9999;
    const isGoodMonth = month > 0 && month <= 12;
    const isGoodMaxDay = day <= monthLengthList[month - 1];
    const isGoodDay = day > 0 && isGoodMaxDay;
    if (isGoodMonth && isGoodYear && isGoodDay) {
      isValid = true;
    }
  }

  return isValid;
};

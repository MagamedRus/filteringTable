import { typesCol, typeFilters } from "../constants/filter.js";

/**
 * @param {object} filterData - must contain
 * - typeFilter: {id: number, title: string};
 * - valueFilter: string;
 * - typeCol: {id: number, title: number, filters: Object{typeFilter}};
 * 
 * @param {Array<object>} pointList - list of obj points
 * @return {Array<object>} filtered points list
 */
export const getFilteredPoints = (filterData, pointList) => {
  const { typeFilter, valueFilter, typeCol } = filterData;
  const result = pointList.filter((point) => {
    let value = getTypeColValue(typeCol, point);
    return isValidPoint(typeFilter, valueFilter, value);
  });

  return result;
};

/** returns value of point by type column */
const getTypeColValue = (typeCol, point) => {
  let result = null;
  switch (typeCol.id) {
    case typesCol.name.id:
      result = point.name;
      break;
    case typesCol.count.id:
      result = point.count;
      break;
    case typesCol.distance.id:
      result = point.distance;
      break;
    default:
      break;
  }
  return result;
};

/** check is valid point, by type validations*/
const isValidPoint = (typeFilter, valFilter, point) => {
  let result = null;
  switch (typeFilter.id) {
    case typeFilters.equal.id:
      result = point === valFilter;
      break;
    case typeFilters.contain.id:
      result = point.toLowerCase().includes(valFilter.toLowerCase());
      break;
    case typeFilters.less.id:
      result = Number(point) < Number(valFilter);
      break;
    case typeFilters.more.id:
      result = Number(point) > Number(valFilter);
      break;
    default:
      break;
  }
  return result;
};

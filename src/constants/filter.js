//types filter
const equal = { id: 0, title: "Равно" };
const contain = { id: 1, title: "Содержит" };
const more = { id: 2, title: "Больше" };
const less = { id: 3, title: "Меньше" };
const stringFilters = { equal, contain };
const numberFilters = { equal, more, less };

//types columns
const name = { id: 0, title: "Название", filters: stringFilters };
const count = { id: 1, title: "Количество", filters: numberFilters };
const distance = { id: 2, title: "Расстояние", filters: numberFilters };

export const typesCol = {
  name,
  count,
  distance,
};

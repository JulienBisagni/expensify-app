//SET_FILTERS
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

//SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

//SET_START_DATE
export const setStartDate = (startDate = 125) => ({
  type: "SET_START_DATE",
  startDate,
});

//SET_END_DATE
export const setEndDate = (endDate = 125) => ({
  type: "SET_END_DATE",
  endDate,
});

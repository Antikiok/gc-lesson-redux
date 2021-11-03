export const optionsListSelector = state => state.options.optionsList;

export const selectedOptionsSelector = state => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.selected;

  return allOptionsList.filter(option => selectedIds.includes(option.id));
};

export const availableOptionsSelector = state => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.selected;

  return allOptionsList.filter(option => !selectedIds.includes(option.id));
};

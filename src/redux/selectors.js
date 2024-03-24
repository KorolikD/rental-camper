import { createSelector } from 'reselect';

export const selectCampers = (state) => state.campers;

export const selectCampersMemo = createSelector(
  [selectCampers],
  (campers) => campers
);

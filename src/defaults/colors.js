
import * as _ from 'lodash';

export const colors = {
  CARP: '#E91E63',
  CLIF: '#673AB7',
  HMST: '#2196F3',
  JPHQ: '#00BCD4',
  RILE: '#4CAF50',
  SHRM: '#FFEB3B',
  SPRO: '#FF9800',
  WEST: '#795548',
};

export function getColorsForFeeders(ids) {
  return _.map(ids, id => getColorForFeeder(id));
}

export function getColorForFeeder(id) {
  try {
    return colors[id];
  } catch (error) {
    return '#000000';
  }
}

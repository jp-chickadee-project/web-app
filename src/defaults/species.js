
export const dict = {
  WBNU: 'White-breasted nuthatch',
  BCCH: 'Black-capped chickadee',
  RBNU: 'Red-breasted nuthatch',
};

export function getSpeciesFromAbbreviation(abbreviation) {
  const species = dict[abbreviation];
  if (species === undefined) {
    return abbreviation;
  }
  return species;
}

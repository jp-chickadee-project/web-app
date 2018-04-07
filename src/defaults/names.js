
export const names = {
  '#R/ay': 'Ray',
};

export function getDisplayName(bandCombo) {
  const name = names[bandCombo];
  if (name === undefined) {
    return bandCombo;
  }
  return name;
}

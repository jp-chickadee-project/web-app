
export const comboToNames = {
  '#R/ay': 'Ray',
  '#A/rg': 'Karen',
  '#N/rn': 'Tim',
  '#R/yn': 'Karena',
  '#N/ry': 'Lisa',
  'y0/#W': 'Alex',
  'N#/g0': 'Pat',
  'B#/v0': 'Britney',
  'y0/#R': 'Christian',
  '#O/v0': 'Helen',
  '#O/gb': 'Austin',
  '#G/g0': 'Peter',
};

export function getDisplayNameFromBandCombo(bandCombo) {
  const name = comboToNames[bandCombo];
  if (name === undefined) {
    return '';
  }
  return name;
}

export const rfidToNames = {
  '0300034C3E': 'Ray',
  '0700EE3129': 'Karen',
  '0700ED92EB': 'Tim',
  '0700ED9469': 'Karena',
  '0700EE3F10': 'Lisa',
  '01101709FF': 'Alex',
};

export function getDisplayNameFromRfid(rfid) {
  const name = rfidToNames[rfid];
  if (name === undefined) {
    return rfid;
  }
  return name;
}


export const comboToNames = {
  // funny names
  'B#/v0': 'Bruce W.',
  '#R/ay': 'Ray',
  // family
  '#A/rg': 'Karen',
  '#R/yn': 'Karena',
  '#N/ry': 'Lisa',
  '#N/rn': 'Tim',
  // friends
  'y0/#W': 'Alex',
  '#O/gb': 'Austin',
  '#O/rb': 'Britney',
  'y0/#R': 'Christian',
  'w0/G#': 'Helen',
  '#O/av': 'Melissa',
  '#G/ar': 'Pat',
  '#O/rw': 'Peter',
  // professors
  '#G/aw': 'Andy',
  'g0/#Y': 'Hadi',
  '#A/yn': 'Jeff',
  '#O/wg': 'John',
  '#A/yg': 'Mike',
  'y0/R#': 'Randy',
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

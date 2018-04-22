
export const comboToNames = {
  '#R/ay': 'Ray',
  '#A/rg': 'Karen',
  '#N/rn': 'Tim',
  '#R/yn': 'Karena',
  '#N/ry': 'Lisa',
  'y0/#W': 'Alex',
  '#O/gb': 'Austin',
  '#G/ar': 'Pat',
  '#O/rb': 'Britney',
  'y0/#R': 'Christian',
  'w0/G#': 'Helen',
  '#O/rw': 'Peter',
  'B#/v0': 'Bruce W.',
  '#O/av': 'Melissa',
  'y0/R#': 'Randy',
  'g0/#Y': 'Hadi',
  '#A/yg': 'Mike',
  '#O/wg': 'John',
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

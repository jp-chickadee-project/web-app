
export const comboToNames = {
  '#R/ay': 'Ray',
};

export function getDisplayNameFromBandCombo(bandCombo) {
  const name = comboToNames[bandCombo];
  if (name === undefined) {
    return bandCombo;
  }
  return name;
}

export const rfidToNames = {
  '0300034C3E': 'Ray',
};

export function getDisplayNameFromRfid(rfid) {
  const name = rfidToNames[rfid];
  if (name === undefined) {
    return rfid;
  }
  return name;
}

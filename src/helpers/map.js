
import L from 'leaflet';

export default function buildStudyAreaMap(element) {
  const ZOOM = 15.5;
  const bounds = new L.LatLngBounds(
    new L.LatLng(46.558923, -87.440042),
    new L.LatLng(46.547893, -87.418094),
  );
  const map = L.map(element, {
    center: bounds.getCenter(),
    minZoom: ZOOM - 2,
    maxZoom: ZOOM + 2,
    maxBounds: bounds,
    maxBoundsViscosity: 0.75,
  });
  map.removeControl(map.zoomControl);
  map.scrollWheelZoom.disable();

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  map.setView([46.554064, -87.428646], ZOOM);

  return map;
}

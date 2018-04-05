
import L from 'leaflet';

export default function buildStudyAreaMap(element) {
  const ZOOM = 15.5;
  const bounds = new L.LatLngBounds(
    new L.LatLng(46.558923, -87.440042),
    new L.LatLng(46.547893, -87.418094),
  );
  const map = L.map(element, {
    center: bounds.getCenter(),
    minZoom: ZOOM,
    maxZoom: ZOOM,
    maxBounds: bounds,
    maxBoundsViscosity: 0.75,
  });
  map.removeControl(map.zoomControl);
  map.dragging.disable();
  map.scrollWheelZoom.disable();
  map.touchZoom.disable();

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  map.setView([46.554064, -87.428646], ZOOM);

  return map;
}

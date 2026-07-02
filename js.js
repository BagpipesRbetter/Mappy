// This is a quick sample to get you started with an interactive map.

// 1. Set up the map control.
var map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.stadiamaps.com/styles/stamen_toner.json',  // 2. Style URL; see our https://docs.stadiamaps.com/themes/ for more options
    // You can also explicitly request tiles from our EU servers using the following URL:
    // https://tiles-eu.stadiamaps.com/styles/stamen_toner.json
    center: { lat: 40.76609907907027, lng: -112.30385106813344 },  // 3. Initial focus coordinate
    zoom: 8,  // 4. Initial zoom
});

// 5. MapLibre GL JS does not handle RTL text by default, so we recommend adding this dependency to fully support RTL rendering. 
maplibregl.setRTLTextPlugin('https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.4.0/dist/mapbox-gl-rtl-text.js').catch(function() {});

// 6. Add zoom and rotation controls.
map.addControl(new maplibregl.NavigationControl());

// 7. Learn how to add markers and overlays,
// integrate with a frontend framework like
// React or Vue, and more:
// https://docs.stadiamaps.com/maps-for-web/

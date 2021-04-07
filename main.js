const RIVERS_GEOJSON_URL = 'ne_50m_rivers_lake_centerlines_scale_rank.geojson';
const CITIES_URL = 'central_asian_cities.geojson';

mapboxgl.accessToken = 'pk.eyJ1IjoiYm9yaXNtdXMiLCJhIjoiY2lrZDZ4dDhwMDAxMHRybHllOWE0bnFsNSJ9.XWAhFv2SgeFFsN6WcKo1cA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/borismus/ckn6ho3gl0bxm17pd7qhkxkju',
  center: [47.5, 42.5],
  zoom: 5,
});

map.on('load', init);

function addCities() {
  map.addSource('cities', {
    'type': 'geojson',
    'data': CITIES_URL,
  });

  map.addLayer({
    'id': 'cities',
    'type': 'circle',
    'source': 'cities',
    'paint': {
      'circle-color': 'red',
    }
  });

  map.addLayer({
    'id': 'city-names',
    'type': 'symbol',
    'source': 'cities',
    'layout': {
      'text-anchor': 'left',
      'text-offset': [.5, 0],
      'text-field': ['get', 'Name'],
    },
    'paint': {
    }
  });
}

function addMountainRanges() {
  map.addSource('mountains', {
    'type': 'geojson',
    'data': 'mountain_ranges.geojson',
  });

  map.addLayer({
    'id': 'mountain-lines',
    'type': 'line',
    'source': 'mountains',
    'layout': {},
    'paint': {
      'line-color': 'darkblue',
      'line-width': 3,
    }
  });

  map.addLayer({
    'id': 'mountain-names',
    'type': 'symbol',
    'source': 'mountains',
    'layout': {
      'text-anchor': 'center',
      'text-field': ['get', 'name'],
    },
    'paint': {
      'text-color': '#333',
    }
  });
}

function addRivers() {
  map.addSource('rivers', {
    'type': 'geojson',
    'data': RIVERS_GEOJSON_URL,
  });

  map.addLayer({
    'id': 'river-lines',
    'type': 'line',
    'source': 'rivers',
    'layout': {},
    'paint': {
      'line-color': '#088',
    }
  });

  map.addLayer({
    'id': 'river-names',
    'type': 'symbol',
    'source': 'rivers',
    'layout': {
      'text-anchor': 'center',
      'text-field': ['get', 'name'],
    },
    'paint': {
      'text-color': '#aaa',
    }
  });
}

function addKhazarEmpire() {
  map.addSource('empires', {
    'type': 'geojson',
    'data': 'khazar.geojson',
  });

  map.addLayer({
    'id': 'empire-areas',
    'type': 'fill',
    'source': 'empires',
    'layout': {},
    'paint': {
      'fill-color': '#088',
      'fill-opacity': 0.3
    }
  });

  map.addLayer({
    'id': 'empire-names',
    'type': 'symbol',
    'source': 'empires',
    'layout': {
      'text-anchor': 'center',
      'text-field': ['get', 'name'],
    },
    'paint': {
      'text-color': '#aaa',
    }
  });
}


function init() {
  addRivers();
  addMountainRanges();
  addCities();
  addKhazarEmpire();
}


import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const Map = ({ lng, lat }) => {
  // MapboxGL
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZXhwbG9yaWVuY2UiLCJhIjoiY2tvMWpsbGk0MDk0NzJvcTl6dHV3bGw0YyJ9.dBUiDNEml9qrhEHuKnitfA'

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 6,
      attributionControl: false,
    },[])

    // Marker map
    const marker = new mapboxgl.Marker({
      color: 'red',
    })
      .setLngLat([lng, lat])
      // Set a Popup message into the marker
      // .setPopup(new mapboxgl.Popup().setHTML('<h1>Message_here</h1>'))
      .addTo(map)

    // Map controls (zoom in / out)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')
  }, [])

  return <div id="mapContainer"></div>
}

export default Map
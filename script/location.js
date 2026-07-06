// Latitude and Longitude
const latitude = 50.697066;
const longitude = -120.366556;

// Create map
const map = L.map('map').setView([latitude, longitude], 15);

// Map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marker
L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("<b>Find us</b><br>-----")
    .openPopup();

    /* 50°41'48.3"N 120°22'01.5"W */
    /*50.697066, -120.366556*/
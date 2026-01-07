function initMap() {

    const delhi = { lat: 28.6139, lng: 77.2090 };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: delhi,
        zoom: 11
    });

    const locations = [
        {
            name: "Anand Vihar",
            pos: { lat: 28.6469, lng: 77.3159 },
            aqi: 380,
            level: "Severe",
            color: "red",
            action: "Avoid outdoor activities. Wear masks."
        },
        {
            name: "Rohini",
            pos: { lat: 28.7494, lng: 77.0565 },
            aqi: 220,
            level: "Poor",
            color: "orange",
            action: "Limit outdoor exposure."
        },
        {
            name: "Dwarka",
            pos: { lat: 28.5921, lng: 77.0460 },
            aqi: 120,
            level: "Moderate",
            color: "yellow",
            action: "Sensitive groups should take precautions."
        },
        {
            name: "Connaught Place",
            pos: { lat: 28.6315, lng: 77.2167 },
            aqi: 95,
            level: "Good",
            color: "green",
            action: "Air quality is acceptable."
        },
        {
            name: "Saket",
            pos: { lat: 28.5244, lng: 77.2066 },
            aqi: 160,
            level: "Moderate",
            color: "yellow",
            action: "People with asthma should be cautious."
        },
        {
            name: "Punjabi Bagh",
            pos: { lat: 28.6726, lng: 77.1300 },
            aqi: 260,
            level: "Poor",
            color: "orange",
            action: "Reduce outdoor activities."
        },
        {
            name: "Mayur Vihar",
            pos: { lat: 28.6090, lng: 77.2958 },
            aqi: 310,
            level: "Very Poor",
            color: "red",
            action: "Avoid outdoor exposure."
        },
        {
            name: "Vasant Kunj",
            pos: { lat: 28.5206, lng: 77.1584 },
            aqi: 140,
            level: "Moderate",
            color: "yellow",
            action: "Sensitive groups take care."
        }
    ];

    locations.forEach(l => {

        const marker = new google.maps.Marker({
            position: l.pos,
            map: map,
            title: l.name,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: l.color,
                fillOpacity: 0.85,
                strokeWeight: 1
            }
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="color:black; font-size:14px;">
                    <strong>${l.name}</strong><br>
                    AQI: ${l.aqi} (${l.level})<br>
                    Action: ${l.action}
                </div>
            `
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

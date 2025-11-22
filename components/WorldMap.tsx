import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
    { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128] },
    { markerOffset: -15, name: "San Francisco", coordinates: [-122.4194, 37.7749] },
    { markerOffset: 25, name: "Sydney", coordinates: [151.2093, -33.8688] },
    { markerOffset: 25, name: "Singapore", coordinates: [103.8198, 1.3521] },
];

export const WorldMap = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="map-shadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.012" />
                    </filter>
                </defs>
            </svg>
            <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{
                    scale: 220,
                    center: [0, 0]
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#526D82" // Darker slate-blue to match Image 2
                                stroke="#1C1C1C"
                                strokeWidth={0.25}
                                style={{
                                    default: { outline: "none", filter: "url(#map-shadow)" },
                                    hover: { fill: "#627D92", outline: "none", filter: "url(#map-shadow)" },
                                    pressed: { fill: "#526D82", outline: "none", filter: "url(#map-shadow)" },
                                }}
                            />
                        ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates as [number, number]}>
                        {/* Outer Glow to match image style */}
                        <circle r={20} fill="#FFFFFF" opacity={1} />
                        {/* Inner Marker - Strictly 4px (r=2) */}
                        <circle
                            r={12}
                            fill="#C6C7F8" // var(--Primary-Brand)
                            stroke="#C6C7F8"
                            strokeWidth={1}
                            opacity={1}
                        />
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
};

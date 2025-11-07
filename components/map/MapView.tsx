
import React from 'react';
import type { RouteDetails } from '../../types';
import { MapPinIcon, FlagIcon } from '@heroicons/react/24/solid';

interface MapViewProps {
  route: RouteDetails;
}

// TODO: Replace with actual Google Maps API integration.
// This component is a placeholder to demonstrate UI/UX.
// A real implementation would require:
// 1. A valid Google Maps API key with Directions API enabled.
// 2. The '@googlemaps/react-wrapper' or similar library.
// 3. Logic to fetch directions, draw polylines, and place markers.
// 4. Live location tracking using the Geolocation API.

const MapView: React.FC<MapViewProps> = ({ route }) => {
  // Using a static map image as a placeholder
  const staticMapUrl = `https://i.imgur.com/3Z6kHqv.png`;

  return (
    <div className="space-y-4">
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
        <img src={staticMapUrl} alt="Route map placeholder" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <p className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded-md">Live Map Placeholder</p>
        </div>
      </div>
       <div className="flex justify-center">
            <button className="w-3/4 bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-lg shadow-lg">
                Start Navigation
            </button>
       </div>
      <div>
        <h4 className="font-bold mb-2 text-slate-700">Turn-by-turn Stops:</h4>
        <ul className="space-y-2 text-sm">
          {route.stops.map((stop, index) => (
            <li key={index} className="flex items-start">
              <div className="pt-1 mr-3 shrink-0">
              {index === 0 || index === route.stops.length - 1 ? (
                 <FlagIcon className={`h-5 w-5 ${index === 0 ? 'text-green-500' : 'text-red-500'}`} />
              ) : (
                 <MapPinIcon className="h-5 w-5 text-sky-500" />
              )}
              </div>
              <span className="text-slate-600">{stop.address}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapView;

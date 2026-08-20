"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";

const DINGLE: [number, number] = [51.8059583, -3.0862543];
const INITIAL_ZOOM = 14;
const LOCATIONS = [
  { id: "blorenge", number: "01", title: "The Blorenge", note: "Mountain walk · 4–7 miles", coordinates: [51.800339, -3.060425] as [number, number], zoom: 15 },
  { id: "keepers-pond", number: "02", title: "Keeper’s Pond", note: "Wild swim · 10 min drive", coordinates: [51.7915, -3.0814] as [number, number], zoom: 16 },
  { id: "gilwern-hill", number: "03", title: "Gilwern Hill", note: "Climbing · on the doorstep", coordinates: [51.812906, -3.106964] as [number, number], zoom: 16 },
  { id: "mon-brec-canal", number: "04", title: "Mon & Brec Canal", note: "Walk or cycle · from Govilon", coordinates: [51.8175, -3.058056] as [number, number], zoom: 16 },
];

export default function TopoMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const dingleMarkerRef = useRef<LeafletMarker | null>(null);
  const locationMarkersRef = useRef<Record<string, LeafletMarker>>({});

  useEffect(() => {
    let cancelled = false;

    async function initialiseMap() {
      if (!containerRef.current || mapRef.current) return;

      const L = await import("leaflet");
      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        center: DINGLE,
        zoom: INITIAL_ZOOM,
        minZoom: 5,
        maxZoom: 17,
        zoomControl: true,
        scrollWheelZoom: false,
        worldCopyJump: true,
      });

      L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
        maxZoom: 17,
        attribution:
          'Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a> · Map style © <a href="https://opentopomap.org" target="_blank" rel="noreferrer">OpenTopoMap</a>',
      }).addTo(map);

      const marker = L.divIcon({
        className: "dingle-marker-wrap",
        html: '<span class="dingle-marker"><span class="dingle-marker-dot"></span></span>',
        iconSize: [42, 50],
        iconAnchor: [21, 46],
        popupAnchor: [0, -43],
      });

      dingleMarkerRef.current = L.marker(DINGLE, {
        icon: marker,
        title: "Cwm Sticky Dingle",
        alt: "Cwm Sticky Dingle",
      })
        .addTo(map)
        .bindPopup(
          '<strong>Cwm Sticky Dingle</strong><span>Upper Cwm Farm · Govilon</span>',
          { closeButton: false, offset: [0, -3] },
        )
        .openPopup();

      LOCATIONS.forEach((location) => {
        const locationIcon = L.divIcon({
          className: "place-marker-wrap",
          html: `<span class="place-marker">${location.number}</span>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
          popupAnchor: [0, -18],
        });

        locationMarkersRef.current[location.id] = L.marker(location.coordinates, {
          icon: locationIcon,
          title: location.title,
          alt: location.title,
        })
          .addTo(map)
          .bindPopup(
            `<strong>${location.title}</strong><span>${location.note}</span>`,
            { closeButton: false },
          );
      });

      mapRef.current = map;

      const focusLocationFromHash = () => {
        const id = window.location.hash.replace("#map-", "");
        const location = LOCATIONS.find((item) => item.id === id);
        if (!location) return;

        map.flyTo(location.coordinates, location.zoom, { duration: 1.15 });
        window.setTimeout(() => {
          locationMarkersRef.current[location.id]?.openPopup();
        }, 650);
      };

      window.addEventListener("hashchange", focusLocationFromHash);
      focusLocationFromHash();

      return () => window.removeEventListener("hashchange", focusLocationFromHash);
    }

    let removeHashListener: void | (() => void);
    initialiseMap().then((cleanup) => {
      removeHashListener = cleanup;
    });

    return () => {
      cancelled = true;
      removeHashListener?.();
      mapRef.current?.remove();
      mapRef.current = null;
      dingleMarkerRef.current = null;
      locationMarkersRef.current = {};
    };
  }, []);

  function resetView() {
    mapRef.current?.flyTo(DINGLE, INITIAL_ZOOM, { duration: 1.1 });
    window.setTimeout(() => dingleMarkerRef.current?.openPopup(), 650);
  }

  return (
    <figure className="map-area map-area-live">
      {LOCATIONS.map((location) => <span className="map-location-anchor" id={`map-${location.id}`} key={location.id}/>) }
      <div
        ref={containerRef}
        className="topo-map"
        role="region"
        aria-label="Interactive topographic map centred on Cwm Sticky Dingle near Govilon"
        tabIndex={0}
      />
      <figcaption className="map-caption">
        <span>Explore the landscape</span>
        <strong>Between Govilon &amp; the Blorenge</strong>
      </figcaption>
      <button className="map-reset" type="button" onClick={resetView}>
        <span aria-hidden="true">⌖</span> Return to the Dingle
      </button>
      <div className="map-interaction-note">Use +/− or pinch to zoom</div>
    </figure>
  );
}

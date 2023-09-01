import React, { useEffect } from "react";
import * as esriLoader from "esri-loader";

const MapComponent: React.FC = () => {
  useEffect(() => {
    esriLoader.loadModules([
      "esri/Map",
      "esri/views/MapView",
      "esri/Graphic",
      "esri/layers/GraphicsLayer",
    ]).then(([
      Map,
      MapView,
      Graphic,
      GraphicsLayer,
    ]) => {
      const map = new Map({
        basemap: "streets-night-vector",
      });

      const view = new MapView({
        container: "mapContainer",
        map,
        center: [-74.072092, 4.710989],
        zoom: 5,
      });

      // Define tus ciudades y símbolos
      const cities = [
        { name: "Bogotá", coordinates: [-74.072092, 4.710989], 
        content: function () {
          var iframe = document.createElement("iframe");
          iframe.src =
            "http://localhost:8000/d-solo/a3af77ce-7b29-4c9a-97a3-c776f58afeed/medellin-temperature?orgId=1&panelId=3";
          iframe.width = "100%";
          iframe.height = "500px";
          iframe.allowFullscreen = true;
          return iframe;
        } },
        {
          name: "Medellín",
          coordinates: [-75.564574, 6.253040],
          content: function () {
            var iframe = document.createElement("iframe");
            iframe.src =
              "http://localhost:8000/d-solo/a3af77ce-7b29-4c9a-97a3-c776f58afeed/medellin-temperature?orgId=1&panelId=1";
            iframe.width = "100%";
            iframe.height = "500px";
            iframe.allowFullscreen = true;
            return iframe;
          }
        },
        { name: "Barranquilla", coordinates: [-74.806092, 10.963889],           content: function () {
          var iframe = document.createElement("iframe");
          iframe.src =
            "http://localhost:8000/d-solo/a3af77ce-7b29-4c9a-97a3-c776f58afeed/medellin-temperature?orgId=1&panelId=4";
          iframe.width = "100%";
          iframe.height = "500px";
          iframe.allowFullscreen = true;
          return iframe;
        } },
        { name: "Cali", coordinates: [-76.5225, 3.4528],           content: function () {
          var iframe = document.createElement("iframe");
          iframe.src =
            "http://localhost:8000/d-solo/a3af77ce-7b29-4c9a-97a3-c776f58afeed/medellin-temperature?orgId=1&panelId=5";
          iframe.width = "100%";
          iframe.height = "500px";
          iframe.allowFullscreen = true;
          return iframe;
        } },
        { name: "Cartagena", coordinates: [-75.5250, 10.3910],           content: function () {
          var iframe = document.createElement("iframe");
          iframe.src =
            "http://localhost:8000/d-solo/a3af77ce-7b29-4c9a-97a3-c776f58afeed/medellin-temperature?orgId=1&panelId=6";
          iframe.width = "100%";
          iframe.height = "500px";
          iframe.allowFullscreen = true;
          return iframe;
        } },
        { name: "Manizales", coordinates: [-75.5070, 5.0681],           content: function () {
          var iframe = document.createElement("iframe");
          iframe.src =
            "http://localhost:8000/d-solo/a3af77ce-7b29-4c9a-97a3-c776f58afeed/medellin-temperature?orgId=1&panelId=7";
          iframe.width = "100%";
          iframe.height = "500px";
          iframe.allowFullscreen = true;
          return iframe;
        } },
        { name: "Pereira", coordinates: [-75.6961, 4.8133],          content: function () {
          var iframe = document.createElement("iframe");
          iframe.src =
            "http://localhost:8000/d-solo/a3af77ce-7b29-4c9a-97a3-c776f58afeed/medellin-temperature?orgId=1&panelId=8";
          iframe.width = "100%";
          iframe.height = "500px";
          iframe.allowFullscreen = true;
          return iframe;
        } }
      ];

      const citySymbol = {
        type: "simple-marker",
        style: "circle",
        color: [255, 0, 0, 0.6],
        size: 16,
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      };

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      cities.forEach((city) => {
        const point = {
          type: "point",
          longitude: city.coordinates[0],
          latitude: city.coordinates[1],
        };

        const graphic = new Graphic({
          geometry: point,
          symbol: citySymbol,
          attributes: city,
        });

        graphic.popupTemplate = {
          title: "", 
          content: city.content, 
        };

        graphicsLayer.add(graphic);
      });
    });
  }, []);

  return (
    <div>
      <style>{`
        body {
          margin: 0;
          padding: 0;
        }
        #mapContainer {
          width: 100vw; /* Ancho del contenedor del mapa al 100% del ancho de la ventana */
          height: 100vh; /* Altura del contenedor del mapa al 100% de la altura de la ventana */
          position: absolute;
        }
      `}</style>
      <div id="mapContainer"></div>
    </div>
  );
};

export default MapComponent;

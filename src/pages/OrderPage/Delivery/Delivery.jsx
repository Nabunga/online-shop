import React, { FC } from "react";
import { YMaps, Map } from "react-yandex-maps";
import './Delivery.scss';

const mapState = {
  center: [55.753994, 37.622093],
  zoom: 9
};

const Delivery = () => {
  const ymaps = React.useRef(null);
  const placemarkRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const [address, setAddress] = React.useState("");

  console.log(mapRef);

  const createPlacemark = (coords) => {
    return new ymaps.current.Placemark(
      coords,
      {
        iconCaption: "loading.."
      },
      {
        preset: "islands#violetDotIconWithCaption",
        draggable: true
      }
    );
  };

  const getAddress = (coords) => {
    placemarkRef.current.properties.set("iconCaption", "loading..");
    ymaps.current.geocode(coords).then((res) => {
      const firstGeoObject = res.geoObjects.get(0);

      const newAddress = [
        firstGeoObject.getLocalities().length
          ? firstGeoObject.getLocalities()
          : firstGeoObject.getAdministrativeAreas(),
        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
      ]
        .filter(Boolean)
        .join(", ");

      setAddress(newAddress);

      placemarkRef.current.properties.set({
        iconCaption: newAddress,
        balloonContent: firstGeoObject.getAddressLine()
      });
    });
  };

  const onMapClick = (e) => {
    const coords = e.get("coords");

    if (placemarkRef.current) {
      placemarkRef.current.geometry.setCoordinates(coords);
    } else {
      placemarkRef.current = createPlacemark(coords);
      mapRef.current.geoObjects.add(placemarkRef.current);
      placemarkRef.current.events.add("dragend", function () {
        getAddress(placemarkRef.current.geometry.getCoordinates());
      });
    }
    getAddress(coords);
  };

  return (
    <div className="App">
      <YMaps query={{ apikey: process.env.REACT_APP_API_KEY }}>
        <Map
          modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
          instanceRef={mapRef}
          onLoad={(ympasInstance) => (ymaps.current = ympasInstance)}
          onClick={onMapClick}
          state={mapState}
        />
        {address && (
          <div>
            <p>{address}</p>
          </div>
        )}
      </YMaps>
    </div>
  );
}

export default Delivery;
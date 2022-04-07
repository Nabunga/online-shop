import React from "react";
import { YMaps, Map } from "react-yandex-maps";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setAddress } from "../../../redux/slices/order";
import './Delivery.scss';

const mapState = {
  center: [53.2415, 50.22125],
  zoom: 11
};

const Delivery = () => {
  const dispatch = useAppDispatch();

  const ymaps = React.useRef(null);
  const placemarkRef = React.useRef(null);
  const mapRef = React.useRef(null);

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
      console.log(firstGeoObject.properties._data.text);

      const newAddress = [
        firstGeoObject.getLocalities().length
          ? firstGeoObject.getLocalities()
          : firstGeoObject.getAdministrativeAreas(),
        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
      ]
        .filter(Boolean)
        .join(", ");

      dispatch(setAddress(firstGeoObject.properties._data.text));

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
    <>
      <h2 className="delivery__header">Choose your address:</h2>
      <YMaps query={{ apikey: process.env.REACT_APP_API_KEY }}>
        <Map
          style={{width: "600px", height: "500px"}}
          modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
          instanceRef={mapRef}
          onLoad={(ympasInstance) => (ymaps.current = ympasInstance)}
          onClick={onMapClick}
          state={mapState}
        />
      </YMaps>
    </>
  );
}

export default Delivery;
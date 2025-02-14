import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.515839244535975, 126.72252433836653),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        new window.kakao.maps.Marker({
          position: map.getCenter(),
          map: map,
        });
      });
    };
  }, []);

  return <div id="map" style={{ width: "400px", height: "400px", marginTop: "20px" }}></div>;
};

export default Map;

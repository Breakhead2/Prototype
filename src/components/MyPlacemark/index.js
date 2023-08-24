import { Placemark } from "@pbe/react-yandex-maps";
import { useState, useEffect } from "react";

const MyPlacemark = ({ ymaps, data}) => {
  
  const [myBalloonLayout, setMyBallonLayout] = useState(null);

//   useEffect(() => {
//     if (ymaps) {
//       const balloonLayout = ymaps.templateLayoutFactory.createClass(
//         '<div class="popup">' + 
//           '<a class="close" href="#">&times;</a>' +
//           '<div class="arrow"></div>' +
//           '<div class="popup-inner">"Test"</div>' +
//         '</div>', {}
// );
//       setMyBallonLayout(balloonLayout);
//     }
//   }, [ymaps]);

  return (
    <Placemark
      key={data.id}
      modules={["geoObject.addon.balloon"]}
      geometry={data.coord}
      options = {data.options}
      properties={data.properties}
    />
  );
};

export default MyPlacemark;
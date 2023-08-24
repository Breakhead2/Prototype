import { Placemark } from "@pbe/react-yandex-maps";
import { useState, useEffect } from "react";

const AnotherPlacemark = ({ ymaps }) => {
  
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
      modules={["geoObject.addon.balloon"]}
      geometry={[53.215904, 50.132277]}
      options = {{
        preset: "islands#circleIcon",
        iconColor: '#081272',
        hideIconOnBalloonOpen: false,
    }}
      properties={{balloonContentBody: "Стела Ладья"}}
    />
  );
};

export default AnotherPlacemark;
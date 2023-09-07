import { Placemark } from "@pbe/react-yandex-maps";
import { useState, useEffect } from "react";
import $ from "jquery";
import "./AnotherPlacemark.css";
import point from ".././../assets/img/point.png";

const AnotherPlacemark = ({ ymaps, image }) => {
  const [template, setTemplate] = useState(null);
  console.log(point);

  let MyIconContentLayout = ymaps?.templateLayoutFactory.createClass(
    '<img src="$[properties.iconContent]" />'
  );

  let myBalloonLayout = ymaps?.templateLayoutFactory.createClass(
    '<div class="popup">' +
      '<div class="arrow"></div>' +
      '<div class="popup-inner">' +
      "$[[options.contentLayout observeSize minWidth=auto maxWidth=auto maxHeight=350]]" +
      "</div>" +
      '<a class="close" href="#">&times;</a>' +
      "</div>",
    {
      build: function () {
        this.constructor.superclass.build.call(this);

        this._$element = $(".popup", this.getParentElement());

        this.applyElementOffset();

        this._$element
          .find(".close")
          .on("click", $.proxy(this.onCloseClick, this));
      },

      clear: function () {
        this._$element.find(".close").off("click");

        this.constructor.superclass.clear.call(this);
      },

      applyElementOffset: function () {
        this._$element.css({
          left: -45,
          // top: -this._$element[0].offsetHeight - 40,
          top: -140
        });
      },

      onCloseClick: function (e) {
        e.preventDefault();
        this.events.fire("userclose");
      },
    }
  );

  let myBalloonContentLayout = ymaps?.templateLayoutFactory.createClass(
    `<div class="popup-inner-content">
      <div class="image-container">
        <img src="${image}" alt="" />
      </div>
      <div class="content">
        <div class="popup-title">$[properties.balloonHeader]</div>
        <div class="popup-content">$[properties.balloonContent]</div>
      </div>
    </div>
    `
  );

  return (
    <Placemark
      modules={["geoObject.addon.balloon"]}
      geometry={[53.215904, 50.132277]}
      options={{
        iconLayout: 'default#image',
        iconImageHref: 'https://i.ibb.co/P4zgcZm/point.png',
        closeButton: false,
        balloonLayout: myBalloonLayout,
        balloonContentLayout: myBalloonContentLayout,
        hideIconOnBalloonOpen: false,
      }}
      properties={{ balloonContent: "Памятник", balloonHeader: "Стела Ладьи" }}
    />
  );
};

export default AnotherPlacemark;

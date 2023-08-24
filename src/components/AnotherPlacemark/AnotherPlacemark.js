import { Placemark } from "@pbe/react-yandex-maps";
import { useState, useEffect } from "react";
import $ from "jquery";

const AnotherPlacemark = ({ ymaps }) => {
  
  const [template, setTemplate] = useState(null);

  let myBalloonLayout = ymaps?.templateLayoutFactory.createClass('<div class="popover top">' +
  '<a class="close" href="#">&times;</a>' +
  '<div class="arrow"></div>' +
  '<div class="popover-inner">' +
  '$[[options.contentLayout observeSize minWidth=auto maxWidth=auto maxHeight=350]]' +
  '</div>' +
  '</div>', {

    build: function () {
      this.constructor.superclass.build.call(this);

      this._$element = $('.popover', this.getParentElement());

      this.applyElementOffset();

      this._$element.find('.close')
          .on('click', $.proxy(this.onCloseClick, this));
    },

    clear: function () {
      this._$element.find('.close')
          .off('click');

      this.constructor.superclass.clear.call(this);
    },
    
    applyElementOffset: function () {
      this._$element.css({
        left: -(this._$element[0].offsetWidth / 2),
        top: -(this._$element[0].offsetHeight)
      });
    },

    onCloseClick: function (e) {
      e.preventDefault();
      this.events.fire('userclose');
    }
  });

  let myBalloonContentLayout = ymaps?.templateLayoutFactory.createClass(
    '<h3 class="popover-title">$[properties.balloonHeader]</h3>' +
        '<div class="popover-content">$[properties.balloonContent]</div>'
  );

  return (
    <Placemark
      modules={["geoObject.addon.balloon"]}
      geometry={[53.215904, 50.132277]}
      options = {{ 
        preset: "islands#circleIcon",
        iconColor: '#0049ff',
        closeButton: false,
        balloonLayout:myBalloonLayout,
        balloonContentLayout: myBalloonContentLayout,
        hideIconOnBalloonOpen: false,

      }}
      balloon={{options:{
        closeButton: false,
      }}}
      properties={{balloonContent:'Стела Ладьи', balloonHeader: 'Заголовок'}}
    />
  );
};

export default AnotherPlacemark;
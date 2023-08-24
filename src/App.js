import { YMaps, Map, Placemark, Polyline,  } from '@pbe/react-yandex-maps';
import {useState} from "react";

// data
import { data } from "./data/data.js";

//components
import MyPlacemark from './components/MyPlacemark/index.js';

// style
import "./App.css";

const App = () => {

    const defaultState = {
        center: [53.195250, 50.137810],
        zoom: 14
    };

    // const fullPackage = 'package.full';

    const [ymaps, setYmaps] = useState(null);

    const places = [
        {
            id: 1,
            coord: [53.203793, 50.109937],
            options: {
                preset: "islands#circleIcon",
                iconColor: '#0049ff',
                hideIconOnBalloonOpen: false,
            },
            properties: {
                balloonContentBody: "Монумент Славы",
            }
        },
        {
            id: 2,
            coord: [53.195179, 50.103088],
            options: {
                preset: "islands#circleIcon",
                iconColor: '#ff003b',
                hideIconOnBalloonOpen: false,
            },
            properties: {
                balloonContentBody: "Самарский академический театр оперы и баллета",
            }
        },
        {
            id: 3,
            coord: [53.212712, 50.145279],
            options: {
                preset: "islands#circleIcon",
                iconColor: '#A68900',
                hideIconOnBalloonOpen: false,
            },
            properties: {
                balloonContentBody: "Музей Самара космическая",
            }
        }
    ];

  return (
      <YMaps query={{ load: 'templateLayoutFactory', apikey: 'd1e0a31c-e1fb-4e9f-ae5c-b94400d2b79e'}} >
        <div className="App">
            <Map 
                onLoad={(ymaps) => setYmaps(ymaps)}
                width={"100vw"} 
                height={"100vh"} 
                defaultState={defaultState}
                >
                {places.map(place => <MyPlacemark key={place.id} ymaps={ymaps} data={place} />)}

                {/* <Polyline
                    geometry={[
                        [53.212712, 50.145279],
                        [53.211903, 50.143945],
                        [53.210992, 50.142142],
                        [53.210065, 50.140394],
                        [53.209278, 50.138514],
                        [53.207731, 50.135464],
                        [53.209483, 50.133830],
                        [53.212138, 50.128988],
                        [53.212595, 50.126683],
                        [53.212595, 50.126683],
                        [53.212595, 50.126777],
                        [53.212595, 50.126888],
                        [53.212595, 50.126999],
                        [53.212595, 50.127000],
                        [53.212595, 50.128888],
                        [53.212595, 50.128999],
                        [53.212595, 50.129000],
                    ]}
                    options={{
                        balloonCloseButton: false,
                        strokeColor: "#000000",
                        strokeWidth: 4,
                        strokeOpacity: 0.5,
                    }}
                /> */}

            </Map>
        </div>
      </YMaps>
  );
}

export default App;

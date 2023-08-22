import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps';
import './App.css';
import {useState} from "react";
import ActivePlacemark from "./components/ActivePlacemark/ActivePlacemark";

const App = () => {
    const [state, setState] = useState({
        center: [53.195250, 50.137810],
        zoom: 14
    });
  return (
      <YMaps>
        <div className="App">
            <Map width={"100vw"} height={"100vh"} defaultState={state}>
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    geometry={[53.212712, 50.145279]}
                    properties={{
                        balloonContentBody:
                            "Самара космическая",
                    }}
                />
                <Polyline
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
                />
            </Map>
        </div>
      </YMaps>
  );
}

export default App;

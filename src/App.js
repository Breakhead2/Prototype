import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './App.css';
import {useState} from "react";

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
                    defaultGeometry={[53.212712, 50.145279]}
                    properties={{
                        balloonContentBody:
                            "Самара космическая",
                    }}
                />
            </Map>
        </div>
      </YMaps>
  );
}

export default App;

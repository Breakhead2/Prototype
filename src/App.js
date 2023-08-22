import { YMaps, Map } from '@pbe/react-yandex-maps';
import './App.css';
import {useState} from "react";

const App = () => {
    const [initial, setInitial] = useState({
        center: [53.195250, 50.137810],
        zoom: 14
    });
  return (
      <YMaps>
        <div className="App">
            <Map className="grayMap" width={"100vw"} height={"100vh"} defaultState={initial} />
        </div>
      </YMaps>
  );
}

export default App;

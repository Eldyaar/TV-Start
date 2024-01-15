import { YMaps, Map } from '@pbe/react-yandex-maps';

const YMap = () => (
  <YMaps>
    <div>
      My awesome application with maps!
      <Map defaultState={{ center: [55.78, 37.71], zoom: 9 }} />
    </div>
  </YMaps>
);

export default YMap
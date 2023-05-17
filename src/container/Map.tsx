// import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import mapDataWorld from '@highcharts/map-collection/custom/world.geo.json';

// Highcharts.maps['world']= mapDataWorld

// const options = {
//   chart: {
//     map: 'world'
//   },
//   title: {
//     text: 'Animated Lines on a World Map Example'
//   },
//   series: [{
//     type: 'map',
//     animation: {
//       duration: 1000
//     },
//     data: [],
//     name: 'Map Series'
//   }],
//   plotOptions: {
//     series: {
//       states: {
//         hover: {
//           color: '#BADA55'
//         }
//       },
//       point: {
//         events: {
//           click: function () {
//             alert(`Clicked on ${this.name}`);
//           }
//         }
//       }
//     }
//   }
// };

// const AnimatedLinesOnWorldMap: React.FC = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setData([{
//         name: 'New York',
//         path: 'M 417.8,223.7 C 417.8,223.7 416.9,223.7 416.9,223.7 416.0,223.7 416.0,223.7 416.0,223.7 ...'
//       }, {
//         name: 'London',
//         path: 'M 465.3,226.4 C 465.3,226.4 464.4,226.4 464.4,226.4 463.5,226.4 463.5,226.4 463.5,226.4 ...'
//       }, {
//         name: 'Sydney',
//         path: 'M 551.0,358.0 C 551.0,358.0 550.1,358.0 550.1,358.0 549.2,358.0 549.2,358.0 549.2,358.0 ...'
//       }]);
//     }, 1000);
//   }, []);

//   return (
//     <HighchartsReact
//       highcharts={Highcharts}
//       options={{ ...options, series: [{ ...options.series[0], data }] }}
//     />
//   );
// };

// export default AnimatedLinesOnWorldMap;
import React from 'react'

function Map() {
  return (
    <div>Map</div>
  )
}

export default Map
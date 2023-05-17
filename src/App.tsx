import React from 'react';
import logo from './logo.svg';
// import './App.css';
import CoustomTable from './table';
import Dark from './Dark';
import Lol from './container/backToTop';
import TreeDropDown from './container/TreeDropDown';
import HockForm from './container/react-hock-form/Form';
import Checked from './container/checked';
import FunctionWithScss from './container/FunctionWithScss';
import "./Style/index.scss"
import MovingTable from './container/MovingTable';
import Family from './container/Family';
import { data } from './container/data';
import { RecursiveComponent } from './container/Recursive';
// import { data1 } from './container/data1';
import { File } from './container/File';
// import EkorTable from './container/EkorTable';
import { root } from './container/data2'
import RecursiveTree from './container/RecurciveTree';
import { mockOrgTreeList } from './container/data3';
import SideBar from './container/sideBar';
import AreaChart from './container/Highchart';
import PieChart from './container/PieChart';
import ComboChart from './container/Combo';
import VariableRadiusPie from './container/VariableRadius';
import Spiderweb from './container/SpiderWeb';
import AnimatedLinesOnWorldMap from './container/Map';
import CheckboxList from './container/Checkbox';
import Crosole from './container/Crosole/Crosole';
import Carousel from './container/Crosole/Crosole';
import LocationFile from './Location/LocationFile';
import Map from './container/Maping/Map';
import Formik from './container/Formik/Formik';
import GautoComplete from './container/GoogleAutoComplete/GautoComplete';
import Test from './container/test';
import Chat from './container/Chat/Chat';
function App() {

  const items = [
    {
      image: "https://via.placeholder.com/100x100?text=Image+1",
      title: "Title 1",
      description: "Description 1",
    },
    {
      image: "https://via.placeholder.com/100x100?text=Image+2",

      title: "Title 2",
      description: "Description 2",
    },
    {
      image: "https://via.placeholder.com/100x100?text=Image+3",

      title: "Title 3",
      description: "Description 3",
    },
    {
      image: "https://via.placeholder.com/100x100?text=Image+4",

      title: "Title 3",
      description: "Description 3",
    },
  ];

  return (
    <>
      {/* <Family familyTree={data}/>
      <Family familyTree={data}/>

      <div style={{padding:10}}></div> */}
      {/* <RecursiveComponent data={data1} /> */}

      {/* <File {...root}/> */}

      {/* <RecursiveTree list={mockOrgTreeList}/> */}
      {/* <SideBar/> */}
      {/* <Hover/> */}
      {/* <Card name={MenuType.MenuCard} /> */}

      {/* <MovingTable/> */}
      {/* <EkorTable/> */}
      {/* <Dark/>
    <Lol/>
    <CoustomTable
    header='raju'
    customButton
    value
    /> */}
      {/* <CoustomTable
    header='kaka'
    customButton
    value
    />
    <CoustomTable
    header='kaka'
    customButton
    noValue
    /> */}
      {/* <TreeDropDown/> */}

      {/* <HockForm/>
    <FunctionWithScss/> */}
      {/* <Checked/>   */}
      {/* <HockForm/>*/}
      {/* <AreaChart />
      <PieChart />
      <ComboChart />
      <VariableRadiusPie />
      <Spiderweb /> */}
      {/* <AnimatedLinesOnWorldMap/> */}
      {/* <CheckboxList /> */}
      {/* <Carousel items={items}/> */}
      {/* <LocationFile/> */}
      {/* <Map/>
      <Test/> */}
      <Chat/>
      {/* <Formik/> */}
      {/* <GautoComplete/> */}
    </>
  );
}

export default App;

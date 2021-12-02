import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alarm from './Pages/Dashboard/Alarm';
import Video from './Pages/Dashboard/Video';
import Gateways from './Pages/Devices/Gateways';
import Lorawan from './Pages/Devices/Lorawan';
import Nodes from './Pages/Devices/Nodes';
import Pumps from './Pages/Devices/Pumps';
import Rtus from './Pages/Devices/Rtus';
import Tanks from './Pages/Devices/Tanks';
import Home from './Pages/Home/Home';
import FlowMeter from './Pages/Sensors/FlowMeter';
import PresureSensor from './Pages/Sensors/PressureSensors';
import PumpMonitor from './Pages/Sensors/PumpMonitor';
import SensorLevel from './Pages/Sensors/SensorLevel';
import SensorTemperature from './Pages/Sensors/SensorsTemperature';
import Valves from './Pages/Sensors/Valves';
import Setting from './Pages/Settings/Setting';
import Temperature from './Pages/Temperature/Temperature';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/dashboard/alarm" exact element={<Alarm />}></Route>
        <Route path="/dashboard/video" exact element={<Video />}></Route>
        <Route path="/devices/pumps" exact element={<Pumps />}></Route>
        <Route path="/devices/tanks" exact element={<Tanks />}></Route>
        <Route path="/devices/gateways" exact element={<Gateways />}></Route>
        <Route path="/devices/rtus" exact element={<Rtus />}></Route>
        <Route path="/devices/nodes" exact element={<Nodes />}></Route>
        <Route path="/devices/lorawan" exact element={<Lorawan />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

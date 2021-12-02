import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Dashboard from '@material-ui/icons/Dashboard';
import Alarm from '@material-ui/icons/Alarm';
import Devices from '@material-ui/icons/Devices';
import Settings from '@material-ui/icons/Settings';
import Temperature from '@material-ui/icons/Telegram';
import Sensor from '@material-ui/icons/Send';

export default function ComponentWithIcon({ iconNumber }) {
    const icons = [<HomeIcon />, <Dashboard />, <Devices />,  <Sensor/> , <Temperature/>, <Settings />];

    const iconName = icons[iconNumber];
    return (
        <>
            {iconName}
        </>
    )
}

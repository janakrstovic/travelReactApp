import React from 'react'
import { TiCameraOutline } from 'react-icons/ti'
import {GiPalmTree} from 'react-icons/gi'
import {RiMusic2Line} from 'react-icons/ri'

const getProgress = (total, goal) => {
    return Math.floor((total/goal)*100) + '%';
}

const getProgressBarWidth = (width) => {
    return {width};
}


const TripsCount = ({total, tropic, trek, club, goal=10}) => {
    return (
        <div className="trips-count">
        <div className="content">
            <div className="total"><h1>{total}</h1>Trips</div>
            <div className="tropic"><h3>{tropic}</h3><GiPalmTree/></div>
            <div className="trek"><h3>{trek}</h3><TiCameraOutline/></div>
            <div className="club"><h3>{club}</h3><RiMusic2Line/></div>
            <div className="goal"><div className="progress" style={getProgressBarWidth(getProgress(total,goal))}></div> {getProgress(total, goal)}</div>
        </div>
    </div>
    )
}

export default TripsCount

import React, {useEffect, useState} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getIsStartedSelector} from "../../redux/rootSelectors";
import {useInterval} from "../../hooks/useInterval";
import {Auto, Moto, Trucks} from "../../types/types";
import {actions} from '../../redux/rootReducer'

const Progress = styled.div`
  display: inline-block;
  width: 80%;
`;

const LengthCount = styled.div`
  display: inline-block;
  font-size: 20px;
  margin-left: 10px;
`;

type Props = {
    car: Auto | Moto | Trucks,
    trackLength: number
}

const refreshTime = 300

export const CarProgress:React.FC<Props> = ({ car, trackLength }) => {
    const [progress, setProgress] = useState(0);
    const [progressMeters, setProgressMeters] = useState(0);
    const [onWay, setOnWay] = useState(false);
    const isStarted = useSelector(getIsStartedSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        isStarted ? setOnWay(true) : setOnWay(false)
    }, [isStarted])

    useInterval(() => {
        const distanceRefresh = (car.speed * refreshTime / 1000 / 60 / 60) * 1000
        setProgressMeters(prevState => {
            const distance = prevState + distanceRefresh
            if (distance >= trackLength) {
                setOnWay(false)
                dispatch(actions.setCarIsFinished(car.id))
                return trackLength
            } else {
                return distance
            }
        })
        setProgress((oldProgress) => {
            const progress = oldProgress + distanceRefresh / trackLength * 100
            if (progress >= 100) {
                return 100
            } else {
                return progress
            }
        });
    }, onWay ? refreshTime : null)

    return (
        <>
            <Progress>
                <LinearProgress variant="determinate" value={progress} />
            </Progress>
            <LengthCount>{`${Math.round(progressMeters)} м`}</LengthCount>
        </>

    );
}
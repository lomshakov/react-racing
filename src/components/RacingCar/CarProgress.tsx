import React, {useEffect, useState} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getIsStartedSelector} from "../../redux/rootSelectors";
import {useInterval} from "../../hooks/useInterval";
import {Auto, Moto, Truck} from "../../types/types";
import {actions} from '../../redux/rootReducer';

const Progress = styled.div`
  display: inline-block;
  width: 80%;
  margin-left: 10px;
`;

const LengthCount = styled.div`
  display: inline-block;
  font-size: 20px;
  margin-left: 10px;
  width: 60px;
`;

type Props = {
    car: Auto | Moto | Truck,
    trackLength: number,
    number: number
}

const refreshTime = 300;

export const CarProgress:React.FC<Props> = ({ car, trackLength, number }) => {
    const [progress, setProgress] = useState(0);
    const [progressMeters, setProgressMeters] = useState(0);
    const [time, setTime] = useState(0);
    const [onWay, setOnWay] = useState(false);
    const isStarted = useSelector(getIsStartedSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isStarted) {
            setProgressMeters(0);
            setProgress(0);
            setOnWay(true);
        } else {
            setOnWay(false);
        }
    }, [isStarted])

    useInterval(() => {
        const distanceRefresh = (car.speed * refreshTime / 1000 / 60 / 60) * 1000;
        setTime(prevState => prevState + refreshTime / 1000);
        setProgressMeters(prevState => {
            const distance = prevState + distanceRefresh;
            if (distance >= trackLength) {
                setOnWay(false);
                dispatch(actions.setCarIsFinished(car.id));
                dispatch(actions.addCarToResult({
                    indexNumber: number,
                    time: time,
                    type: car.type
                }));

                return trackLength;
            } else {
                return distance;
            }
        });
        setProgress((oldProgress) => {
            const progress = oldProgress + distanceRefresh / trackLength * 100;
            if (progress >= 100) {
                return 100;
            } else {
                return progress;
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
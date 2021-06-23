import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Auto, Moto, Truck} from "../../types/types";
import {CarProgress} from "./CarProgress";
import {IconMember} from "../common/IconMember";
import {useDispatch, useSelector} from "react-redux";
import {getIsStartedSelector} from "../../redux/rootSelectors";
import {useInterval} from "../../hooks/useInterval";
import {finishCar} from "../../redux/rootReducer";

const Container = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Number = styled.div`
  display: inline-block;
  font-size: 22px;
  margin-right: 10px;
`;

type Props = {
    car: Auto | Moto | Truck,
    number: number,
    trackLength: number
}

const refreshTime = 300;

export const RacingCar:React.FC<Props> = ({ car, number, trackLength }) => {
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
        } else setOnWay(false);
    }, [isStarted])

    useInterval(() => {
        const distanceRefresh = car.speed * refreshTime / 60 / 60;
        setTime(prevState => prevState + refreshTime / 1000);
        setProgressMeters(prevState => {
            const distance = prevState + distanceRefresh;
            if (distance >= trackLength) {
                setOnWay(false);
                dispatch(finishCar(car, number, time))
                return trackLength;
            } else return distance;
        });
        setProgress(prevState => {
            const progress = prevState + (distanceRefresh / trackLength * 100);
            if (progress >= 100) {
                return 100;
            } else return progress;
        });
    }, onWay ? refreshTime : null)

    return (
        <Container>
            <Number>{number}</Number>
            <IconMember type={car.type} sizeIcon={30} />
            <CarProgress progress={progress} progressMeters={progressMeters} />
        </Container>
    )
}

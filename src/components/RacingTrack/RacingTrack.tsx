import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {RacingCar} from "../RacingCar/RacingCar";
import {useDispatch, useSelector} from "react-redux";
import {getCarsSelector, getTrackLengthSelector} from "../../redux/rootSelectors";
import {actions} from '../../redux/rootReducer'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
`;

export const RacingTrack:React.FC = () => {
    const [raceFinished, setRaceFinished] = useState(false)
    const allCars = useSelector(getCarsSelector)
    const trackLength = useSelector(getTrackLengthSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        allCars && setRaceFinished(allCars.every((element) => {
            return element.isFinished
        }))
    }, [allCars])

    useEffect(() => {
        raceFinished && dispatch(actions.setRaceState(false))
    }, [raceFinished])

    return (
        <Container>
            <Title>
                Гоночный трек
            </Title>

            {allCars.map((car, index) =>
                <RacingCar key={car.id} car={car} number={index + 1} trackLength={trackLength} />
            )}

        </Container>
    )
}
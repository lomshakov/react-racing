import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {RacingCar} from "../RacingCar/RacingCar";
import {useDispatch, useSelector} from "react-redux";
import {getCarsSelector, getIsFinishedSelector, getTrackLengthSelector} from "../../redux/rootSelectors";
import {actions} from '../../redux/rootReducer';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const ResultButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;

export const RacingTrack:React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allCars = useSelector(getCarsSelector);
    const trackLength = useSelector(getTrackLengthSelector);
    const isFinished = useSelector(getIsFinishedSelector);

    useEffect(() => {
        const allCarsFinished = allCars.every((element) => {
            return element.isFinished
        })
        allCars && allCarsFinished && dispatch(actions.setFinishState(allCarsFinished))
    }, [allCars, dispatch]);

    useEffect(() => {
        isFinished && dispatch(actions.setRaceState(false))
    }, [isFinished, dispatch]);

    return (
        <Container>
            <Title>Гоночный трек</Title>

            {allCars.map((car, index) =>
                <RacingCar key={car.id} car={car} number={index + 1} trackLength={trackLength} />
            )}

            {isFinished &&
                <ResultButton variant="outlined" size="large" onClick={() => history.push('/result')}>
                    Результат заезда
                </ResultButton>
            }
        </Container>
    )
}
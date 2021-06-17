import React from "react";
import styled from "styled-components";
import {Button, Grid} from "@material-ui/core";
import {AutoCars} from "../CarsTable/AutoCars";
import {RacingTrack} from "../RacingTrack/RacingTrack";
import {useDispatch, useSelector} from "react-redux";
import {actions} from '../../redux/rootReducer'
import {getCarsSelector, getIsStartedSelector} from "../../redux/rootSelectors";
import {Auto, CarType, Moto, Trucks} from "../../types/types";
import {MotoCars} from "../CarsTable/MotoCars";
import {TrucksCars} from "../CarsTable/TrucksCars";

const Container = styled(Grid)`
  flex-grow: 1;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
`;

const StartButton = styled(Button)`
  && {
    margin-top: 30px;
  }
`;

export const RacingPage:React.FC = () => {
    const dispatch = useDispatch()
    const cars = useSelector(getCarsSelector)
    const isStarted = useSelector(getIsStartedSelector)

    const startRace = () => {
        dispatch(actions.setRaceState(true))
    }

    return (
        <div>
            <Container container spacing={2}>
                <Grid item xs={12}>
                    <Title>
                        Участники гонки:
                    </Title>

                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <AutoCars items={cars.filter(car => car.type === CarType.Auto) as Array<Auto>} />
                        </Grid>
                        <Grid item>
                            <MotoCars items={cars.filter(car => car.type === CarType.Moto) as Array<Moto>} />
                        </Grid>
                        <Grid item>
                            <TrucksCars items={cars.filter(car => car.type === CarType.Truck) as Array<Trucks>} />
                        </Grid>
                    </Grid>

                    <StartButton variant="contained" size="large" color="primary" onClick={startRace} disabled={isStarted}>
                        Старт
                    </StartButton>

                    <RacingTrack />

                </Grid>
            </Container>
        </div>
    );
};
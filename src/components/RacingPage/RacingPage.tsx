import React, {useState} from "react";
import styled from "styled-components";
import {Button, Grid, TextField} from "@material-ui/core";
import {AutoCars} from "../CarsTable/AutoCars";
import {RacingTrack} from "../RacingTrack/RacingTrack";
import {useDispatch, useSelector} from "react-redux";
import {actions} from '../../redux/rootReducer'
import {getCarsSelector, getIsStartedSelector, getTrackLengthSelector} from "../../redux/rootSelectors";
import {Auto, CarType, Moto, Trucks} from "../../types/types";
import {MotoCars} from "../CarsTable/MotoCars";
import {TrucksCars} from "../CarsTable/TrucksCars";
import {useHistory} from "react-router-dom";

const Container = styled(Grid)`
  flex-grow: 1;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
`;

const SettingsBlock = styled.div`
  margin: 20px 0;
`;

const Form = styled.form`
  display: inline-block;
  margin-left: 30px;
`;

export const RacingPage:React.FC = () => {
    const [raceLength, setRaceLength] = useState(0);
    const dispatch = useDispatch();
    let history = useHistory();
    const cars = useSelector(getCarsSelector);
    const isStarted = useSelector(getIsStartedSelector);
    const length = useSelector(getTrackLengthSelector);

    const startRace = () => {
        dispatch(actions.setRaceState(true));
        dispatch(actions.setFinishState(false));
        dispatch(actions.setIsFinishedToAllCars(false));
        dispatch(actions.setClearResults());
    }

    const handleChange = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        setRaceLength(Number(target.value));
    }

    const setLength = () => {
        dispatch(actions.setRaceLength(raceLength));
    }

    const openSettings = () => {
        history.push('/settings')
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

                    <SettingsBlock>
                        <Button variant="contained" size="medium" color="secondary" onClick={openSettings}>Настройка</Button>
                        <Form noValidate autoComplete="off">
                            <TextField
                                label="Длина трека"
                                id="filled-size-small"
                                defaultValue={length}
                                onInput={handleChange}
                                size="small"
                            />
                            <Button variant="contained" size="medium" color="primary" onClick={setLength}>ОК</Button>
                        </Form>
                    </SettingsBlock>


                    <Button variant="contained" size="large" color="primary" onClick={startRace} disabled={isStarted}>
                        Старт
                    </Button>

                    <RacingTrack />

                </Grid>
            </Container>
        </div>
    );
};
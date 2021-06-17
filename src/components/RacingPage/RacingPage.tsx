import React from "react";
import styled from "styled-components";
import {Button, Grid, Paper} from "@material-ui/core";
import {RacingMember} from "../RacingMember/RacingMember";
import {cars} from "../../cars";
import {RacingTrack} from "../RacingTrack/RacingTrack";

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

export const RacingPage:React.FC = ({ children }) => {
    return (
        <div>
            <Container container spacing={2}>
                <Grid item xs={12}>
                    <Title>
                        Участники гонки:
                    </Title>

                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <RacingMember items={cars.moto} />
                        </Grid>
                        <Grid item>
                            <RacingMember items={cars.auto} />
                        </Grid>
                        <Grid item>
                            <RacingMember items={cars.trucks} />
                        </Grid>
                    </Grid>

                    <StartButton variant="contained" size="large" color="primary">
                        Старт
                    </StartButton>

                    <RacingTrack />

                </Grid>
            </Container>
        </div>
    );
};
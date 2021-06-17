import React, {useState} from "react";
import styled from "styled-components";
import {Auto, cars, Moto, Trucks} from "../../cars";
import {RacingCar} from "../RacingCar/RacingCar";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
`;

export const RacingTrack:React.FC = () => {
    const [allCars, setAllCars] = useState([...cars.moto.racers, ...cars.auto.racers, ...cars.trucks.racers])


    return (
        <Container>
            <Title>
                Гоночный трек
            </Title>

            {allCars.map((car, index) =>
                <RacingCar car={car} number={index + 1} />
            )}
        </Container>
    )
}
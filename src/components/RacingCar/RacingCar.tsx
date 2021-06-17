import React from "react";
import styled from "styled-components";
import {Auto, Moto, Trucks} from "../../types/types";
import {CarProgress} from "./CarProgress";

const Container = styled.div`
  margin: 20px 0;
`;

const Number = styled.div`
  display: inline-block;
  font-size: 22px;
  margin-right: 10px;
`;

type Props = {
    car: Auto | Moto | Trucks,
    number: number,
    trackLength: number
}

export const RacingCar:React.FC<Props> = ({ car, number, trackLength }) => {
    return (
        <Container>
            <Number>{number}</Number>
            <CarProgress car={car} trackLength={trackLength} />
        </Container>
    )
}
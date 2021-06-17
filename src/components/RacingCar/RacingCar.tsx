import React from "react";
import styled from "styled-components";
import {Auto, Moto, Trucks} from "../../cars";
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
    number: number
}

export const RacingCar:React.FC<Props> = ({ car, number }) => {
    return (
        <Container>
            <Number>{number}</Number>
            <CarProgress />
        </Container>
    )
}
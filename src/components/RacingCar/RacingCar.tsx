import React from "react";
import styled from "styled-components";
import {Auto, Moto, Truck} from "../../types/types";
import {CarProgress} from "./CarProgress";
import {IconMember} from "../common/IconMember";

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

export const RacingCar:React.FC<Props> = ({ car, number, trackLength }) => {
    return (
        <Container>
            <Number>{number}</Number>
            <IconMember type={car.type} sizeIcon={30} />
            <CarProgress car={car} trackLength={trackLength} number={number} />
        </Container>
    )
}

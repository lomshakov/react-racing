import React from "react";
import styled from "styled-components";
import {Paper} from "@material-ui/core";
import {Auto} from "../../types/types";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

const Container = styled(Paper)`
  padding: 15px;
  height: 200px;
  width: 200px;
  text-align: center;
`;

const Name = styled.h4`
  text-align: center;
  font-size: 16px;
  margin: 0 0 15px;
`;

const Count = styled.div`
  font-size: 36px;
`;

const IconAuto = styled(DirectionsCarIcon)`
  && {
    height: 100px;
    width: 100px;
  }
`;

type Props = {
    items:  Array<Auto>
}

export const AutoCars:React.FC<Props> = ({ items }) => {
    return (
        <Container>
            <Name>Легковые автомобили</Name>
            <IconAuto />
            <Count>{items.length}</Count>
        </Container>
    )
}
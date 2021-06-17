import React from "react";
import styled from "styled-components";
import {Paper} from "@material-ui/core";
import {Moto} from "../../types/types";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";

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

const IconMoto = styled(MotorcycleIcon)`
  && {
    height: 100px;
    width: 100px;
  }
`;

type Props = {
    items:  Array<Moto>
}

export const MotoCars:React.FC<Props> = ({ items }) => {
    return (
        <Container>
            <Name>Мотоциклы</Name>
            <IconMoto />
            <Count>{items.length}</Count>
        </Container>
    )
}
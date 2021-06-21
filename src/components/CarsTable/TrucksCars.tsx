import React from "react";
import styled from "styled-components";
import {Paper} from "@material-ui/core";
import {Truck} from "../../types/types";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

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

const IconTrucks = styled(LocalShippingIcon)`
  && {
    height: 100px;
    width: 100px;
  }
`;

type Props = {
    items:  Array<Truck>
}

export const TrucksCars:React.FC<Props> = ({ items }) => {
    return (
        <Container>
            <Name>Грузовые автомобили</Name>
            <IconTrucks />
            <Count>{items.length}</Count>
        </Container>
    )
}
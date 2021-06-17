import React from "react";
import styled from "styled-components";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';

const IconTrucks = styled(LocalShippingIcon)`
  && {
    height: 100px;
    width: 100px;
  }
`;

const IconMoto = styled(MotorcycleIcon)`
  && {
    height: 100px;
    width: 100px;
  }
`;

const IconAuto = styled(DirectionsCarIcon)`
  && {
    height: 100px;
    width: 100px;
  }
`;

type Props = {
    name: string
}

export const IconMember:React.FC<Props> = ({ name }) => {

        if (name === "Мотоцикл") {
            return <IconMoto />
        } else if (name === "Легковой автомобиль") {
            return <IconAuto />
        } else {
            return <IconTrucks />
        }

}
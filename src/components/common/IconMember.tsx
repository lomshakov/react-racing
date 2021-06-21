import React from "react";
import styled from "styled-components";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import {CarType} from "../../types/types";

const IconTrucks = styled(LocalShippingIcon)<{ size: number }>`
  && {
    height: ${props => props.size}px;
    width: ${props => props.size}px;
  }
`;

const IconMoto = styled(MotorcycleIcon)<{ size: number }>`
  && {
    height: ${props => props.size}px;
    width: ${props => props.size}px;
  }
`;

const IconAuto = styled(DirectionsCarIcon)<{ size: number }>`
  && {
    height: ${props => props.size}px;
    width: ${props => props.size}px;
  }
`;

type Props = {
    type: CarType,
    sizeIcon: number
}

export const IconMember:React.FC<Props> = ({ type, sizeIcon }) => {
        if (type === CarType.Moto) {
            return <IconMoto size={sizeIcon} />
        } else if (type === CarType.Auto) {
            return <IconAuto size={sizeIcon} />
        } else {
            return <IconTrucks size={sizeIcon} />
        }
}
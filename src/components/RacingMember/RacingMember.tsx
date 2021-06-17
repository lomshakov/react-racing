import React from "react";
import styled from "styled-components";
import {Grid, Paper} from "@material-ui/core";
import {Auto, cars, Moto, Trucks} from "../../cars";
import {IconMember} from "./IconMember";

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

type Props = {
    items: {
        name: string,
        racers: Array<Auto | Moto | Trucks>
    }
}

export const RacingMember:React.FC<Props> = ({ items }) => {

    return (
        <Container>
            <Name>{items.name}</Name>
            <IconMember name={items.name} />
            <Count>{items.racers.length}</Count>
        </Container>
    )
}
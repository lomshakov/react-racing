import React from "react";
import styled from "styled-components";
import {ResultTable} from "./ResultTable";
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
`;

const BackButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;

export const ResultPage:React.FC = () => {
    const history = useHistory()

    const goToTrack = () => {
        history.push('/')
    }

    return (
        <Container>
            <Title>Таблица результатов</Title>
            <ResultTable />
            <BackButton variant="outlined" size="large" onClick={goToTrack}>
                Назад
            </BackButton>
        </Container>
    )
}
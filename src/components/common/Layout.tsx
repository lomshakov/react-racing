import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  text-align: center;
  margin-top: 40px;
`;

export const Layout:React.FC = ({ children }) => {
    return (
        <Container>
            <Title>
                React Racing App
            </Title>
            {children}
        </Container>
    );
};
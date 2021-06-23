import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import styled from "styled-components";

const Progress = styled.div`
  display: inline-block;
  width: 80%;
  margin-left: 10px;
`;

const LengthCount = styled.div`
  display: inline-block;
  font-size: 20px;
  margin-left: 10px;
  width: 60px;
`;

type Props = {
    progress: number,
    progressMeters: number
}

export const CarProgress:React.FC<Props> = ({ progress, progressMeters }) => {
    return (
        <>
            <Progress>
                <LinearProgress variant="determinate" value={progress} />
            </Progress>
            <LengthCount>{`${Math.round(progressMeters)} м`}</LengthCount>
        </>
    );
}
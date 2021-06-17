import React, {useEffect} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from "styled-components";

const Progress = styled.div`
  display: inline-block;
  width: 90%;
`;

export const CarProgress = () => {
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Progress>
            <LinearProgress variant="determinate" value={progress} />
        </Progress>
    );
}
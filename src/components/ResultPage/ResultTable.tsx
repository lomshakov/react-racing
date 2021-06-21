import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getResultSelector} from "../../redux/rootSelectors";
import {CarType} from "../../types/types";
import {IconMember} from "../common/IconMember";

const Container = styled(Paper)`
  margin: 0 auto;
  max-width: 800px;
`;

const RacingTable = styled(Table)`
  max-width: 800px;
`;

type ResultTableType = {
    finalPlace: number,
    indexNumber: number,
    typeCar: CarType,
    time: number
}

export const ResultTable:React.FC = () => {
    const [rows, setRows] = useState([] as ResultTableType[])
    const result = useSelector(getResultSelector)

    useEffect(() => {
        result && setRows(result.map((item, index) => {
            return {
                finalPlace: index + 1,
                indexNumber: item.indexNumber,
                typeCar: item.type,
                time: item.time
            }
        }))
    }, [result])

    return (
        <Container>
            <RacingTable size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Место</TableCell>
                        <TableCell align="right">Порядковый номер участника</TableCell>
                        <TableCell align="right">Иконка</TableCell>
                        <TableCell align="right">Тип ТС</TableCell>
                        <TableCell align="right">Итоговое время</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.indexNumber}>
                            <TableCell component="th" scope="row">
                                {row.finalPlace}
                            </TableCell>
                            <TableCell align="right">{row.indexNumber}</TableCell>
                            <TableCell align="right"><IconMember type={row.typeCar} sizeIcon={20} /></TableCell>
                            <TableCell align="right">{row.typeCar}</TableCell>
                            <TableCell align="right">{row.time.toFixed(1)} с.</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </RacingTable>
        </Container>
    );
}
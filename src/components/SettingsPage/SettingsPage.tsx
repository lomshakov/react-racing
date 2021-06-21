import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getCarsSelector} from "../../redux/rootSelectors";
import {CarType} from "../../types/types";
import {IconMember} from "../common/IconMember";
import {Button} from "@material-ui/core";
import {AddCarForm} from "./AddCarForm";
import {useHistory} from "react-router-dom";

const Container = styled(Paper)`
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;

const RacingTable = styled(Table)`
  max-width: 800px;
  margin-bottom: 30px;
`;

const ButtonBack = styled(Button)`
  && {
    text-align: end;
  }
`;

type CarsTable = {
    id: string,
    indexNumber: number,
    typeCar: CarType,
    speed: number
}

export const SettingsPage:React.FC = () => {
    const [rows, setRows] = useState([] as CarsTable[])
    const allCars = useSelector(getCarsSelector)
    const history = useHistory();

    useEffect(() => {
        allCars && setRows(allCars.map((item, index) => {
            return {
                id: item.id,
                indexNumber: index + 1,
                typeCar: item.type,
                speed: item.speed
            }
        }))
    }, [allCars])

    const goBack = () => {
        history.push('/')
    }

    return (
        <Container>
            <ButtonBack variant="contained" size="medium" onClick={goBack}>Назад</ButtonBack>

            <RacingTable size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Порядковый номер участника</TableCell>
                        <TableCell align="right">Иконка</TableCell>
                        <TableCell align="right">Тип ТС</TableCell>
                        <TableCell align="right">Скорость</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.indexNumber}
                            </TableCell>
                            <TableCell align="right"><IconMember type={row.typeCar} sizeIcon={20} /></TableCell>
                            <TableCell align="right">{row.typeCar}</TableCell>
                            <TableCell align="right">{row.speed}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </RacingTable>

            <AddCarForm />
        </Container>
    );
}
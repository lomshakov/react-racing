import React, {useState} from "react";
import Select from "react-select";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Auto, CarType, Moto, Truck} from "../../types/types";
import {Button, Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import styled from "styled-components";
import {v4 as uuidv4} from 'uuid'
import {useDispatch} from "react-redux";
import {actions} from "../../redux/rootReducer";

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

const carCreator = (data: IFormInput, type: CarType.Auto | CarType.Moto | CarType.Truck): Auto | Moto | Truck | undefined => {
    if (type === CarType.Auto) {
        return {
            id: uuidv4(),
            type: type,
            speed: data.speed,
            punctureWheel: data.punctureWheel,
            isFinished: false,
            passengerCount: data.passengerCount
        }
    }

    if (type === CarType.Moto) {
        return {
            id: uuidv4(),
            type: type,
            speed: data.speed,
            punctureWheel: data.punctureWheel,
            isFinished: false,
            hasStroller: data.hasStroller
        }
    }

    if (type === CarType.Truck) {
        return {
            id: uuidv4(),
            type: type,
            speed: data.speed,
            punctureWheel: data.punctureWheel,
            isFinished: false,
            cargoWeight: data.cargoWeight
        }
    }
}

type OptionType = {
    label: string;
    value: CarType;
}

interface IFormInput {
    carType: OptionType;
    speed: number;
    punctureWheel: number;
    hasStroller: boolean;
    passengerCount: number;
    cargoWeight: number;
}

export const AddCarForm:React.FC = () => {
    const { control, handleSubmit } = useForm<IFormInput>();
    const dispatch = useDispatch();
    const [selectedType, setSelectedType] = useState({} as CarType.Auto | CarType.Moto | CarType.Truck);

    const onSubmit: SubmitHandler<IFormInput> = data => {
        // @ts-ignore
        data && dispatch(actions.addNewCar(carCreator(data, selectedType)))
    };

    const handleChange = (option: OptionType) => {
        option && setSelectedType(option.value)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Controller
                name="carType"
                control={control}
                render={({ field }) => <Select
                    {...field}
                    onChange={handleChange as any}
                    options={[
                        { value: CarType.Moto, label: CarType.Moto },
                        { value: CarType.Auto, label: CarType.Auto },
                        { value: CarType.Truck, label: CarType.Truck }
                    ]}
                />}
            />

            <Controller
                name="speed"
                control={control}
                defaultValue={80}
                render={({ field }) => <TextField label="Скорость" {...field} />}
            />

            <Controller
                name="punctureWheel"
                control={control}
                defaultValue={0.1}
                render={({ field }) => <TextField label="Вероятность прокола" {...field} />}
            />

            {
                selectedType && selectedType === CarType.Auto &&
                <Controller
                    name="passengerCount"
                    control={control}
                    defaultValue={1}
                    render={({ field }) => <TextField label="Количество пассажиров" {...field} />}
                />
            }

            {
                selectedType && selectedType === CarType.Moto &&
                <Controller
                    name="hasStroller"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => <FormControlLabel
                        control={<Checkbox {...field} />}
                        label="Есть боковая коляска"
                    />}
                />
            }

            {
                selectedType && selectedType === CarType.Truck &&
                <Controller
                    name="cargoWeight"
                    control={control}
                    defaultValue={100}
                    render={({ field }) => <TextField label="Вес груза" {...field} />}
                />
            }

            <Button type="submit" variant="contained" size="medium" color="secondary">Добавить ТС</Button>
        </Form>
    );
};
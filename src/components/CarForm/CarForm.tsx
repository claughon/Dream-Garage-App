import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { 
    chooseName,
    chooseEngine,
    chooseMake,
    chooseModel,
    chooseTrim,
    chooseMiles,
    chooseMaxSpeed,
    chooseCost,
    chooseNumberOfOwners
} from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    name: string;
    engine: string;
    make: string;
    model: string;
    trim: string;
    miles: string;
    max_speed: string;
    cost: string;
    number_of_owners: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<CarState>(state => state.name)
    const engine = useSelector<CarState>(state => state.engine)
    const make = useSelector<CarState>(state => state.make)
    const model = useSelector<CarState>(state => state.model)
    const trim = useSelector<CarState>(state => state.trim)
    const miles = useSelector<CarState>(state => state.miles)
    const max_speed = useSelector<CarState>(state => state.max_speed)
    const cost = useSelector<CarState>(state => state.cost)
    const number_of_owners = useSelector<CarState>(state => state.number_of_owners)
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)
        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseEngine(data.engine))
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseTrim(data.trim))
            dispatch(chooseMiles(data.miles))
            dispatch(chooseMaxSpeed(data.max_speed))
            dispatch(chooseCost(data.cost))
            dispatch(chooseNumberOfOwners(data.number_of_owners))
            await serverCalls.create(store.getState())
            window.location.reload()
            event.target.reset()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Vehicle Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="engine">Engine Type</label>
                    <Input {...register('engine')} name="engine" placeholder="Engine"/>
                </div>
                <div>
                    <label htmlFor="make">Vehicle Make</label>
                    <Input {...register('make')} name="make" placeholder="Make"/>
                </div>
                <div>
                    <label htmlFor="model">Vehicle Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="trim">Vehicle Trim Package</label>
                    <Input {...register('trim')} name="trim " placeholder="Trim"/>
                </div>
                <div>
                    <label htmlFor="miles">Vehicle Mileage</label>
                    <Input {...register('miles')} name="miles" placeholder="Mileage"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Vehicle Max Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Max Speed"/>
                </div>
                <div>
                    <label htmlFor="cost">Vehicle Original Cost</label>
                    <Input {...register('cost')} name="cost" placeholder="Cost"/>
                </div>
                <div>
                    <label htmlFor="number_of_owners">Number of Owners</label>
                    <Input {...register('number_of_owners')} name="number_of_owners" placeholder="Number of Owners"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
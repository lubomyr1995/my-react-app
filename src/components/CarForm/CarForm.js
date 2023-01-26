import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";
import {useEffect} from "react";


const CarForm = ({setCars, updateCar, setUpdateCar, setUpdatedCar}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    });

    // const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [setValue, updateCar]);

    const submit = async (car) => {
        try {
            if (updateCar) {
                await carService.updateById(updateCar.id, car).then(({data}) => {
                    setUpdatedCar(data)
                    setUpdateCar(false)
                })
            } else {
                await carService.create(car).then(({data}) => setCars((prevState) => [...prevState, data]))
            }
        } catch (e) {
            // setFormErrors(e.response.data)
        }
        reset()
    }
    // {
    //     await carService.create(car).then(({data}) => setCars((prevSatate) => [...prevSatate, data]));
    //     reset()
    // }

    return (
        <div>
            {/*<form onClick={handleSubmit(submit)}>
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'only letters up to 20 characters'
                    }, required: {value:true, message: 'this field required'}
                })}/>
                {errors.brand && <span>{errors.brand.message}</span>}

                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min: {value: 0, message: 'min 0'},
                    max: {value: 1000000, message: 'max 1000000'}
                })}/>
                {errors.price && <span>{errors.price.message}</span>}

                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    min: {value: 1990, message: 'min year 1990'},
                    max: {value: new Date().getFullYear(), message: `max year ${new Date().getFullYear()}`}
                })}/>
                {errors.year && <span>{errors.year.message}</span>}

                <button>save</button>
            </form>*/}
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {errors.brand && <span>{errors.brand.message}</span>}

                <input type="text" placeholder={'price'} {...register('price')}/>
                {errors.price && <span>{errors.price.message}</span>}

                <input type="text" placeholder={'year'} {...register('year')}/>
                {errors.year && <span>{errors.year.message}</span>}

                <button disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export {CarForm};
const Simpson = ({simpson}) => {
    const {id, name, surname, image} = simpson;
    return (
        <div>
            Simpson:
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div><img src={image} alt={name}/></div>
            <hr/>
        </div>
    );
};

export {Simpson};
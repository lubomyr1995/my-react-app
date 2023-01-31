import css from './Button.module.css';

const Button = ({click, children, args}) => {
    return (
        <div>
                <button onClick={click} className={css.button} {...args}>{children}</button>
        </div>
    );
};

export {Button};
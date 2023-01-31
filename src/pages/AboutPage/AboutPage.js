import {Button} from "../../components";
import {useNavigate} from "react-router-dom";

const AboutPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            AboutPage: My customer button:
            <Button click={() => {
                navigate('/home')
            }
            }>My button</Button>
        </div>
    );
};

export {AboutPage};
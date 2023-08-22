import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AgeForm.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const initialInput = {
    'userName': '',
    'yearBirth': 0,
};

const currentYear = new Date().getFullYear();

const AgeForm = (props) => { 

    const [userInput, setUserInput] = useState(initialInput);
    const [error, setError] = useState();

    const submitHandler = (event) => { 
        event.preventDefault();
        //console.log('Submit')
        if(userInput['userName'] !== '' || userInput['yearBirth'] !== 0){
            props.onAdd(userInput['userName'], currentYear - userInput['yearBirth']);
            setUserInput(initialInput);
        }
        else {
            if (userInput['userName'] === '' || userInput['yearBirth'] === '') {
                setError(
                    {
                        'title': 'Invalid input',
                        'message': 'Please check the value enter in the form'
                    }
                );
                return;
            }
            if (userInput['yearBirth'] === currentYear) {
                setError(
                    {
                        'title': 'Invalid Age',
                        'message': 'Please enter the year of birth which is greater than 0'
                    }
                );
                return;
            }
        }

    };

    const formResetHandler = (event) => {
        event.preventDefault();
        //console.log('Reset')
        setUserInput(initialInput);

    };

    const inputHandler = (id, value) => { 
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [id]: value
            } 
        });
        //console.log(userInput);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='userName'> User Name</label>
                        <input type='text' id='userName' value={userInput['userName']}
                            onChange={(event) => inputHandler('userName', event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='yearBirth'> Add Year of Birth</label>
                        <input type='number' id='yearBirth' value={userInput['yearBirth'] || ''}
                            onChange={(event) => inputHandler('yearBirth', event.target.value)} />
                    </div>
                    <Button type='button' onClick={formResetHandler}>Reset</Button>
                    <Button type='submit'>Add</Button>
                </form>
            </Card>
        </div>
    );
};


export default AgeForm;
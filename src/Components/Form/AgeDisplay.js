
import { useState } from 'react';
import AgeList from '../Table/AgeList';
import './AgeDisplay.module.css'
import AgeForm from './AgeForm';

// let year = new Date().getFullYear();

// let data = [];

export default function AgeDisplay() {

    const [userList, setUserList] = useState([]);
    const addUserHandler = (uName, uAge) => {
        setUserList((prevInput) =>{
            return [{ name: uName, age: uAge }, ...prevInput];
        })
    }

    // if (userInput) {
    //     if(userInput['yearBirth'] > 0)
    //     { console.log(userInput)
    //         year -= userInput['yearBirth']
    //         data = [
    //             {
    //                 'key': Math.random(),
    //                 'userName': userInput['userName'],
    //                 'age': year
    //             },
    //             ...data,
    //         ]
    //         console.log(data)
    //     }  
    // }

    return (
        <div>
            <AgeForm onAdd={addUserHandler} />
            <AgeList content={userList} />
            
        </div>
    );
};
 
//{data && data.map(userdata => <AgeList id={userdata['key']} age={userdata['age']} userName={userdata['userName']}/>)}
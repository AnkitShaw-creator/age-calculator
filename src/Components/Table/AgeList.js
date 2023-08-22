import Card from "../UI/Card";
import classes from './AgeList.module.css'

const AgeList = (props) => {
    return (
        
        <Card className={classes.users}>
            {props.content.length === 0 && <p style={{  }}>No Inputs</p>}
            {props.content.length > 0 &&
                <ul>
                    {props.content.map(x => 
                        <li>{x.name} is {x.age} years old</li>    
                    )}
                </ul>}
            {/* <div className={classes.userName}>{props.userName}</div>
            <div className={classes.age}>{props.age}</div> */}
            
        </Card>
        
    );
};


export default AgeList;
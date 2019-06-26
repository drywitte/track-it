import React, { Component } from "react";
import API from "../utils/API";
import {withUser} from "../utils/UserContext";
import WorkoutTemplate from "../components/WorkoutTemplate";

class MyWorkouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        }
    }

    componentDidMount () {
        API.getUserWorkouts(this.props.user.userId).
            then(res => {
                console.log(res.data);
                this.setState({
                    workouts: res.data
                })
            })
    }

    render() {
        console.log(this.state.workouts);
        return(
            <div>
                <h1>Tracked Workouts</h1>
                {this.state.workouts.map(workout => {
                        return <WorkoutTemplate 
                            key={workout.id} 
                            isEditable="false" 
                            name={workout.Workout_template.name} 
                            id={workout.id} 
                            segments={workout.Workout_template.workout_structure}  
                            displayAction={false}
                            />
                            
                })}
            </div>  
        )
    }
}

export default withUser(MyWorkouts);
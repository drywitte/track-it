import React, { Component } from "react";
import API from "../utils/API";
import Workout from "../components/Workout";
import WorkoutTemplate from "../components/WorkoutTemplate"

class MyWorkouts extends Component {
    state = {
        user_id: 1,
        workouts: []
    }

    componentDidMount () {
        API.getUserWorkouts(this.state.user_id).
            then(res => {
                console.log(res.data);
                this.setState({
                    user_id: this.state.user_id,
                    workouts: res.data
                })
            })
    }

    render() {
        console.log(this.state.workouts);
        return(
            <div>
                <h1>list of workouts</h1>
                {this.state.workouts.map(workout => {
                        return <WorkoutTemplate 
                            key={workout.id} 
                            isEditable="false" 
                            name={workout.Workout_template.name} 
                            id={workout.id} 
                            segments={workout.Workout_template.workout_structure} 
                            postCompleted={this.postCompleted} />
                })}
            </div>  
        )
    }
}

export default MyWorkouts;
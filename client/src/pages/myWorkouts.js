import React, { Component } from "react";
import API from "../utils/API";
import Workout from "../components/Workout";

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
        return(
            <div>
            <h1>list of workouts</h1>
            {this.state.workouts.map(workout => {
                return <Workout {...workout} key={workout.id} />
            })}
            </div>  
        )
    }
}

export default MyWorkouts;
import React, { Component } from "react";
import API from "../utils/API";

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
                    workouts: res.data})
            })
    }

    render() {
        return(
            <div>list of workouts</div>
        )
    }
}

export default MyWorkouts;
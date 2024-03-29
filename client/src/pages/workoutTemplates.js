import React, {Component} from "react";
import API from "../utils/API";
import WorkoutTemplate from "../components/WorkoutTemplate";
import {withUser} from "../utils/UserContext";



class WorkoutTemplates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workout_templates: [],
            completed_workouts: [],
            mode: "view",
        }
    }

    componentDidMount () {
        this.loadData();
    }

    loadData() {
        this.loadTemplates();
        this.loadCompletedWorkouts();
    }

    loadCompletedWorkouts = () => {
        API.getUserWorkoutIds(this.props.user.userId)
            .then(res => { 
                const workout_ids = this.parseIds(res.data)
                this.setState({
                    completed_workouts: workout_ids
                })
            })
            .catch(err => console.log(err))
    }

    loadTemplates = () => {
        API.getWorkoutTemplates()
            .then(res => {
                console.log(res.data)
                this.setState({
                    workout_templates: res.data
                })
            })
            .catch(err => console.log(err))
    }

    arrayToObject = (array) => {
        return array.reduce((obj, item, index) => {
            obj[index] = item.segmentData;
            return obj;
        }, {})
    }

    parseIds = (workouts) => {
        let workoutIds = []
        workouts.forEach(workout => {
            workoutIds.push(workout.WorkoutTemplateId)
        })   
        return workoutIds;   
    }

    handleSubmit = (template, workoutName, e) => {
        e.preventDefault();
        const workout_template = this.arrayToObject(template);
        this.postTemplate({
            workout_structure: workout_template,
            name: workoutName,
            UserId: this.props.user.userId
        })
    }

    postTemplate = (req) => {
        API.postWorkoutTemplate(req ).then(res => {
            this.loadTemplates()
            this.toggleMode()
        }).catch(function(err) {
            console.log(err);
        });
    }

    postCompleted = (e) => {
        let new_completed_workouts = [...this.state.completed_workouts, parseInt(e.target.id)]
        this.setState({
            completed_workouts: new_completed_workouts
        });
        const body = {
            WorkoutTemplateId: e.target.id, 
            UserId: this.props.user.userId
        }
        API.postWorkoutInstance(body)
            .then(res => {
                console.log(res);
            })
    }

    toggleMode = () => {
        this.state.mode === "view" ? 
            this.setState({
                mode: "edit"
            })
            : this.setState({
                mode: "view"
            })
    }
    
    render() {
        return (
            <div className="card">
                {this.state.mode === "view" ? (
                    <div>
                        <button className="btn btn-primary m-2" onClick={this.toggleMode}>Create New Workout</button>
                    </div>
                ) 
                : (
                    <div>
                        <button disabled={true} className="btn btn-primary m-2" onClick={this.handleCreateNew}>Create New Workout</button>
                        <WorkoutTemplate 
                            isEditable="true" 
                            submitAction={this.handleSubmit} />
                    </div>
                )}
                {this.state.workout_templates.map(workout => {
                    return <WorkoutTemplate 
                        key={workout.id} 
                        isEditable="false" 
                        name={workout.name} 
                        id={workout.id} 
                        trackedCount={workout.tracked_count}
                        segments={workout.workout_structure} 
                        postCompleted={this.postCompleted}
                        isCompleted={this.state.completed_workouts.indexOf(workout.id) === -1 ? false : true}
                        displayAction={true}
                        />
                    })
                }
            </div>
        )
    }
}


export default withUser(WorkoutTemplates);
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
                console.log("completed workouts", res.data)
                const idArr = this.parseIds(res.data)
                this.setState({
                    completed_workouts: idArr
                })
            })
            .catch(err => console.log(err))
    }

    loadTemplates = () => {
        API.getWorkoutTemplates()
            .then(res => {
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

    parseIds = (array) => {
        console.log(array)
        return array.reduce((newArr, item, index) => {
            newArr[index] = item.id
            console.log(newArr)
            return newArr
        })
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

    countCompletions = (e) => {
        const id = e.target.id;
        
    }
    
    render() {
        return (
            <div className="card">
                {this.state.mode === "view" ? (
                    <div>
                        <button className="btn btn-primary" onClick={this.toggleMode}>Create New</button>
                    </div>
                ) 
                : (
                    <div>
                        <button disabled={true} className="btn btn-primary" onClick={this.handleCreateNew}>Create New</button>
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
                        segments={workout.workout_structure} 
                        postCompleted={this.postCompleted}
                        completionCount={this.countCompletions} />
                })}
            </div>
        )
    }
}


export default withUser(WorkoutTemplates);
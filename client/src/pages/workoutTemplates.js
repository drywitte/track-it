import React, {Component} from "react";
import API from "../utils/API";
import WorkoutTemplate from "../components/WorkoutTemplate";



class WorkoutTemplates extends Component {
    state = {
        workout_templates: [],
        user_id: 1,
        mode: "view",
    }

    componentDidMount () {
        this.loadTemplates()
    }

    loadTemplates = () => {
        API.getWorkoutTemplates().then(res => {
            this.setState({
                workout_templates: res.data
            })
        });
    }

    arrayToObject = (array) => {
        return array.reduce((obj, item, index) => {
            obj[index] = item.segmentData;
            return obj;
        }, {})
    }

    handleSubmit = (template, workoutName, e) => {
        e.preventDefault();
        const workout_template = this.arrayToObject(template);
        this.postTemplate({
            workout_structure: workout_template,
            name: workoutName,
            UserId: this.state.user_id
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

    addSegment = () => {

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
                        <button className="btn btn-primary" onClick={this.toggleMode}>Create New</button>
                    </div>
                ) 
                : (
                    <div>
                        <button disabled={true} className="btn btn-primary" onClick={this.handleCreateNew}>Create New</button>
                        <WorkoutTemplate isEditable="true" submitAction={this.handleSubmit} />
                    </div>
                )}
                {this.state.workout_templates.map(workout => {
                    return <WorkoutTemplate key={workout.id} isEditable="false" name={workout.name} segments={workout.workout_structure} />
                })}
            </div>
        )
    }
}

export default WorkoutTemplates;
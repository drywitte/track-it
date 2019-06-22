import React, {Component} from "react";
import API from "../utils/API";
import WorkoutTemplate from "../components/WorkoutTemplate";
import UserContext from "../utils/UserContext";



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
        console.log(this.context);
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
        }).then(res =>
            console.log(res)
        )
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
            UserId: this.state.user_id
        }
        API.postWorkoutInstance(body)
            .then(res => {
                console.log(res);
            })
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
                <UserContext.Consumer>
                    {(UserContext) => console.log(UserContext)}
                </UserContext.Consumer>
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
                        postCompleted={this.postCompleted} />
                })}
            </div>
        )
    }
}

UserContext.contextType = UserContext;


export default WorkoutTemplates;
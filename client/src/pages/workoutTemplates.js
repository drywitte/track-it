import React, {Component} from "react";
import API from "../utils/API";
import WorkoutTemplate from "../components/WorkoutTemplate";



class WorkoutTemplates extends Component {
    state = {
        workouts_templates: [],
        user_id: 1,
        mode: "view",
    }

    componentDidMount () {

    }

    arrayToObject = (array) => {
        let count = 0;
        return array.reduce((obj, item, index) => {
            obj[index] = item.segmentData;
            return obj;
        }, {})
    }

    handleSubmit = (template, e) => {
        e.preventDefault();
        const workout_template = this.arrayToObject(template);
        this.postTemplate({
            workout_structure: workout_template,
            name: "test",
            UserId: this.state.user_id
        });
    }


    postTemplate = (req) => {
        API.postWorkoutTemplate(req ).then(function(res) {
            console.log(res)
        }).catch(function(err) {
            console.log(err);
        });
    }

    addSegment = () => {

    }

    handleCreateNew = () => {
        this.setState({
            mode: "edit"
        })
    }

    
    render() {
        return (
            <div className="card">
                {this.state.mode === "view" ? 
                    <div>
                        <button className="btn btn-primary" onClick={this.handleCreateNew}>Create New</button>
                    </div>
                    : 
                    <div>
                        <button disabled="true" className="btn btn-primary" onClick={this.handleCreateNew}>Create New</button>
                        <WorkoutTemplate mode={this.state.mode} submitAction={this.handleSubmit} />
                    </div>
                }
            </div>
        )
    }
}

export default WorkoutTemplates;
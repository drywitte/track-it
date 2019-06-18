import React, {Component} from "react";
import API from "../utils/API";
import WorkoutTemplate from "../components/WorkoutTemplate";



class WorkoutTemplates extends Component {
    state = {
        workouts_templates: [],
        user_id: 1,
        mode: "view",
        new_template: {},
        segment_count: 0
    }

    componentDidMount () {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const new_segment = {
            amount: e.target.amount.value,
            category: e.target.category.value
        }

        this.setState({
            new_template: new_segment
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
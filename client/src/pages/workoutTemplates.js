import React, {Component} from "react";
import API from "../utils/API";
import InsertTemplate from "../components/WorkoutTempalte";


class WorkoutTemplates extends Component {
    state = {
        workouts_templates: [],
        user_id: 1,
        mode: "view"
    }

    componentDidMount () {

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
                        <InsertTemplate />
                    </div>
                }
            </div>
        )
    }
}

export default WorkoutTemplates;
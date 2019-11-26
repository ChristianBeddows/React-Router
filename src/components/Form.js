import React from "react";
import "./Form.css";

class Form extends React.Component {

    render() {
        return (
            <form className="form">

                <h2 className="form-title">Enter your Details</h2>

                <div className="form-row">
                    <div className="form-field half">
                        <label for="forename">Forename</label>
                        <input id="forename" type="text"/>
                    </div>

                    <div className="form-field half">
                        <label for="surname">Surname</label>
                        <input id="surname" type="text"/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field full">
                        <label for="email">Email Address</label>
                        <input id="email" type="text"/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field half">
                        <label>Affiliation</label><br/>
                        <input className="form-radio-input" type="radio" name="affiliation" value="staff"/>Staff<br/>
                        <input className="form-radio-input" type="radio" name="affiliation" value="student"/>Student<br/>
                        <input className="form-radio-input" type="radio" name="affiliation" value="associate"/>Associate<br/>
                    </div>

                    <div className="form-field half">
                        <label for="dob">Date of Birth</label>
                        <input id="dob" type="date"/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field full">
                        <label for="bio">Bio</label>
                        <input id="bio" type="textarea" className="form-textarea-input"/>
                    </div>
                </div>

                <button className="form-submit">Submit</button>
            </form>
        );
    }
}

export default Form;
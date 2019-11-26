import React from "react";
import "./Form.css";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forename: null,
            surname: null,
            email: null,
            affiliation: null,
            dateOfBirth: null,
            bio: null,
        }
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form className="form">

                <h2 className="form-title">Enter your Details</h2>

                <div className="form-row">
                    <Forename
                        forename={this.state.forename}
                        size="half"
                        onChange={(event) => this.handleChange(event)}
                    />
                    <Surname
                        surname={this.state.surname}
                        size="half"
                        onChange={(event) => this.handleChange(event)}
                    />
                </div>

                <div className="form-row">
                    <Email
                        email={this.state.email}
                        size="full"
                        onChange={(event) => this.handleChange(event)}
                    />
                </div>

                <div className="form-row">
                    <Affiliations
                        size="half"
                        onChange={(event) => this.handleChange(event)}
                    />
                    <DOB
                        dateOfBirth={this.state.dateOfBirth}
                        size="half"
                        onChange={(event) => this.handleChange(event)}
                    />
                </div>

                <div className="form-row">
                    <Bio
                        bio={this.state.bio}
                        size="full"
                        onChange={(event) => this.handleChange(event)}
                    />
                </div>

                <button className="form-submit">Submit</button>
            </form>
        );
    }
}

function Forename(props) {
        return (
            <div className={"form-field " + props.size}>
                <label htmlFor="forename">Forename</label>
                <input id="forename" name="forename" type="text" value={props.forename} onChange={props.onChange}/>
            </div>
        );
}

function Surname(props) {
    return (
        <div className={"form-field " + props.size}>
            <label htmlFor="surname">Surname</label>
            <input id="surname" name="surname" type="text" value={props.surname} onChange={props.onChange}/>
        </div>
    );
}

function Email(props) {
    return (
        <div className={"form-field " + props.size}>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="text" value={props.email} onChange={props.onChange}/>
        </div>
    );
}

function DOB(props) {
    return (
        <div className={"form-field " + props.size}>
            <label htmlFor="dob">Date of Birth</label>
            <input id="dob" name="dateOfBirth" type="date" value={props.dateOfBirth} onChange={props.onChange}/>
        </div>
    );
}

function Affiliations(props) {
    return (
        <div className={"form-field " + props.size}>
            <label>Affiliation</label><br/>
            <input className="form-radio-input" type="radio" name="affiliation" value="staff" onChange={props.onChange}/>Staff<br/>
            <input className="form-radio-input" type="radio" name="affiliation" value="student" onChange={props.onChange}/>Student<br/>
            <input className="form-radio-input" type="radio" name="affiliation" value="associate" onChange={props.onChange}/>Associate<br/>
        </div>
    );
}

function Bio(props) {
    return (
        <div className={"form-field " + props.size}>
            <label htmlFor="bio">Bio</label>
            <input id="bio" name="bio" type="textarea" className="form-textarea-input" value={props.bio} onChange={props.onChange}/>
        </div>
    );
}

export default Form;
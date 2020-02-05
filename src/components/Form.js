import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import "./Form.css";

const Form = () => {
    const {register, setValue, handleSubmit, triggerValidation, errors} = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    });
    const [form, setForm] = useState({
        forename: '',
        surname: '',
        customElement: 'red',
        email: '',
        affiliation: '',
        dateOfBirth: '',
        bio: '',
    });

    const onSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setForm({...form, [name]: value});
    };

    const toggleCustomElement = () => {
        if (form.customElement === 'red') {
            setForm({...form, customElement: 'green'});
            setValue('customElement', 'green');
        } else {
            setForm({...form, customElement: 'red'});
            setValue('customElement', 'red');
        }
        validate();
    };

    const validate = () => {
        triggerValidation("customElement");
    };

    const customElementStyling = {
        backgroundColor: form.customElement,
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

            <h2 className="form-title">Enter your Details</h2>

            <div className="form-row">
                <div className="form-field half">
                    <label htmlFor="forename">Forename</label>
                    <input name="forename" type="text" value={form.forename} onChange={handleChange} ref={register({required: true})}/>
                    {errors.forename && <Error message="This field is required."/>}
                </div>

                <div className="form-field half">
                    <label htmlFor="surname">Surname</label>
                    <input id="surname" name="surname" type="text" value={form.surname} onChange={handleChange} ref={register({required: true})}/>
                    {errors.surname && <Error message="This field is required."/>}
                </div>

            </div>

            <div className="form-row">
                <div className="form-field full">
                    <label>Custom Input</label>
                    <div className="custom-input" style={customElementStyling} onClick={toggleCustomElement} ref={register({name: 'customElement', type: 'custom'}, {validate: {isGreen: value => value === 'green'}})}/>
                    {errors.customElement && <Error message="This must be green."/>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-field full">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="text" value={form.email} onChange={handleChange} ref={register({required: true, pattern: /.*@york.ac.uk/})}/>
                    {errors.email && <Error message="A valid UoY email address is required."/>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-field half">
                    <label>Affiliation</label><br/>
                    <input className="form-radio-input" type="radio" name="affiliation" value="staff" onChange={handleChange} ref={register({required: true})}/>Staff<br/>
                    <input className="form-radio-input" type="radio" name="affiliation" value="student" onChange={handleChange} ref={register({required: true})}/>Student<br/>
                    <input className="form-radio-input" type="radio" name="affiliation" value="associate" onChange={handleChange} ref={register({required: true})}/>Associate<br/>
                    {errors.affiliation && <Error message="This field is required."/>}
                </div>
                <div className="form-field half">
                    <label htmlFor="dob">Date of Birth</label>
                    <input id="dob" name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} ref={register({required: true, validate: {inThePast: value => Date.parse(value) < Date.now()}})}/>
                    {errors.dateOfBirth && <Error message="The date must be in the past."/>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-field full">
                    <label htmlFor="bio">Bio</label>
                    <input id="bio" name="bio" type="textarea" className="form-textarea-input" value={form.bio} onChange={handleChange} ref={register({required: true, minLength: 20})}/>
                    {errors.bio && <Error message="This field must be at least 20 characters long."/>}
                </div>
            </div>

            <button className="form-submit">Submit</button>
        </form>
    );
};

const Error = ({message}) => {
    return (
        <span className="error-alert">{message}</span>
    );
};

export default Form;

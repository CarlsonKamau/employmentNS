import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class Eprofile extends Component {
    state = {
        // states that can be manipulated
        firstName: "",
        lastName: "",
        contact: "",
        companyName: "",
        companyEmail: "",
        companyContact: "",
        industry: "",
        companyWebsite: "",
        employeesNeeded: ""
    };

    //function that loops to match the value
    onInsertValue = (e) => {
        this.setState(
            { [e.target.name]: [e.target.value] }
        )
    }

    //creating the function once the button is clicked
    onSubmitHandle = (e) => {

        e.preventDefault(e);

        const employer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            contact: this.state.contact,
            companyName: this.state.companyName,
            companyEmail: this.state.companyEmail,
            companyContact: this.state.companyContact,
            industry: this.state.industry,
            companyWebsite: this.state.companyWebsite,
            employeesNeeded: this.state.employeesNeeded
        }

        axios.post(`http://localhost:8000`, {employer})
            .then(res => {
                console.log(res);
                console.log(res.data);
            }) ;
    }

    render() {
        return (
            <div className="form-style">
                <h3>Employer Profile setup </h3>
                <hr />
                <br />
                <form onSubmit = {this.onSubmitHandle}>
                    <div className="form-row">
                        <div className=" col-md-5 col-lg-5 form-group">
                            <label>First Name</label>
                            <input
                                name="firstName"
                                className="form-control"
                                placeholder="First Name"
                                type="text"
                                required
                                value={this.state.firstName}
                                onChange={e => this.onInsertValue(e)}
                            />
                        </div>
                        <div className=" col-md-4 col-lg-4  form-group">
                            <label>Last Name</label>
                            <input
                                name="lastName"
                                className="form-control"
                                placeholder="Last Name"
                                type="text"
                                required
                                value={this.state.lastName}
                                onChange={e => this.onInsertValue(e)}
                            />
                        </div>
                        <div className=" col-md-3 col-lg-3  form-group">
                            <label>Contact</label>
                            <input
                                name="contact"
                                className="form-control"
                                placeholder="phone number"
                                type="tel"
                                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                                required
                                value={this.state.contact}
                                onChange={e => this.onInsertValue(e)}
                            />
                            <small className="form-text text-muted">Format: 1234-465-678</small>

                        </div>
                    </div>
                    {/* company's information */}
                    <br />
                    <h3>Company's Information</h3>
                    <hr />
                    <br />
                    <div className="form-row">
                        <div className="form-group col-lg-5 col-md-5">
                            <lable>Name</lable>
                            <input
                                name="companyName"
                                className="form-control"
                                placeholder="Company Name"
                                type="text"
                                required
                                value={this.state.companyName}
                                onChange={e => this.onInsertValue(e)}
                            />
                        </div>
                        <div className="form-group col-lg-4 col-md-4">
                            <lable>Email</lable>
                            <input
                                name="companyEmail"
                                className="form-control"
                                placeholder=" Company Email"
                                type="email"
                                required
                                value={this.state.companyEmail}
                                onChange={e => this.onInsertValue(e)}
                            />
                        </div>
                        <div className="form-group col-lg-3 col-md-3">
                            <lable> Contact</lable>
                            <input
                                name="companyContact"
                                className="form-control"
                                placeholder=" Company Contact"
                                type="tel"
                                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                                required
                                value={this.state.companyContact}
                                onChange={e => this.onInsertValue(e)}
                            />
                            <small className="form-text text-muted">Format: 1234-465-678</small>
                        </div>
                    </div>
                    <div className="form-group ">
                        <lable>Industry</lable>
                        <input
                            name="industry"
                            className="form-control"
                            placeholder="Industry"
                            type="text"
                            required
                            value={this.state.industry}
                            onChange={e => this.onInsertValue(e)}
                        />
                    </div>
                    <div className="form-group">
                        <lable> Website</lable>
                        <input
                            name="companyWebsite"
                            className="form-control"
                            placeholder="Company Website"
                            type="text"
                            value={this.state.companyWebsite}
                            onChange={e => this.onInsertValue(e)}
                        />
                    </div>
                    <div className="form-group">
                        <lable>Employees Needed</lable>
                        <input
                            name="employeesNeeded"
                            className="form-control"
                            placeholder=" number of employees needed"
                            type="number"
                            required
                            value={this.state.employeesNeeded}
                            onChange={e => this.onInsertValue(e)}
                        />
                    </div>
                </form>
                <button className="btn btn-lg btn-primary"  type="submit">
                    Submit
        </button>
            </div>
        );
    }
}

export default Eprofile;

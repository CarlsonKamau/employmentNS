import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

class Jprofile extends Component {
    state = {
        firstName: "",
        lastName: "",
        DOB: "",
        location: "",
        mobile: "",

        // qualification information
        highestQualification: "",
        jobFunction: "",
        yearsOfExperience: "",
        availability: "",
        uploadCV: ""
    }

    //function that loops to match the value

    onInsertValue = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    };

    // creating on Submit function that will handle the state

    onSubmitHandler = e => {
        e.preventDefault();

        const job_seaker = 
        ({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            DOB: this.state.DOB,
            location: this.state.location,
            mobile: this.state.mobile,
            highestQualification: this.state.highestQualification,
            jobFunction: this.state.jobFunction,
            yearsOfExperience: this.state.yearsOfExperience,
            availability: this.state.availability,
            uploadCV: this.state.uploadCV
        });

        axios.post(`http://localhost:8000`,{job_seaker})
        .then(res=> {
            console.log(res)
            console.log(res.data)
        });
    };
    render() {
        return (
            <div className="Form-format">
                <h2 className="h">Basic information</h2>
                <hr />
                <br />
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>first name</label>
                                <input
                                    className="form-control"
                                    name="firstName"
                                    placeholder="First Name"
                                    required="required"
                                    value={this.state.firstName}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>last name</label>
                                <input
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required="required"
                                    value={this.state.lastName}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>DOB</label>
                                <input
                                    className="form-control"
                                    name="DOB"
                                    placeholder="DOB"
                                    type="date"
                                    value={this.state.DOB}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>location</label>
                                <input
                                    className="form-control"
                                    name="location"
                                    placeholder="Location"
                                    value={this.state.location}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-group">
                                <label>Contact</label>
                                <input
                                    className="form-control"
                                    name="mobile"
                                    placeholder="Contact"
                                    type="tel"
                                    pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                                    required="required"
                                    value={this.state.mobile}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>
                    </div>

                    <br />
                    <h2 className="h">Work experience</h2>
                    <hr />
                    <br />
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Qualifications</label>
                                <input
                                    className="form-control"
                                    name="highestQualification"
                                    placeholder="Qualifications"
                                    required="required"
                                    value={this.state.highestQualification}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>job function</label>
                                <input
                                    className="form-control"
                                    name="jobFunction"
                                    placeholder="Job Function"
                                    required="required"
                                    value={this.state.jobFunction}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-group">
                                <label>years of experience</label>
                                <input
                                    className="form-control"
                                    name="yearsOfExperience"
                                    placeholder="years Of Experience"
                                    type="number"
                                    required="required"
                                    value={this.state.yearsOfExperience}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>availability</label>
                                <input
                                    className="form-control"
                                    name="availability"
                                    placeholder="availability"
                                    required="required"
                                    value={this.state.availability}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-group">
                                <label>Upload CV</label>
                                <input
                                    className="form-control"
                                    name="availability"
                                    placeholder="availability"
                                    required="required"
                                    type="file"
                                    value={this.state.availability}
                                    onChange={e => this.onInsertValue(e)}
                                />
                            </div>
                        </div>
                    </div>
                </form>

                {/* creating a submitting button */}
                <br />
                <button className="btn btn-primary btn-lg" >Submit</button>
            </div>
        );
    }
}

export default Jprofile;
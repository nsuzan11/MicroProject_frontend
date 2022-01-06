import React from "react";
import DjangoCSRFToken from 'django-react-csrftoken'

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        First_Name: "",
        Last_Name: "",
        PhoneNumber: "",
        Email: "",
        Salary: "",
        User_Name: "",
        Password: "",
      },
    };
    this.saveClickHandler = this.saveClickHandler.bind(this);
  }


  saveClickHandler(val) {
    this.setState(val);
    console.log(val);
    const ret = async () => await fetch("employee/input-employee-detail/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-origin":"*",
        credentials: "same-origin"
      },
      body: JSON.stringify(this.state),
    })
    ret().then(res => console.log(res)).catch(err => console.log(err.message))

      // .then((response) => response.json())
      // .then((data) => {
      //   console.log("Success:", data);
      // })
      // .catch((error) => {
      //   console.error("Error:", error);
      // });
  }

  handleChange(propertyName, event) {
    const form = this.state.form;
    form[propertyName] = event.target.value;
    this.setState({ form: form });
  }

  render() {
    return (
      <div>
        <form>
            {/* <DjangoCSRFToken /> */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.form.First_Name}
              onChange={this.handleChange.bind(this, "First_Name")}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.form.Last_Name}
              onChange={this.handleChange.bind(this, "Last_Name")}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control"
              value={this.state.form.PhoneNumber}
              onChange={this.handleChange.bind(this, "PhoneNumber")}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={this.state.form.Email}
              onChange={this.handleChange.bind(this, "Email")}
            />
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              className="form-control"
              value={this.state.form.Salary}
              onChange={this.handleChange.bind(this, "Salary")}
            />
          </div>
          <div className="form-group">
            <label>User name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.form.User_Name}
              onChange={this.handleChange.bind(this, "User_Name")}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              value={this.state.form.Password}
              onChange={this.handleChange.bind(this, "Password")}
            />
          </div>
          <button
            type="button"
            className="btn btn-default"
            onClick={() => this.saveClickHandler(this.state.form)}
          >
            Add to database
          </button>
        </form>
      </div>
    );
  }
}
export default AddForm;

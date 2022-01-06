import { useState, useEffect } from "react";
import "./addemp.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Employee() {
  console.log("successfull ");

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getData = async () =>
      await fetch("employee/employee-detail/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-origin": "*",
          credentials: "same-origin",
        },
      });
    getData()
      .then((res) => res.json())
      .then((data) => data.data)
      .then((data) => setContacts(data))
      .catch((err) => console.log("err: ", err.message));
  }, []);

  return (
    <div classname="app-container">
      {console.log(contacts)}
      <Button component={Link} to="/addForm">
        Add
      </Button>
      <table class="table table-hover table-dark">
        <thead>
          <th>Name</th>
          <th>Phone number</th>
          <th>Email</th>
          <th>Salary/month</th>
          <th>Username</th>
          <th>Password</th>
        </thead>
        <tbody>
          {contacts.map((contact, idx) => (
            <tr key={idx}>
              <td>
                {contact.first_name} {contact.last_name}
              </td>
              <td>{contact.phone_number}</td>
              <td>{contact.email}</td>
              <td>{contact.salary}</td>
              <td>{contact.user_name}</td>
              <td>{contact.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

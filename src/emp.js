import React from "react";
import { useState } from "react";
import "./addemp.css";
import data from "./us_data.json";

export default function Employee() {
  console.log("successfull ");

  const [contacts] = useState(data);

  return (
    <div classname="app-container">
        <button onClick="addForm">Add</button>
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
          {contacts.map((contact) => (
            <tr>
              <td>
                {contact.First_Name} {contact.Last_Name}</td>
              <td>{contact.PhoneNumber}</td>
              <td>{contact.Email}</td>
              <td>{contact.Salary}</td>
              <td>{contact.User_Name}</td>
              <td>{contact.Password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

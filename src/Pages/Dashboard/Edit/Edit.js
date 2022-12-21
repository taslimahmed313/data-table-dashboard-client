import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import "./Edit.css";

const Edit = () => {
    const data = useLoaderData();
    console.log(data);
    const navigate = useNavigate();

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const age = form.age.value;
        const city = form.city.value;
        const company = form.company.value;
        const country = form.country.value;
        const email = form.email.value;
        const end = form.end.value;
        const fax = form.fax.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const position = form.position.value;
        const postal = form.postal.value;
        const salary = form.salary.value;
        const start = form.start.value;
        const web = form.web.value;
        const state = form.state.value;
        
        const updateData = {
            age, city, company, country, email, end, fax, name, phone, position, 
            postal, salary, start, web, state
        }
        console.log(updateData)
        
        fetch(`http://localhost:5000/edit/${data._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success("Table Data Successfully Updated");
                navigate("/dashboard")
            }
          });
    }





    return (
      <div>
        <h4>This Edit Page.</h4>
        <div>
          <form className="edit-form" onSubmit={handleUpdate}>
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  className="field-style field-split align-left"
                  defaultValue={data.name}
                />
                <input
                  type="text"
                  name="age"
                  className="field-style field-split align-right"
                  defaultValue={data.age}
                />
              </li>
              <li>
                <input
                  type="text"
                  name="city"
                  className="field-style field-split align-left"
                  defaultValue={data.city}
                />
                <input
                  type="text"
                  name="company"
                  className="field-style field-split align-right"
                  defaultValue={data.company}
                />
              </li>
              <li>
                <input
                  type="text"
                  name="country"
                  className="field-style field-split align-left"
                  defaultValue={data.country}
                />
                <input
                  type="text"
                  name="email"
                  className="field-style field-split align-right"
                  defaultValue={data.email}
                />
              </li>
              <li>
                <input
                  type="text"
                  name="end"
                  className="field-style field-split align-left"
                  defaultValue={data.end}
                />
                <input
                  type="text"
                  name="fax"
                  className="field-style field-split align-right"
                  defaultValue={data.fax}
                />
              </li>
              <li>
                <input
                  type="text"
                  name="phone"
                  className="field-style field-split align-left"
                  defaultValue={data.phone}
                />
                <input
                  type="text"
                  name="position"
                  className="field-style field-split align-right"
                  defaultValue={data.position}
                />
              </li>
              <li>
                <input
                  type="text"
                  name="postal"
                  className="field-style field-split align-left"
                  defaultValue={data.postal}
                />
                <input
                  type="text"
                  name="salary"
                  className="field-style field-split align-right"
                  defaultValue={data.salary}
                />
              </li>
              <li>
                <input
                  type="text"
                  name="start"
                  className="field-style field-split align-left"
                  defaultValue={data.start}
                />
                <input
                  type="text"
                  name="state"
                  className="field-style field-split align-right"
                  defaultValue={data.state}
                />
              </li>
              <li>
                <input
                  type="text"
                  name="web"
                  className="field-style field-split align-left"
                  defaultValue={data.web}
                />
              </li>
              <li>
                <input type="submit" value="SUBMIT" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
};

export default Edit;
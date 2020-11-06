import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
let details = {
  name: "",
  surname: "",
  email: "",
  physicalAddress: "",
  password: "",
};
export default function SignUpForm(props) {
  const [applicant, setApplicant] = useState(details);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setApplicant({ ...applicant, [name]: value });
    console.log(value);
  };

  const handleSubmit = () => {
    console.log("applicant", applicant);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="text" name="name" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Surname</Label>
        <Input type="text" name="surname" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Email</Label>
        <Input type="email" name="email" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Physical Address</Label>
        <Input type="text" name="physicalAddress" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" onChange={handleChange} />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
}

import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
export default function SignInForm(props) {
  // const { change, submit } = props;
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
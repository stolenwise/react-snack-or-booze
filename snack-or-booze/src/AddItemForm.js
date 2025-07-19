import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Api from "./Api";

//Sets up form function
function AddItemForm({ addItem }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        type: "snacks", 
        name: "",
        description: "",
        recipe: "",
        serve: ""
    });

    //Handle the change
function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({...f, [name]: value}));
}

// handle the submit
function handleSubmit(evt) {
    evt.preventDefault();
    addItem(formData);
    navigate(`/${formData.type}`);
  }

  // JSX form for a new snack or drink
return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="type">Type</Label>
        <Input type="select" name="type" id="type" value={formData.type} onChange={handleChange}>
  <option value="snacks">Snack</option>
  <option value="drinks">Drink</option>
</Input>
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input name="name" value={formData.name} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input name="description" value={formData.description} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input name="recipe" value={formData.recipe} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="serve">Serve</Label>
        <Input name="serve" value={formData.serve} onChange={handleChange} />
      </FormGroup>
      <Button>Add Item</Button>
    </Form>
  );
}


export default AddItemForm;
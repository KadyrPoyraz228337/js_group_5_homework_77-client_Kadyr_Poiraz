import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {submitForm} from "../../store/actions/forum";

const MessageForm = props => {
    const initialState = {
        author: '',
        image: null,
        description: ''
    };

    const [state, setState] = useState(initialState);

    const inputChangeHandler = e => setState({...state, [e.target.name]: e.target.value});
    const fileChangeHandler = e => setState({...state, [e.target.name]: e.target.files[0]});

    const submitHandler = async e => {
        e.preventDefault();

         const formData = new FormData();
         Object.keys(state).forEach(item => {
             formData.append(item, state[item])
         });

        await props.submitForm(formData);
        props.history.replace('/');
    };

    return (
        <Form onSubmit={submitHandler}>
            <FormGroup row>
                <Label for="author" sm={2}>Name (not necessary)</Label>
                <Col sm={10}>
                    <Input
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Enter author name"
                        onChange={inputChangeHandler}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="file" sm={2}>Photo (not necessary)</Label>
                <Col sm={10}>
                    <Input
                        type="file"
                        name="image"
                        id="file"
                        onChange={fileChangeHandler}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="description" sm={2}>Description</Label>
                <Col sm={10}>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        required
                        onChange={inputChangeHandler}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={10}>
                    <Button>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

const mapDispatchToProps = dispatch => ({
   submitForm: data => dispatch(submitForm(data))
});

export default connect(null, mapDispatchToProps)(MessageForm);
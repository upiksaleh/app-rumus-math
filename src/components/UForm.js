import React, {Component} from 'react';
import {Button, Divider, Form} from "semantic-ui-react";

export default class UForm extends Component {
    config = {};
    state = {
        hasil: {}
    };
    constructor(props) {
        super(props);
        this.config = props.config;
        this.state.hasil = this.config.hasil;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleFormSubmit(event) {
        this.config.rumus(this.state, this.config)
        this.setState({hasil: this.config.hasil});
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    {this.config.form.map((v, i) => (
                        <Form.Field key={i}>
                            <label>{v.placeholder}</label>
                            <input onChange={this.handleInputChange} {...v}/>
                        </Form.Field>
                    ))}
                    <Button type='submit' primary>Submit</Button>
                </Form>
                <Divider/>
                {
                    Object.keys(this.state.hasil).map((v, i) => (
                        <div key={i}>
                            {v.charAt(0).toUpperCase() + v.slice(1)} : {this.state.hasil[v]}
                        </div>
                    ))
                }
            </div>
        );
    }
}
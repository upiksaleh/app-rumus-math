import React, {Component} from 'react';
import './App.css';
import {Button, Divider, Grid, Image, Label, Menu} from "semantic-ui-react";
import {Link, Route, Switch} from "react-router-dom";
import UForm from "./components/UForm";
import * as rumus from "./rumus/index"
import URoute from "./URoute";
import UHasil from "./components/UHasil";
import UInfo from "./components/UInfo";
class App extends Component {

    render() {
        return (
            <div className="App">
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Menu vertical>
                                {
                                    Object.keys(rumus._lists).map((i) => {
                                    return <Link key={i} className='item' to={i}>{rumus._lists[i]}</Link>
                                    })
                                }
                                    {/*<Link className='item' to={'persegi'}>PERSEGI</Link>*/}
                                {/*<Link className='item' to={'l'}>PERSEGI</Link>*/}
                            </Menu>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <URoute ucomponent={UForm} rumus={rumus}/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <URoute ucomponent={UInfo} rumus={rumus}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default App;

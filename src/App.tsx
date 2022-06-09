import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props:any) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogs}
                                                                  message={props.state.message}
                    />}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;

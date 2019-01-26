import React, { Component } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import MediaControlCard from './components/Card/Card';
import CustomizedInputs from './components/Inputs/Inputs';
import FullWidthTabs from './components/Tabs/Tabs';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Button/>
                    <MediaControlCard/>
                    <CustomizedInputs/>
                    <FullWidthTabs/>
                </header>
            </div>
        );
    }
}

export default App;

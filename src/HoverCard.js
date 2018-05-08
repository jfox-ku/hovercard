import React from 'react';
import dubz from './ant.jpg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme(darkBaseTheme);

export class HoverCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {hovered: 'div'};
        this.hovering = this.hovering.bind(this);
    };

    hovering() {
        if (this.state.hovered == 'div')
        this.setState({hovered: 'div2'});
        else this.setState({hovered: 'div'});


    }


    render(){
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
            <div className={this.state.hovered} onMouseOver={this.hovering} onMouseOut={this.hovering}>
                <h1 className='h1'>Travel</h1>
               <img className="img" src={dubz}/>
                <h4 className='h4'>Antalya</h4>
                <p className='p'>Antalya is pretty cool, also it's extremely hot.</p>

            </div>
            </MuiThemeProvider>
        );



    };
}

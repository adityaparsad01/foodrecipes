import React, {Component} from 'react';

import '/scrollingHeader.css';
export default class scrollingHeader extends Component{
    constructor(props){
        super(props);

        this.state = {
            isMin:false
        };
    }
    render(){
        return(
            <div className="bs-scrolling-header">
                <h3>Food Adda</h3>
            </div>
        )
    }
}
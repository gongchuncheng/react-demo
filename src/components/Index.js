import React,{Component} from 'react';

import '../sass/index.scss';

class Index extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
        	<div id="wapper">
        		<h1>Hello React1</h1>
        		<a href="#/lifeCycle">Life Cycle</a>
                <a href="#/state">State</a>
                <a href="#/list">Component And Communicate</a>
        	</div>
            
        );
    }
}

export default Index;
import React,{Component} from 'react';

import '../sass/index.scss';

class Index extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
        	<div id="wapper">
        		<h1>Hello React</h1>
        		<a href="#/lifeCycle">Life Cycle</a>
        	</div>
            
        );
    }
}

export default Index;
/**
 * 组件
 */
import React,{Component} from 'react';

import '../sass/index.scss';

class Detail extends Component{

    constructor(props) {
        super(props);
    }

    render(){

    	let info = this.props.location.state.info;

        return (
        	<div>
	        	<h1>Hello React</h1>
	        	<p style={{ textAlign: 'center', marginTop: '100px', fontSize: '36px' }}>{ info }</p>
        	</div>
        );
    }
}

export default Detail;
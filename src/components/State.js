/**
 * state 组件状态
 */
import React,{Component} from 'react';

import '../sass/index.scss';

class State extends Component{

    constructor(props) {
        super(props);
        this.state = {
            val: '在这输入...'
        };
    }

    handleChange(e) {
        let t = e.target;
        this.setState({
            val: t.value ? t.value : '在这输入...'
        });
    }

    render(){
        return (
        	<div id="wapper">
        		<h1>Hello React</h1>
        		<input type="text" placeholder="在这输入..." onChange={ this.handleChange.bind(this) } />
                <p className="border">{ this.state.val }</p>
                <a href="#/" className="return" style={{ marginTop: '20px' }}>返回</a>
        	</div>
        );
    }
}

export default State;
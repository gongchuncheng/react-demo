/**
 * 组件
 */
import React,{Component} from 'react';

import '../sass/index.scss';

class ListItem extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
        	<li onClick={ this.props.handleClick }>{ this.props.info }</li>
        );
    }
}

export default ListItem;
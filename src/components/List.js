/**
 * 组件 和 组件间的通信
 */
import React,{Component} from 'react';
import superagentPromisePlugin from 'superagent-promise-plugin';
import superagent from 'superagent';
import uuid from 'uuid'

import '../sass/index.scss';
import Item from './ListItem';

let request = superagentPromisePlugin.patch(superagent);

class List extends Component{

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        request.get('http://localhost:8080/api/list')
        .then((res)=>{
            this.setState({ //更新state
                list: JSON.parse(res.text)
            });
        }).catch((err)=>{
            console.log(err);
        });
    }

    handleClick(item) {
        //同级组件之间通信
        this.context.router.push({pathname: 'detail',state:item});
    }

    render(){

        let item = this.state.list.map((item)=>{
            return <Item 
                    key = { uuid.v4() } 
                    info = { item.info }
                    handleClick = { this.handleClick.bind(this, item) }
                    /> //父子组件通信
        });

        return (
        	<div id="wapper">
                <h1>Hello React</h1>
        		<ul>{item}</ul>
                <a href="#/" className="return" style={{ marginTop: '20px' }}>返回</a>
        	</div>
        );
    }
}

List.contextTypes = {
    router: React.PropTypes.object
};

export default List;
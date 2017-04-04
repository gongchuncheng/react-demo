/**
 * 生命周期
 */
import React,{Component} from 'react';

import '../sass/index.scss';

class Index extends Component{

    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
    }

    componentWillMount() {
        alert("我将要被装载啦~");
    }

    componentDidMount() {
        alert("我已经被装载啦~");
    }

    componentWillUpdate(nextProps, nextState) {
        alert("我即将要更新啦~");
        console.log(nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        alert("我已经更新啦~");
        console.log(prevState);
    }

    componentWillUnmount() {
        alert("我即将被移除啦~");
    }

    handleClick() {
        this.setState({
            num: this.state.num + 1
        });
    }

    render(){
        alert("我正在渲染");
        return (
        	<div id="wapper">
        		<h1>Hello React</h1>
                <button onClick={this.handleClick.bind(this)}>{this.state.num}</button><br/>
                <a href="#/" className="return" style={{ marginTop: '20px' }}>返回</a>
        	</div>
            
        );
    }
}

export default Index;
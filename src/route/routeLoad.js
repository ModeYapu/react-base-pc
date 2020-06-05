import React, { Component } from 'react';
class RouteLoad extends Component{

    state = {
       // ComponentList:{},
    };

    render() {
        let path = this.props.location.pathname
        console.log('路由加载--',path)
        
        let ViewComponent  = require('@/pages'+path).default;
        return <ViewComponent  />
    }
}
export default RouteLoad;

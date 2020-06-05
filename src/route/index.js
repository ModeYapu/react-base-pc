import React, {Component} from 'react';
import { Router, Route,HashRouter } from 'react-router-dom'
import Home from '@/pages/home';
import RouteLoad from './routeLoad';

class RouteIndex extends Component{
    render() {
        return (
                 <HashRouter>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/:page1" component={RouteLoad}    />
                     <Route exact path="/:page1/:page2" component={RouteLoad}  />
                     <Route exact path="/:page1/:page2/:page3" component={RouteLoad}  />
                     <Route exact path="/:page1/:page2/:page3/:page4" component={RouteLoad}  />
                     <Route exact path="/:page1/:page2/:page3/:page4/:page5" component={RouteLoad}  />
                 </HashRouter>
        );
    };

    syncLoad (self){

        
    };

}
export default RouteIndex;

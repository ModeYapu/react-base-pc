import React,{Component} from 'react';
import { Button, DatePicker } from "antd";


class Home extends Component{
    render() {
        return (
            <div>欢迎哦 <br/><br/>

                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
                </Button>

            </div>
        );
    };
}
export default Home;
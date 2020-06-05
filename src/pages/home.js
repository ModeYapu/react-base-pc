import React, { Component } from "react";
import { Button, DatePicker, Input, Form } from "antd";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          欢迎哦 <br />
          <br />
          <DatePicker />
          <Input placeholder="Basic usage" />
          <Form.Item>
            <Button>Default Button</Button>
          </Form.Item>
        </div>
      </>
    );
  }
}
console.log(<Home />);
console.log(
  <Home>
    <div>这是Home组件</div>
    <div>
      <ul>
        <li>新的一条</li>
        <li>新的一条</li>
        <li>新的一条</li>
      </ul>
    </div>
  </Home>
);
export default Home;

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
          {/* <Button type="primary">Primary Button</Button> */}
        </div>
      </>
    );
  }
}
export default Home;

import React, { Component } from "react";
import allData from "../../asset/wangyiyun";

class My extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  componentDidMount() {
    this.init();
  }
  init = () => {
    console.log("init");

    let all = allData.allData;
    let top20 = allData.allData.splice(0, 20);
    console.log("all", all);
    console.log("top20", top20);
    let allCount = all
      .map((el) => (el = el.playCount))
      .reduce((prev, cure) => prev + cure, 0);
    let top20Count = top20
      .map((el) => (el = el.playCount))
      .reduce((prev, crev) => prev + crev, 0);
    let din = (top20Count / allCount) * 100;
    console.log(
      `allCount:${allCount},top20Count:${top20Count},二八定律：${din}%。`
    );
  };
  render() {
    return (
      <>
        <div>我的信息</div>
      </>
    );
  }
}

export default My;

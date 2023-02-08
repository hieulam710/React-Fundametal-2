import './App.css';
import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisable : false,
    }
    // this.handleClick = this.handleClick.bind(this) // rang buoc fn Click voi App
    // khi su dung declarefunction can rang buoc .bind de tro den function cha
  }

  handleClick =() =>{   // arrow function khong co tu khoa this nen se muon this tu function cha
    if(this.state.isVisable){
      this.setState({
        isVisable : false
      })
    }else {
      this.setState({isVisable : true})
    }
  }
  render() { 
    return (
      <>
      {
        this.state.isVisable ? <div> Demo State</div> : <h1>Hieubechimbe</h1>//  tao ra 1 toan tu 3 ngoi neu isVisable == true  thi ton tai div. nguoc lai
      }
      <button onClick={this.handleClick}>Click me</button> 

      </>
      );
  }
}
 
export default Note;


// State State- dịch nôm na là trạng thái
/* 
1 State
 -UI state state(User Interface)
 vd: - trạng thái ẩn hiện của của 1 componentcom
  - trạng thái đóng mở của của 1 modal box
  - trạng thái dii chuyển hay đứng yên của  1 thanh scroll ...

 -Business state ( trạng thái nghiệp vụ )
    - trạng thái liên quann đến dữ liệu được lấy từ database
    vd: - trạng thái đã có dữ liệu để render ra hay chưa
        - trạng thái dữ liệu đã được update hay chưa?


2 . cơ chế on-way data binding - ràng buộc dữ liệu 1 chiều
  State ở trong React sẽ có cơ chế onway data binding.
  Khi State được thay đổi, thì các component được ràng buộc với 
    State đó sẽ được tự động re-render lại

3 . Sự kiện trong React
  -CLick event
  NOTE : state ở trong react là 1 immutable object 
      -hay là 1 object không thể thay đổi được các phần tử ở bên trong
 */
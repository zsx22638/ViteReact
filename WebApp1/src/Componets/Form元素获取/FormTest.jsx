//
// const submit = (e) => {
//   e.preventDefault();
//   const username = e.target.username.value;
//   const password = e.target.password.value;
//   console.log(username, password);
// };
//
//
//
// function FormTest() {
//   return (
//     <div>
//       <h1>Form Test</h1>
//       <form onSubmit={submit}>
//         <input type="text" name="username" />
//           <input type="password" name="password" />
//           <button type="submit">登录</button>
//           <button type="reset">重置</button>
//       </form>
//     </div>
//   );
// }

// import {Component} from "react";
//
// class FormTest extends Component {
//     submit = (e) => {
//         e.preventDefault();
//         // const username = e.target.username.value;
//         // const password = e.target.password.value;
//         const username = this.username.value;
//         const password = this.password.value;
//         console.log(username, password);
//     };
//     render() {
//        return (
//            <div>
//                <h1>Form Test</h1>
//                <form onSubmit={this.submit}>
//                    <input type="text" name="username" ref={(el) => this.username = el} />
//                    <br />
//                    <input type="password" name="password" ref={(el) => this.password = el} />
//                    <br />
//                    <button type="submit">登录</button>
//                    <button type="reset">重置</button>
//                </form>
//            </div>
//        );
//     }
// }

// 表单统一管理

import {Component} from "react";

class FormTest extends Component {
    state = {
        username: "",
        password: "",
        phoneNumber: "",
    };
    save = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    };
    render() {
        return (
            <div>
                <h1>Form Test</h1>
                <form onSubmit={this.submit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.save} />
                    <br />
                    <input type="password" name="password" value={this.state.password} onChange={this.save} />
                    <br />
                    <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.save} />
                    <br />
                    <button type="submit">登录</button>
                    <button type="reset">重置</button>
                </form>
            </div>
        );
    }
}

export default FormTest;

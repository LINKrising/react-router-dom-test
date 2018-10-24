import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div>
            <ul>
              <li><Link to='/'>首页</Link></li>
              <li><Link to='/about'>关于</Link></li>
              <li><Link to='/topics'>主题列表</Link></li>
            </ul>
      </div>
    )
  }
}

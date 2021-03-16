import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';

const  menus = [
  {
    name : 'Trang chủ',
    to : '/',
    exact : true
  },
  {
    name : 'Quản lý sản phẩm',
    to : '/product-list',
    exact : false
  },
];

const Menulink =({lable,to,actveOnlyWhenExact}) => {
  return (
    <Route
        path ={to}
        exact = {actveOnlyWhenExact}
        children = {(match) => {
            var active = match ? 'active' : '';
            return (
                <li className= {active}>
                    <Link to ={to}>
                        {lable}
                    </Link>
                </li>
            )
        }}
    />
  );
};

class Menu extends Component {
  render () {
    return ( 
        <div className="navbar navbar-default">
            <ul className="nav navbar-nav">
                {this.showMenus(menus)}
            </ul>
        </div> 
    );
  } 
  showMenus = (menus) =>{
      var result = null;
      if (menus.length > 0){
          result = menus.map((menu,index) => {
            return(
                <Menulink
                    key = {index}
                    lable = {menu.name}
                    to = {menu.to}
                    actveOnlyWhenExact = {menu.exact}
                />
            );
        });
      }
      return result;
  }
}

export default Menu;

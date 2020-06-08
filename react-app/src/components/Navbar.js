import React,{useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Input, Menu } from 'semantic-ui-react';
import { accountService } from '../services';

export default ()=>{
    const [user, setUser] = useState({});
    useEffect(() => {
        if(accountService.userValue){
            setUser(user);
        }
    }, [])
    return (
        <Menu>
        <Menu.Item>
            <NavLink to="/" exact activeClassName={styles.selected}>Home </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/posts" activeClassName={styles.selected}>Posts </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/albums" activeClassName={styles.selected}>Albums </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/category" activeClassName={styles.selected}>Category</NavLink>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          {
               !user && (<Menu.Item
                name='login'
              >
               <NavLink to="/login" activeClassName={styles.selected}>Login</NavLink>
              </Menu.Item>)
          }
          
        </Menu.Menu>
    </Menu>
    );
};
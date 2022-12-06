import React from 'react'
import {Link} from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data';
import { UserCollection } from '../../api/userinfo';
import './header.css'
import { Meteor } from 'meteor/meteor'

function Header() {
  const user = useTracker(() => Meteor.user());

  const userlist = useTracker(() => {
      Meteor.subscribe('allUsers');
      return UserCollection.find().fetch();
  });
  console.log(userlist)
  const logout = () => {
    Meteor.logout();
}  
  return (
    <div className='header-wrapper'>
      <div className='inner-header-wrapper'>
        <div className='logo-wrapper'>
          <Link className='home' to='/'>SMS</Link>
        </div>
        <div className='users-name-wrapper'>
          <Link className='home' to='/'>
            {userlist.filter(lists => lists.username===user.username).map((lists)=>{
                  return(
                      <Link className='link-ns-2' to='/' key={lists._id}>
                          <span>{lists.firstname} {lists.lastname}</span>
                      </Link>
                  )
            })}
          </Link>
        </div>
        <div onClick={logout} className='logout'>
          Logout
        </div>
      </div>
    </div>
  )
}

export default Header
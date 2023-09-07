import React from 'react';
import UserList from '../List/UserList';

const UserListCard = ({ title, data }) => {
  return (
    <>
      <div className="card card-item p-4">
        <h3 className="fs-17 pb-3">
          {title}
        </h3>
        <div className="divider">
          <span />
        </div>
        <UserList users={data} />
      </div>
    </>
  )
}

export default UserListCard;
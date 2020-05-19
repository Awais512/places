import React from 'react';
import './UsersList.css';
import UsersItem from './UsersItem';
import Card from '../../shared/components/UiElements/Card';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No Users Found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className='users-list'>
      {props.items.map((user) => {
        return (
          <UsersItem
            key={user.id}
            image={user.image}
            id={user.id}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;

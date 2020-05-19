import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Awais',
      image:
        'https://images.unsplash.com/photo-1589678541589-ef36aa90aa8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;

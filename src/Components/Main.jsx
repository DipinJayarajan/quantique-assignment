// src/components/Main.js
import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  const { username, password } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Main Page</h1>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Main;

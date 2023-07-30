import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandName = styled.h2`
  margin: 0;
`;

const GetUsersButton = styled.button`
  background-color: #C1839F;
  color: #fff;
  padding: 12px 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #48b5e0;
  }
`;

const Navbar = ({ handleGetUsers }) => {
  return (
    <NavContainer>
      <BrandName>Photo.Inc</BrandName>
      <GetUsersButton onClick={handleGetUsers}><bold>Get Users</bold></GetUsersButton>
    </NavContainer>
  );
};

export default Navbar;

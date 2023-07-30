import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  background-color: #f9f9f9;
  border: 2px solid #ddd;
  border-radius: 7px;
  padding: 15px;
  margin: 8px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Email = styled.p`
  font-size: 14px;
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.first_name} />
      <Name>
        {user.first_name} {user.last_name}
      </Name>
      <Email>{user.email}</Email>
    </Card>
  );
};

export default UserCard;

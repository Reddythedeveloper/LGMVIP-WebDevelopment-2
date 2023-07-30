import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import { getUsers } from './api/api';
import Loader from './components/Loader'; // Import the Loader component
import GlobalStyles from './styles/globalStyles';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 10px;
  justify-content: center;
  padding: 15px;
`;


const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    setLoading(true);

    // Simulate a delay of 1.5 seconds before making the API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const userData = await getUsers(1);
      setUsers(userData.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Navbar handleGetUsers={handleGetUsers} />
      {loading ? (
        <Loader /> // Show Loader when loading is true
      ) : (
        <AppContainer>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </AppContainer>
      )}
    </>
  );
};

export default App;

import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export const getUsers = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

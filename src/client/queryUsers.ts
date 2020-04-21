import axios from 'axios';
import {User} from '../shared/User';
import {UserQuery} from '../shared/UserQuery';

export default async function queryUsers(query: UserQuery): Promise<Partial<User>[]> {
  const response = await axios.post<Partial<User>[]>('/users', query)
  return response.data;
};

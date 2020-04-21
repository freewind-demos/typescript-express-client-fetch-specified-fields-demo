import {User} from '../shared/User';
import {UserQuery} from '../shared/UserQuery';
import {keepSpecifiedFields} from './keepSpecifiedFields';

function loadAllUsers(): User[] {
  return [
    {id: 111, username: 'aaa000', email: 'aaa@test.com'},
    {id: 222, username: 'bbb000', email: 'bbb@test.com'},
    {id: 333, username: 'ccc000', email: 'ccc@test.com'},
  ];
}

export default function queryUsers(query: UserQuery): Partial<User>[] {
  const matchedUsers = loadAllUsers().filter(it => it.username.includes(query.query.keyword))
  return matchedUsers.map(user => query.specifiedFields ? keepSpecifiedFields(user, query.specifiedFields) : user);
}

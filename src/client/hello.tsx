import React, {useEffect, useState} from 'react'
import {KeepSpecifiedFields} from '../shared/KeepSpecifiedFields';
import {User} from '../shared/User';
import queryUsers from './queryUsers';

export default function Hello() {
  const [keyword, setKeyword] = useState('');
  const [users, setUsers] = useState<Partial<User>[]>();
  const [specifiedFields, setSpecifiedFields] = useState<KeepSpecifiedFields<User>>();

  useEffect(() => {
    (async () => {
      const users = await queryUsers({
        query: {
          keyword
        },
        specifiedFields: specifiedFields
      });
      setUsers(users);
    })();
  }, [keyword, specifiedFields])

  return <div>
    <h1>Query Users</h1>
    <div>
      <input type='text' onChange={(e) => setKeyword(e.target.value)} placeholder='search'/>
      <label><input type='radio' name='fieldsType' onClick={() => setSpecifiedFields(undefined)}/>All fields</label>
      <label><input type='radio' name='fieldsType' onClick={() => setSpecifiedFields({username: true})}/>Only
        username</label>
    </div>
    {
      users?.map((user, index) => <div key={index}>{JSON.stringify(user)}</div>)
    }
  </div>
};

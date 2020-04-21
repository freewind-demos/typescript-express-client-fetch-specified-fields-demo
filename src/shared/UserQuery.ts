import {KeepSpecifiedFields} from './KeepSpecifiedFields';
import {User} from './User';

export type UserQuery = {
  query: {
    keyword: string,
  },
  specifiedFields?: KeepSpecifiedFields<User>
}

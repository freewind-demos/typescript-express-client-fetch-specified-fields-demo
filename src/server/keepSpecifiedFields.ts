import {KeepSpecifiedFields} from '../shared/KeepSpecifiedFields';

export function keepSpecifiedFields<T extends object>(obj: T, specifyUserFields: KeepSpecifiedFields<T>): Partial<T> {
  for (const field in obj) {
    if (obj.hasOwnProperty(field)) {
      if (!specifyUserFields[field]) {
        delete obj[field]
      }
    }
  }
  return obj;
}

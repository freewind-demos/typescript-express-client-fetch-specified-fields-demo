export type KeepSpecifiedFields<T> = {
  [key in keyof T]?: true
}

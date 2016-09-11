export function treePath<T extends {}>(value: string, other: T|{} = {}): IPath<T> {
  return _.assign({value}, other);
}

export function tree(value: {[key: string]: IPath<any>}, level: string[] = []) {
  return _.mapValues(value, (path: IPath<any>) => branch(path, level))
}

function branch(path: IPath<any>, level: string[]) {
  const value = level.concat(path.value);
  const other = _.pickBy(path, (value, key) => key !== 'value');
  return _.assign({value}, tree(other, value));
}

type IPath<T> = {value: string} & (T|{});

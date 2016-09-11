import {treePath, tree} from '../shared/util/tree';

export const path = {
  circle: treePath('circle',{
    list: treePath('list')
  })
};

export const route = tree(path);

import {treePath, tree} from '../shared/util/tree';

export const path = {
  login: treePath('login'),
  register: treePath('register')
};

export const route = tree(path);

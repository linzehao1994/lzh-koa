import { register } from 'tsconfig-paths';
import { basename, dirname } from 'path';

register({
  baseUrl: dirname(__dirname),
  paths: {
    '@/*': [`./${basename(__dirname)}/*`]
  }
});

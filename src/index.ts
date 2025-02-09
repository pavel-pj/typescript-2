//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
 import {NotFoundError } from './tsc/errors'

const error = new NotFoundError('Not Found');
console.log(error.status); // 404
console.log(error.message); // Not Found






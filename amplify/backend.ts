import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { testFunction } from './function/testfunction/resource';

defineBackend({
  auth,
  data,
  testFunction,
});

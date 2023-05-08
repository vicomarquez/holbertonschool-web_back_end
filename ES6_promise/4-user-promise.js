import { uploadPhoto, createUser } from './utils';

function signUpUser(firstName, lastName) {
    return Promise.resolve({ firstName, lastName });
}
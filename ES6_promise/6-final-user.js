import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';


export default async function handleProfileSignup(firstName='', lastName='', fileName='') {
  const prom1 = {
    status: 'pending',
    value: '',
  };
  const prom2 = {
    status: 'pending',
    value: '',
  };
  try {
    const signup = await signUpUser(firstName, lastName);
    prom1.status = 'fulfilled';
    prom1.value = signup;
  } catch (err) {
    prom1.status = 'rejected';
    prom1.value = err.toString();
  }
  try {
    const upload = await uploadPhoto(fileName);
    prom2.status = 'fulfilled';
    prom2.value = upload;
  } catch (err) {
    prom2.status = 'rejected';
    prom2.value = err.toString();
  }
  return [prom1, prom2];
}

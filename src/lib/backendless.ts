import Backendless from 'backendless';

const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID!;
const API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY!;

console.log('Backendless Config:', {
  APP_ID,
  API_KEY: API_KEY ? '***' : 'undefined'
});

Backendless.initApp(APP_ID, API_KEY);

export default Backendless;
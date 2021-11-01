import store from './store';
import { LANGUAGE } from './language.actions';

store.subscribe(() => console.log(store.getState()));
console.log(store);

store.dispatch();

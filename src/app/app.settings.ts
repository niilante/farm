import {AuthProviders, AuthMethods} from "angularfire2";
export const AppSettings = Object.freeze({
  MEN_API_ENDPOINT: 'https://cp2rest.herokuapp.com/api/v1/'
  //... more of your variables
});

export const firebaseConfig = {
    apiKey: "AIzaSyDOQlfA1JpPHp-jzlU6C1QY1UPX5WklIwM",
    authDomain: "puuni-f1b87.firebaseapp.com",
    databaseURL: "https://puuni-f1b87.firebaseio.com",
    projectId: "puuni-f1b87",
    storageBucket: "puuni-f1b87.appspot.com",
    messagingSenderId: "617698457551"
};

export const firebarebaseLoginConfig =  {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

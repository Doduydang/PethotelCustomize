const firebaseConfig = {
  apiKey: 'AIzaSyBe_5YnfYzgwjSJjusRJaPHtMcWK0jJT8g',
  authDomain: 'pet-hotel-prod-748e8.firebaseapp.com',
  databaseURL:
    'https://pet-hotel-prod-748e8.firebaseio.com',
  projectId: 'pet-hotel-prod-748e8',
  storageBucket: 'pet-hotel-prod-748e8.appspot.com',
  messagingSenderId: '18095916881',
  appId: '1:18095916881:web:0c7d4cd05c32129f7d3570',
  measurementId: 'G-WDT4RYYQB7',
};

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/graphql`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export default {
  firebaseConfig,
  backendUrl,
};

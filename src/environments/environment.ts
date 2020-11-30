
export const environment = {
   production: false,
   firebaseConfig :{
    apiKey: process.env.API_KEY,
    authDomain:  process.env.AUTH_DOMAIN,
    databaseURL:  process.env.DATABASE_URL,
    projectId:  "sports-store-c1ca4",
    storageBucket:  "sports-store-c1ca4.appspot.com",
    messagingSenderId:  process.env.MESSAGING_SENDER_ID,
    appId:  process.env.API_ID,
    measurementId:  process.env.MEASUREMENT_ID
}
}

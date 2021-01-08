var admin = require("firebase-admin");

var serviceAccount = require("./flowershopmaria-e43ce-firebase-adminsdk-ulvdc-ed15050aac.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://flowershopmaria-e43ce-default-rtdb.europe-west1.firebasedatabase.app",
});

const uid = process.argv[2];

admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(" admin finns! ", uid);
    process.exit();
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

//https://www.youtube.com/watch?v=WtYzHTXHBp0&t=11s

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://powerflowershop-b5edb-default-rtdb.europe-west1.firebasedatabase.app",
});

const uid = process.argv[2];

admin
  .auth()
  .setCustomUserClaims(uid, { IsAdmin: true })
  .then(() => {
    console.log(" admin finns! ", uid);
    process.exit();
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

//https://www.youtube.com/watch?v=WtYzHTXHBp0&t=11s

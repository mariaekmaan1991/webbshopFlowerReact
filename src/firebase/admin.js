var admin = require("firebase-admin");

var serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-test-34550-default-rtdb.firebaseio.com",
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

var admin = require("firebase-admin");

var serviceAccount = require("./flowershopmaria-e43ce-firebase-adminsdk-ulvdc-55f2a2e3f9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://flowershopmaria-e43ce-default-rtdb.europe-west1.firebasedatabase.app",
});

const adminID = "id-admin_999";
const claimasAdmin = {
  adminAccount: true,
};

let securityRules = {
  rules: {
    AdminAccountContent: {
      ".read": "auth.token.claimasAdmin ===true",
    },
  },
};

export { admin };
//https://www.youtube.com/watch?v=WtYzHTXHBp0&t=11s

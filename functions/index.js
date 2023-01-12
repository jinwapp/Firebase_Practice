// var admin = require("firebase-admin");

// var serviceAccount = require("./key.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// SDK 초기화
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");

const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

// initializeApp();
const db = getFirestore();

//////////////////// Add Data ////////////////////////
async function quickstartAddData(db) {
  // [START firestore_setup_dataset_pt1]
  const docRef = db.collection("users").doc("alovelace");

  await docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  // [END firestore_setup_dataset_pt1]

  // [START firestore_setup_dataset_pt2]
  const aTuringRef = db.collection("users").doc("aturing");

  await aTuringRef.set({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912,
  });
  // [END firestore_setup_dataset_pt2]
}

// //////////////////// Read Data ////////////////////////
// async function quickstartListen(db) {
//   // [START firestore_setup_dataset_read]
//   const snapshot = await db.collection("users").get();
//   snapshot.forEach((doc) => {
//     console.log(doc.id, "=>", doc.data());
//   });
//   // [END firestore_setup_dataset_read]
// }

// quickstartAddData(db);
// quickstartListen(db);

// // // The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
// const functions = require("firebase-functions");

// // // The Firebase Admin SDK to access Firestore.
// // const admin = require("firebase-admin");
// // admin.initializeApp();

// exports.helloWorld = functions.https.onRequest((req, res) => {
//   console.log("진우");
//   res.send("Hello from firebase function...");
// });

// exports.api = functions.https.onRequest((req, res) => {
//   switch (req.method) {
//     case "GET":
//       res.send("it was GET request");
//       break;
//     case "POST":
//       const body = req.body;
//       res.send("it was POST request");
//       break;
//     case "DELETE":
//       res.send("it was DELETE request");
//       break;
//     default:
//       res.send("it was a default request...");
//   }
// });

// // Take the text parameter passed to this HTTP endpoint and insert it into
// // Firestore under the path /messages/:documentId/original
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into Firestore using the Firebase Admin SDK.
//   const writeResult = await admin
//     .firestore()
//     .collection("messages")
//     .add({ original: original });
//   // Send back a message that we've successfully written the message
//   res.json({ result: `Message with ID: ${writeResult.id} added.` });
// });

// // Listens for new messages added to /messages/:documentId/original and creates an
// // uppercase version of the message to /messages/:documentId/uppercase
// exports.makeUppercase = functions.firestore
//   .document("/messages/{documentId}")
//   .onCreate((snap, context) => {
//     // Grab the current value of what was written to Firestore.
//     const original = snap.data().original;

//     // Access the parameter `{documentId}` with `context.params`
//     functions.logger.log("Uppercasing", context.params.documentId, original);

//     const uppercase = original.toUpperCase();

//     // You must return a Promise when performing asynchronous tasks inside a Functions such as
//     // writing to Firestore.
//     // Setting an 'uppercase' field in Firestore document returns a Promise.
//     return snap.ref.set({ uppercase }, { merge: true });
//   });

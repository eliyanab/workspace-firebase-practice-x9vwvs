var firebaseConfig = {
  apiKey: "AIzaSyALeGW44MrQJOQhrSNS2ANWpBMJ1jj6JCk",
  authDomain: "csci225-eb.firebaseapp.com",
  projectId: "csci225-eb",
  storageBucket: "csci225-eb.appspot.com",
  messagingSenderId: "599518973937",
  appId: "1:599518973937:web:2aeb284889f7d5c543be50",
  measurementId: "G-DM3PB5G0PF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//object examples 
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  const inputdata = $("form").serializeArray();
  console.log(inputdata);
  /* save the data to database */
  var inputJson = {};
  for(var i=0;i<inputdata.length;i++){
    var n = inputdata[i]["name"];
    var v = inputdata[i]["value"];
    console.log(n+" "+v);
    inputJson[n]=v;
  }
  firebase.firestore().collection("hotelreservation").add(inputJson);
  /* clear the entry */
  $("form")[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hotelreservation")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
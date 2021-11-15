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

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = $("#signup-form input[name='username']").val();
  console.log(email);
  var password = $("#signup-form input[name='password']").val();
  console.log(password);
  var checkPW = $("#signup-form input[name='cpassword']").val();
  if(password != checkPW){
    console.log("passwords don't match. try again");
  }

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
//google button -- other choice
$('#google').click(function(){
  console.log("click google login method");
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log("success");
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = console.log(error.code);
    var errorMessage = console.log(error.message);
    // The email of the user's account used.
    var email = console.log(error.email);
    // The firebase.auth.AuthCredential type that was used.
    var credential = console.log(error.credential);
    // ...
    
  });

});
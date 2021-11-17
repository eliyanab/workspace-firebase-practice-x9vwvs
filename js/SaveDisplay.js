// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();
  // get the value of the form using serializeArray method
  const inputdata = $(".sampleSurvey").serializeArray();
  var inputJson = {};
  inputdata.forEach((data)=>{
    //console.log(data.name);
    //console.log(data.value);
    var n = data.name;
    var v = data.value;
    console.log(n+" "+v);
    inputJson[n]=v;
  });
  firebase.firestore().collection("surveyresults").add(inputJson);
  $("form")[0].reset();
});

// update the result in table
var ans1 = 0;
var ans2 = 0;
var ans3 = 0;
var ans4 = 0;
var ans5 = 0;
firebase
  .firestore()
  .collection("surveyresults")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      var ans = doc.data().choice;
     console.log(ans);
     if(ans == "A"){
       ans1++;
     }
     else if(ans == "B"){
       ans2++;
     }
     else if(ans == "C"){
       ans3++;
     }
     else if(ans == "D"){
       ans4++;
       console.log("ans4 = " + ans4);
     }
     else if(ans == "E"){
       ans5++;
     }
    });
    $('#ans1').html(ans1);
    $('#ans2').html(ans2);
    $('#ans3').html(ans3);
    $('#ans4').html(ans4);
    $('#ans5').html(ans5);
    ans1 = 0;
    ans2 = 0;
    ans3 = 0;
    ans4 = 0;
    ans5 = 0;
  });
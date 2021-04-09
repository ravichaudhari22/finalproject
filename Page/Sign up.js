// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_2Gnu5SqILZqIDU3naGP-w0LOYxaznkQ",
  authDomain: "meetadoctor-411b9.firebaseapp.com",
  databaseURL: "https://meetadoctor-411b9-default-rtdb.firebaseio.com",
  projectId: "meetadoctor-411b9",
  storageBucket: "meetadoctor-411b9.appspot.com",
  messagingSenderId: "961208034044",
  appId: "1:961208034044:web:8b5353796a54a14c08ed79",
  measurementId: "G-0VSH68VKYS"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	function signUp(){
		debugger;
		var _email = document.getElementById("email");
		var _password = document.getElementById("password");


		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(_email.value, _password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}










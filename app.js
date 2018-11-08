  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCTnyV6vlg2vakA3hGE0YNr4vIh5aWoWhA",
    authDomain: "users-f89df.firebaseapp.com",
    databaseURL: "https://users-f89df.firebaseio.com",
    projectId: "users-f89df",
    storageBucket: "users-f89df.appspot.com",
    messagingSenderId: "329236793287"
  };
  firebase.initializeApp(config);

  const db = firebase.database();

// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: `https://byronthe123.github.io/users/main.html`,
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    'callbacks': {
        'signInSuccess': function(currentUser, credential, redirectUrl) {
            window.location.assign('https://byronthe123.github.io/users/main.html');
            return true;
        }
    }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


firebase.auth().onAuthStateChanged((user) => {
    if(!user) {
        // if(window.location.href === 'https://byronthe123.github.io/random_12347/main.html') {
        //     alert('Please login');
        //     window.location.href = 'https://byronthe123.github.io/random_12347/index.html';
        // }
    } else {

        let username = user.displayName;
        let email = user.email;

        db.ref().push({
            db_username: username,
            db_email: email
        });

        
        db.ref().on('child_added', (snapshot) => {
            console.log(snapshot);
            console.log(snapshot.node_.children_.left.value.value_);
        });


        $('#out_name').text(username);
        $('#out_email').text(email);

    }
});
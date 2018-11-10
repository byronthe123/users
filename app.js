let loggingIn = false;  
  
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


const redirect = () => {
    window.location.href = `https://byronthe123.github.io/users/main.html`;
}

const authStateLogin = () => {
    console.log('logged in');
    $('#log_status').text('logged in');
    console.log(db.ref());
}

// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: `https://byronthe123.github.io/users/main.html`,
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
        // window.location.href = `https://byronthe123.github.io/users/main.html`;
            loggingIn = true;
          // don't redirect automatically
          return true;
        }
    },
};

if(window.location.href === 'https://byronthe123.github.io/users/main.html' && loggingIn) {
    window.onload = authStateLogin();
}

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);



// db.ref().on('value', (snapshot) => {
//     console.log(snapshot);
//     console.log(snapshot.hasOwnProperty('node_.children_'));
//     console.log(snapshot.node_.children_.root_.left);
//     if(snapshot.node_.children_.root_.left === undefined) {
//         console.log('null');
//     }
//     // console.log(snapshot.node_.children_.root_.left.value.value_);
//     // if(snapshot.node_.children_.root_.left.value.value_ !== email) {
//     //     db.ref().push({
//     //         db_username: username,
//     //         db_email: email
//     //     });
//     // }
// });


/* 
    firebase.auth().onAuthStateChanged((user) => {
        console.log(db.ref());
        if(!user) {
            // if(window.location.href === 'https://byronthe123.github.io/random_12347/main.html') {
            //     alert('Please login');
            //     window.location.href = 'https://byronthe123.github.io/random_12347/index.html';
            // }
            console.log('!user');
        } else {

            let username = user.displayName;
            let email = user.email;

            db.ref().on('child_added', (snapshot) => {
                console.log(snapshot);
                console.log(snapshot.node_.children_.root_.left);
                if(snapshot.node_.children_.root_.left !== undefined) {
                    // if(snapshot.node_.children_.root_.left.value.value_ !== email) {
                    if(snapshot.node_.children_.root_.value.children_.root_.left.value.value_ !== email) {
                        db.ref().push({
                            db_username: username,
                            db_email: email
                        });
                    }
                };

            $('#out_name').text(username);
            $('#out_email').text(email);

            });
        }
    });
*/
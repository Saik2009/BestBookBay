const firebaseConfig = {
    apiKey: "AIzaSyBR1B3oE882DaRBtktW8FiLGsL_CwjpNxU",
    authDomain: "bestbookbay.firebaseapp.com",
    databaseURL: "https://bestbookbay-default-rtdb.firebaseio.com",
    projectId: "bestbookbay",
    storageBucket: "bestbookbay.appspot.com",
    messagingSenderId: "688130533348",
    appId: "1:688130533348:web:ef0b054a21b089d78cc9f1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function goto() {
    window.location = "su.html";
}

function go() {
    username = document.getElementById("username").value;
    passowrd = document.getElementById("username").value;
    localStorage.setItem("user", username);
    firebase.database().ref("/" + username).on('value', function (snapshot) {

                snapshot.forEach(function (childSnapshot)
                {
                            childKey = childSnapshot.key;
                            childData = childSnapshot.val();
                            if (hh == childData) 
                            {

                            }
                        });
                  });
                }
                    

                            function bypass() {
                                input = "<input id='cb' class='form-control' placeholder='type creator bypass code here'>";
                                button = "<button onclick='next()' class='btn btn-warning'>Enter</button>";
                                row = input + "<br>" + button;
                                document.getElementById("bypass").innerHTML = row;
                            }

                            function next() {
                                x = document.getElementById("cb").value;
                                if (x == "Saik") {
                                    link = localStorage.getItem("ImageBackgroundLink");
                                    if (link == null) {
                                        link = localStorage.getItem("ImageBackgroundLink");

                                        window.location = "backpics.html";
                                    } else {

                                        window.location = "search.html";
                                    }
                                }

                            }

                            function go() {
                                link = localStorage.getItem("ImageBackgroundLink");
                                    if (link == null) {
                                        link = localStorage.getItem("ImageBackgroundLink");

                                        window.location = "backpics.html";
                                    } else {

                                        window.location = "search.html";
                                    }
                            }
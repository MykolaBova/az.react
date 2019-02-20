
var dbRef = window.dbRef = window.firebase.database().ref().child('Sergiy');
var mykolaRef = window.firebase.database().ref().child('mykola');

export function get() {
    return new Promise((resolve, reject) => {
        dbRef.on('value', snap => resolve(snap.val()));
    });
}

export function put() {
    return new Promise((resolve, reject) => {
        // var playersRef = firebase.database().ref("players/");

        dbRef.set ({
           John: {
              number: 1,
              age: 30
           },
            
           Amanda: {
              number: 2,
              age: 20
           }
        });

    });
}

export default {
    get, put
}
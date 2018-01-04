(function electric(){
    var output = document.getElementById("data");
    var config = {
        apiKey: "AIzaSyCPxWcejZl7Uuho23J5aj3RkuOnAYY8adI",
			authDomain: "teneapp-fe33d.firebaseapp.com",
			databaseURL: "https://teneapp-fe33d.firebaseio.com",
			projectId: "teneapp-fe33d",
			storageBucket: "teneapp-fe33d.appspot.com",
			messagingSenderId: "215621007831"
    };
    firebase.initializeApp(config);

	
	
	var table = document.getElementById('displayData');
dbRefObject = firebase.database().ref('/Jobs/').child('Electricity/' );
dbRefObject.on('value', snap => {
	data = snap.val();
	for(var r in data) {
		var row = table.insertRow(-1);
		for(var c in data[r]) {
			cell = row.insertCell(0);
			cell.innerHTML = data[r][c];
		}
	}
});
	
	
})();

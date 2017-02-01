var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "Chicago5", //Your password
    database: "users_db"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// user input
$(".submitBtn").on("click",function(){
	var firstName = $("#firstName").val().trim();
	var lastName = $("#lastName").val().trim();
	var email = $("#email").val().trim();
	var dogname = $("#dogName").val().trim();
	var dogBirthDay = $("#dogBirthday").val().trim();
	var password = $("#password").val().trim();


	var errorMsg = checkFields(firstName, lastName, email, dogname, dogBirthDay, password);

	if(errorMsg != ''){
		alert(errorMsg);
	}
	else{ // if there are missing fields don't send info to database

		var queryString = 'INSERT INTO customerInfo(customer_firstName, customer_lastName, email, dog_name, dog_birthday) VALUES (' +  firstName + ',' + lastName +
			',' + email + ',' + dogname + ',' + dogBirthDay + ')';
		
		connection.query(queryString, function(err, res){
			if(err)
				console.log(err);
			else
				console.log("no error");
		});

		// clear each text box
		$("#firstName").val("");
		$("#lastName").val("");
		$("#email").val("");
		$("#dogName").val("");
		$("#dogBirthday").val("");
		$("#password").val("");
		

	}

	// Prevents moving to new page
  	return false;
});
// Create Firebase event for adding into into to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey){
  console.log(childSnapshot.val());
// stores everything into a variable
  var petname = childSnapshot.val().name;
  var petage = childSnapshot.val().age;
  var chip = childSnapshot.val().chip;
  var ownerinfo = childSnapshot.val().info;
  var species = childSnapshot.val().species;
  var gender = childSnapshot.val().gender;

  console.log(petname);
  console.log(petage);
  console.log(chip);
  console.log(ownerinfo);
  console.log(species);
  console.log(gender);

//   ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });


  $("#userProfile > p").append(petname + petage + chip + ownerinfo + species + gender);


});

function checkFields(petname, petage, ownerinfo, species){
	var errorMsg = "Please fill in the blank fields:\n\n";
	//var petname = $("#nameinput").val();
	//var petage = $("#ageinput").val();

	var nameBlank = false;
	var ageBlank = false;
	var ownerInfoBlank = false;
	var speciesBlank = false;

	if (petname == ''){
		nameBlank = true;
		errorMsg += "Pets Name\n";
	}
	if(petage == ''){
		ageBlank = true;
		errorMsg += "Pets Age\n";
	}
	if(ownerinfo == ''){
		ownerInfoBlank = true;
		errorMsg += "Owner info\n";
	}
	if(species == ''){
		speciesBlank = true;
		errorMsg += 'Species';
	}
	if(!nameBlank && !ageBlank && !ownerInfoBlank && !speciesBlank){
		errorMsg = '';
	}
	return errorMsg;
}
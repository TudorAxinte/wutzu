var totalRows = 5;
var cellsInRow = 4;
var database = firebase.database();
var modal = document.getElementById('id01');
    
let formMessage = firebase.database().ref('customers');

//listen for submit event
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();
  let fname = document.querySelector('#fname').value;
  let lname= document.querySelector('#lname').value;
  let phone = document.querySelector('#phone').value;
  
  sendMessage(fname, lname, phone); 

  document.getElementById('registrationform').reset();
}

function sendMessage(fname, lname, phone) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    fname: fname,
    lname: lname,
    phone: phone
  });
  //alert("Sent to firebase");
}

	function addContact(event){
		if (event.target == modal) 
        modal.style.display = "none";
        
		}

	function drawTable() {
        var div1 = document.getElementById('div1');
        
    var ref = firebase.database().ref('customers');
    var table = document.getElementById("contacts_table");

ref.once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var val = data.val();
                content +='<tr>';
                content += '<td>' + val.fname+ '</td>';
                content += '<td>' + val.lname+ '</td>';
                content += '<td>' + val.phone+ '</td>';
                content += '<td>' + "remove" + '</td>';
                content += '</tr>';
            });
            table.innerHTML += content;
        }});

    
	}


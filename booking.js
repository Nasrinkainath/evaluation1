
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit2', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

function passvalues() {
  var firstname = document.getElementById("firstName").value;
  localStorage.setItem("firstName", firstname);

  var lastname = document.getElementById("lastName").value;
  localStorage.setItem("lastName", lastname);

  var age = document.getElementById("age").value;
  localStorage.setItem("age", age);
  var emailId = document.getElementById("Mail").value;

  localStorage.setItem("b1", emailId);


  var phonenumber = document.getElementById("Contact").value;

  localStorage.setItem("Contact", phonenumber);
  var gen = document.getElementById("rad").value;
  var gender_value;

  if (document.getElementById("male").checked) {
    gender_value = document.getElementById("male").value;
  }

  else if (document.getElementById("female").checked) {
    gender_value = document.getElementById("female").value;

  } else if (document.getElementById("other").checked) {
    gender_value = document.getElementById("other").value;

  }
  localStorage.setItem("b6", gender_value);



}

function callvalue() {
  if (document.getElementById('addpassenger').checked) {
    document.getElementById('set').style.display = 'block';
    document.getElementById('submit').style.display = 'none';



  } else {
    document.getElementById('set').style.display = 'none';
    document.getElementById('submit').style.display = 'block';

  }
}

function printvalues() {
  var name = document.getElementById("firstName1").value;
  sessionStorage.setItem("c1", name);

  var name2 = document.getElementById("lastName1").value;
  sessionStorage.setItem("c2", name2);

  var year = document.getElementById("age1").value;
  sessionStorage.setItem("c3", year);

  var gender = document.getElementById("radi").value;
  var genderpoint;

  if (document.getElementById("male1").checked) {
    genderpoint = document.getElementById("male1").value;
  }

  else if (document.getElementById("female1").checked) {
    genderpoint = document.getElementById("female1").value;

  } else if (document.getElementById("other1").checked) {
    genderpoint = document.getElementById("other1").value;

  }
  sessionStorage.setItem("gender", genderpoint);

}
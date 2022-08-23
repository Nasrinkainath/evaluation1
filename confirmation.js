let flight_id=localStorage.getItem("flightid");


let data1=localStorage.getItem("firstName");
let data2=localStorage.getItem("lastName");
let data3=localStorage.getItem("age");
let var2=localStorage.getItem("b6");
let data5=localStorage.getItem("b1");
let data6=localStorage.getItem("Contact");
let data7=sessionStorage.getItem("c1");
let data8=sessionStorage.getItem("c2");
let data9=sessionStorage.getItem("c3");
let var1=sessionStorage.getItem("gender");

flight_id-=1;


console.log(flight_id);



let content='';

function display_value(data)
{
    departure=new Date(data[flight_id].departTime);
    arrival=new Date(data[flight_id].ArrivalTime);

    content +=  `
    
    
    <div class="column">
            <div class="info" >
               <h3> Passenger Details </h3
               <h6>Name: ${data1} ${data2}</h6>
               <h4> Age: ${data3} </h4>
               <h4> Gender: ${var2} </h4>
               <h4> Email: ${data5}</h4>
               <h4> PhoneNumber: ${data6} </h4>
            </div>
     
            <div class="card" >
                <h3> Flight Details </h3>
                <h4> ${data[flight_id].flightNum}</h4>
                <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                <h4>Departure: <span>${departure.toUTCString()} </span></h4>
                <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
                <h4>Price: <span> &#8377;${data[flight_id].price}</h4>
            </div>

            <div style="display:none" class="art" id="newPassenger"  >
               <h3> New passenger</h3>
               <h4> Name: ${data7} ${data8}</h4>
               <h4> Age: ${data9} </h4>
               <h4> Gender: ${var1} </h4>
               
            </div>
        
    </div>
    
    
    
    


`

document.querySelector("#card-collection").innerHTML = content;
if(data7!=null) {
    document.getElementById('newPassenger').style = "display:true";
}
else{
    document.getElementById('newPassenger').style.display = none;

}
}

fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data));

// // var titlearray =["css","js","python","java","android","jquery","ruby"];
// // var descriptionarray =["css style","js program","python code","java objects","android program","jquery objects","ruby code"];
// //
// // var dynamic = document.querySelector('.container');
// // for (var i = 0; i < titlearray.length; i++) {
// //     var fetch = document.querySelector('.container').innerHTML;
// //     dynamic.innerHTML = `<div id="cards${i}" class="boxes">
// //       <div class="box-content">
// //         <h2>${titlearray[i]}</h2>
// //         <p>
// //           ${descriptionarray[i]}
// //         </p>
// //         <a class="showmore" href="#">ReadMore</a>
// //       </div>
// //     </div>` + fetch ;
// //     var bgimg = document.getElementById(`cards${i}`);
// //     bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
// // }


// $('#btngoaddacar').click(function () {
//     // select container
//     var dynamic = document.querySelector('#cars_container');
//
//     // get its inner html content
//     var fetch = document.querySelector('#cars_container').innerHTML;
//
//     //append the new code to the existing code
//     dynamic.innerHTML = fetch + `<div class="col"><div class="card">
//         <div class="card-header fw-semibold fst-italic">Ammo Cars</div>
//         <img src="../assets/images/13-min-32.jpg" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title fs-3">Suzuki Alto 2012</h5>
//                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
//                     additional
//                     content. This content is a little bit longer.</p>
//                 <ul class="list-group list-group-horizontal">
//                     <li class="list-group-item col-8">Make</li>
//                     <li class="list-group-item col-4">Dihatsu</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal">
//                     <li class="list-group-item col-8">YOM</li>
//                     <li class="list-group-item col-4">2015</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal">
//                     <li class="list-group-item col-8">Fuel Type</li>
//                     <li class="list-group-item col-4">Petrol</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal">
//                     <li class="list-group-item col-8">Transmission</li>
//                     <li class="list-group-item col-4">6 Speed</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal">
//                     <li class="list-group-item col-8">Mileage</li>
//                     <li class="list-group-item col-4">15kmpl approx</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal">
//                     <li class="list-group-item col-8">Passenger Count</li>
//                     <li class="list-group-item col-4">4</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal fw-bold">
//                     <li class="list-group-item list-group-item-primary col-8">Available for Rent</li>
//                     <li class="list-group-item list-group-item-primary col-4">20</li>
//                 </ul>
//             </div>
//     </div></div>`;
// });


// add car cards to the car container
function generateCarCard() {
    // select container
    var dynamic = document.querySelector('#cars_container');

    // get its inner html content
    var fetch = document.querySelector('#cars_container').innerHTML;

    //append the new code to the existing code
    dynamic.innerHTML = fetch + `<div class="col"><div class="card">
        <div class="card-header fw-semibold fst-italic">Ammo Cars</div>
        <img src="../assets/images/${name}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fs-3">${name}</h5>
                <p class="card-text">${name}</p>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-8">Make</li>
                    <li class="list-group-item col-4">${name}</li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-8">YOM</li>
                    <li class="list-group-item col-4">${name}</li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-8">Fuel Type</li>
                    <li class="list-group-item col-4">${name}</li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-8">Transmission</li>
                    <li class="list-group-item col-4">${name}</li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-8">Mileage</li>
                    <li class="list-group-item col-4">${name}</li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-8">Passenger Count</li>
                    <li class="list-group-item col-4">${name}</li>
                </ul>
                <ul class="list-group list-group-horizontal fw-bold">
                    <li class="list-group-item list-group-item-primary col-8">Available for Rent</li>
                    <li class="list-group-item list-group-item-primary col-4">${name}</li>
                </ul>
            </div>
    </div></div>`;
}



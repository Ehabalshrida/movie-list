'use strict';

let getform = document.getElementById('form');
let getpart2 = document.getElementById('part2');
let table = document.createEvent('table');
getpart2.appendChild(table);
function Movie (name, image ,release){
this.name = name;
this.image = image;
this.release = release ;
Movie.all.push(this);

}
Movie.all =[];
fx();


getform.addEventListener("submit",addnew)

function addnew (event){
event.preventDefault();
let name = event.target.name.value;
let image = './img/' + event.target.image.value.toLowerCase() + 'png';
let release = event.target.release.value ;

let newobj = new Movie (name, image, release);
localStorage.data = JSON.stringify(Book.all);
newobj.render();


}


Movie.prototype.render = function(){
    let row = document.createElement('tr');
    table.appendChild(row);

    let td1 = document.createElement('td');
    let span = document.createElement('span')
    row.appendChild(td1);
    td1.appendChild(span);
    span.textContent='x';

    let td2 = document.createElement('td');
    row.appendChild(td2);
   let image = document.createElement('img');
   image.src = this.image ;
   td2.appendChild(image);


   let td3 = document.createElement('td');
    row.appendChild(td3);
    td3.textContent = this.name;

    let td4 = document.createElement('td');
    row.appendChild(td4);
    td3.textContent = this.release;
    

}

function fx(){

    if(localStorage.data){
   let convert = JSON.parse(localStorage.data)
 let select;
   for(let i = 0 ; i < convert.length ; i++){
 select = new Movie (convert[i].name, convert[i].image, convert[i].release);
 select.render();
   }

    }
}

function clearall(){
    localStorage.clear();
    location.reload();
}

let x = document.querySelectorAll('span');

for( i = 0 ; i < x.length ; i++){
x[i].addEventListener("click", removeItem)

function removeItem (event){
    event.preventDefault();
    table.removeChild(x[i].parentElement.parentElement);
    Movie.all.splice(x[i].parentElement.parentElement.rowIndex -1 ,1);
}

}
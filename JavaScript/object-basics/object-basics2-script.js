let bandInfo;

// Add your code here
function Band(
  name,
  nationality,
  genre,
  members,
  formed,
  split = false,
  albums
) {
  this.name = name;
  this.nationality = nationality;
  this.genre = genre;
  this.members = members;
  this.formed = formed;
  this.split = split;
  this.albums = albums;
  this.getInfo = function () {
    return `${this.name}, ${this.nationality}, ${this.members} member(s), formed in ${this.formed}, split up in ${this.split}, favorite albums: ${this.albums}`;
  };
}

function Album(name, released) {
  this.name = name;
  this.released = released;
  this.toString = function () {
    return ` ${name}, released: ${released}`;
  };
}

myBand = new Band("Daft Punk", "French", "Electronic", 2, 1993, 2021, [
  new Album("Random Access Memories", 2013),
  new Album("Discovery", 2001),
]);
bandInfo = myBand.getInfo();
// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const fileNames = [];
for (let i = 1; i <= 5; i++) {
  let fileName = `pic${i}.jpg`;
  fileNames[i - 1] = fileName;
}
const fullFileNames = fileNames.map((fileName) => {
  return "./images/" + fileName;
});

/* Declaring the alternative text for each image file */

const imageObjects = [
  { fName: fileNames[0], altText: "Close-up shot of a human eye" },
  { fName: fileNames[1], altText: "Abstract art" },
  { fName: fileNames[2], altText: "Close-up shot of white and purple flowers" },
  {
    fName: fileNames[3],
    altText: "Photograph of ancient egyptian wall paintings",
  },
  {
    fName: fileNames[4],
    altText: "Photograph of a brown butterfly resting on a green leaf",
  },
];

/* Looping through images */
for (img of imageObjects) {
  const newImage = document.createElement("img");
  const fullFilePath = "./images/" + img.fName;
  newImage.setAttribute("src", fullFilePath);
  newImage.setAttribute("alt", img.altText);
  newImage.addEventListener("click", (e) => {
    displayedImage.src = fullFilePath;
  });
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (e) => {
  const curClass = btn.getAttribute("class");
  if (curClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

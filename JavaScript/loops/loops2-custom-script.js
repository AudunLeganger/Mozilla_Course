// const name = "Mustafa";
const formWrapper = document.createElement("div");
formWrapper.className = "formWrapper";

const nameInputLabel = document.createElement("label");
nameInputLabel.htmlFor = "nameInput";
nameInputLabel.textContent = "Phonebook search field";
nameInputLabel.style.marginRight = "1em";

const nameInput = document.createElement("input");
nameInput.className = "nameInput";
nameInput.id = "nameInput";
nameInput.type = "text";

const nameSearchButton = document.createElement("button");
nameSearchButton.textContent = "Search database";
nameSearchButton.style.margin = "0 1em 0 1em";

const section = document.querySelector("section");
section.appendChild(formWrapper);
formWrapper.appendChild(nameInputLabel);
formWrapper.appendChild(nameInput);
formWrapper.appendChild(nameSearchButton);

const para = document.createElement("p");
section.appendChild(para);

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

nameSearchButton.addEventListener("click", () => {
  const searchTerm = nameInput.value.toLowerCase();
  let found = false;
  for (let i = 0; i < phonebook.length; i++) {
    let contact = phonebook[i];
    if (contact.name.toLowerCase() === searchTerm) {
      para.textContent = `Name: ${contact.name} - Number: ${contact.number}`;
      found = true;
      break;
    }
  }

  if (!found) {
    para.textContent = `Entry \"${nameInput.value}\" not found in database.`;
  }
  nameInput.value = "";
  nameInput.focus();
});

// Add your code here
/*
let quit = false;
while (!quit) {
  

  // Don't edit the code below here!
  

}
*/

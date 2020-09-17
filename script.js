var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob" }];
var currentId = 0;

// Adds person to people array and displays the person in the list.
function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handlePeopleListClick() {
  // Use event delegation to handle when the user clicks "edit"
  // Only show the modal if user clicked on an "edit" button
  // Show the modal with info for the user to be edited.
  // ... YOUR CODE HERE
}

closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);

peopleListEl.addEventListener("click", handlePeopleListClick);

// Update user list and close modal when user clicks on saveBtn
// ... YOUR CODE HERE

// BONUS: register function to close the modal when the user clicks on the modal

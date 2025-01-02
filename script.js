// Select the "Add" button and notes container
const addButton = document.getElementById('add');
const notesContainer = document.querySelector('.notes-container');

// Function to create a new note
function addNewNote() {
  // Create a new div for the note
  const note = document.createElement('div');
  note.classList.add('note');

  // Add the note's HTML structure
  note.innerHTML = `
    <div class="toolbar">
      <button class="bold"><i class="fas fa-bold"></i></button>
      <button class="italic"><i class="fas fa-italic"></i></button>
      <button class="underline"><i class="fas fa-underline"></i></button>
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="editable" contenteditable="true"></div>
  `;

  // Add event listeners for bold, italic, and underline actions
  const boldButton = note.querySelector('.bold');
  const italicButton = note.querySelector('.italic');
  const underlineButton = note.querySelector('.underline');
  const editableDiv = note.querySelector('.editable');
  const deleteButton = note.querySelector('.delete');
  const editButton = note.querySelector('.edit');

  // Bold button functionality
  boldButton.addEventListener('click', () => {
    document.execCommand('bold');
    editableDiv.focus();
  });

  // Italic button functionality
  italicButton.addEventListener('click', () => {
    document.execCommand('italic');
    editableDiv.focus();
  });

  // Underline button functionality
  underlineButton.addEventListener('click', () => {
    document.execCommand('underline');
    editableDiv.focus();
  });

  // Edit Button: Toggle editable state of the editable div
  editButton.addEventListener('click', () => {
    const isDisabled = editableDiv.isContentEditable;
    editableDiv.contentEditable = !isDisabled;
    editButton.innerHTML = editableDiv.isContentEditable
      ? '<i class="fas fa-save"></i>'
      : '<i class="fas fa-edit"></i>';
  });

  // Delete Button: Remove the note
  deleteButton.addEventListener('click', () => note.remove());

  // Append the new note to the container
  notesContainer.appendChild(note);
}

// Add event listener to the "Add" button
addButton.addEventListener('click', addNewNote);

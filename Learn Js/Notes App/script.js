// Select the key elements from the HTML
const noteText = document.getElementById('noteText');
const saveBtn = document.getElementById('saveBtn');
const notesContainer = document.getElementById('notesContainer');

// Step 1: Load existing notes from localStorage when the page loads
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Function to display all notes on the page
function displayNotes() {
  notesContainer.innerHTML = ''; // Clear previous notes
  notes.forEach((note, index) => {
    // Create a new div for each note
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    // Create a paragraph to display the note text
    const noteTextPara = document.createElement('p');
    noteTextPara.textContent = note;

    // Create Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = () => editNote(index);

    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deleteNote(index);

    // Append everything to the note div
    noteDiv.appendChild(noteTextPara);
    noteDiv.appendChild(editBtn);
    noteDiv.appendChild(deleteBtn);

    // Add the note div to the notes container
    notesContainer.appendChild(noteDiv);
  });
}

// Step 2: Function to save a new note
function saveNote() {
  const text = noteText.value.trim(); // Remove extra spaces

  // If the note text is empty, do nothing
  if (!text) {
    alert('Please write something before saving!');
    return;
  }

  // Add the new note to the array and save to localStorage
  notes.push(text);
  localStorage.setItem('notes', JSON.stringify(notes));

  // Clear the text area and refresh the notes display
  noteText.value = '';
  displayNotes();
}

// Step 3: Function to edit a note
function editNote(index) {
  const newText = prompt('Edit your note:', notes[index]);
  if (newText !== null && newText.trim() !== '') {
    notes[index] = newText.trim();
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
  }
}

// Step 4: Function to delete a note
function deleteNote(index) {
  if (confirm('Are you sure you want to delete this note?')) {
    notes.splice(index, 1); // Remove from array
    localStorage.setItem('notes', JSON.stringify(notes)); // Update storage
    displayNotes(); // Refresh
  }
}

// Step 5: Add event listener for the save button
saveBtn.addEventListener('click', saveNote);

// Step 6: Display any saved notes when the page loads
displayNotes();

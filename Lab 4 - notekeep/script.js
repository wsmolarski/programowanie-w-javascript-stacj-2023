document.addEventListener('DOMContentLoaded', () => {
    loadNotes()
})

function addNote() {
    const title = document.getElementById('title').value
    const content = document.getElementById('content').value
    const color = document.getElementById('color').value
    const pin = document.getElementById('pin').checked
    const date = new Date().toLocaleString()

    const note = {
        title,
        content,
        color,
        pin,
        date,
    }

    let notes = JSON.parse(localStorage.getItem('notes')) || []

    if (pin) {
        notes.unshift(note)
    } else {
        notes.push(note)
    }

    localStorage.setItem('notes', JSON.stringify(notes))

    loadNotes()
    resetForm()
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes')) || []
    notes.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notes))

    loadNotes()
}

function editNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes')) || []
    const noteToEdit = notes[index]

    document.getElementById('editTitle').value = noteToEdit.title
    document.getElementById('editContent').value = noteToEdit.content
    document.getElementById('editColor').value = noteToEdit.color
    document.getElementById('editPin').checked = noteToEdit.pin

    document.getElementById('editModal').style.display = 'block'

    document.getElementById('saveEditBtn').addEventListener('click', function() {

        const editedTitle = document.getElementById('editTitle').value
        const editedContent = document.getElementById('editContent').value
        const editedColor = document.getElementById('editColor').value
        const editedPin = document.getElementById('editPin').checked

        noteToEdit.title = editedTitle
        noteToEdit.content = editedContent
        noteToEdit.color = editedColor
        noteToEdit.pin = editedPin

        if (editedPin) {
            notes.splice(index, 1)
            notes.unshift(noteToEdit)
        }

        localStorage.setItem('notes', JSON.stringify(notes))

        loadNotes()

        document.getElementById('editModal').style.display = 'none'
    })

    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        document.getElementById('editModal').style.display = 'none'
    })
}

function loadNotes() {
    const notesList = document.getElementById('notesList')
    notesList.innerHTML = ''

    let notes = JSON.parse(localStorage.getItem('notes')) || []

    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div')
        noteDiv.className = 'note'
        noteDiv.style.backgroundColor = note.color

        const titleDiv = document.createElement('div')
        titleDiv.className = 'noteTitle'
        titleDiv.innerText = `${note.title} - ${note.date}`

        const contentDiv = document.createElement('div')
        contentDiv.innerText = note.content

        const optionsDiv = document.createElement('div')
        optionsDiv.className = 'noteOptions'

        const deleteButton = document.createElement('button')
        deleteButton.className = 'deleteBtn'
        deleteButton.innerText = 'Delete'
        deleteButton.onclick = () => deleteNote(index)

        const editButton = document.createElement('button')
        editButton.className = 'editBtn'
        editButton.innerText = 'Edit'
        editButton.onclick = () => editNote(index)

        optionsDiv.appendChild(deleteButton)
        optionsDiv.appendChild(editButton)

        noteDiv.appendChild(titleDiv)
        noteDiv.appendChild(contentDiv)
        noteDiv.appendChild(optionsDiv)

        notesList.appendChild(noteDiv)
    })
}

function resetForm() {
    document.getElementById('title').value = ''
    document.getElementById('content').value = ''
    document.getElementById('color').value = '#ffffff'
    document.getElementById('pin').checked = false
}
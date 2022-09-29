const noteArea = document.getElementById("noteArea");
// const noteTitle = document.getElementById("noteTitle");
// const noteText = document.getElementById("noteText");

// for when a user enters a note
noteArea
    .addEventListener('submit', (e) => {
        e.preventDefault();

        //geting note input values
        let noteTitle = document.getElementById('noteTitle').value;
        let noteText = docutment.getElementById('noteText').value; 
        
        // creating object to store input values
        const newNote = {
            noteTitle,
            noteText,
        };
        fetch('/notes', {
            method: 'POST',
            headers: {
                'Content-Type':'appication/json',
            },
            body: JSON.stringify(newNote),
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.status);
            noteTitle = '';
            noteText = '';
        });
    })
    .catch((error) => {
    console.error('Error:', error);
    });
// Retrieve the contactList ul element
const contactList = document.getElementById('contactList');

// Retrieve the contactForm and add submit event listener
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create contact object
    const contact = {
        name: name,
        email: email
    };

    // Save contact to localStorage
    saveContact(contact);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    // Refresh the contact list display
    displayContacts();
});

// Function to save contact to localStorage
function saveContact(contact) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Function to display contacts from localStorage
function displayContacts() {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contactList.innerHTML = ''; // Clear existing list

    contacts.forEach((contact, index) => {
        // Create li element for each contact
        const li = document.createElement('li');
        li.innerHTML = `<span>${contact.name}</span>: ${contact.email}
                        <button onclick="deleteContact(${index})">Delete</button>
                        <button onclick="editContact(${index})">Edit</button>`;
        contactList.appendChild(li);
    });
}

// Function to delete a contact from localStorage
function deleteContact(index) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.splice(index, 1); // Remove the contact at index
    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts(); // Refresh the contact list display
}

// Function to edit a contact (not fully implemented in this example)
function editContact(index) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    // Example: You can implement editing functionality here
    // For simplicity, edit directly or implement another form for editing
}

// Initial display of contacts when the page loads
displayContacts();

//Den sista sidan ska ha valfritt innehåll, men gärna kopplat till din projektidé. Exempelvis dina kontaktuppgifter.

let content = document.getElementById('content');
const btnContacts = document.getElementById('btnContacts');

function showContactInfo() {
    console.log("ContactInfo");
    content.innerHTML = "Info om kontakter";
}

btnContacts.addEventListener('click', showContactInfo);
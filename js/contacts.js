let content = document.getElementById('content');

export function showContactInfo() {
    content.innerHTML = "";
    content.insertAdjacentHTML('afterbegin', '<div id="contactdiv"><h2>Mina kontaktuppgifter</h2></div>');
    let contactDiv = document.getElementById('contactdiv');
    contactDiv.insertAdjacentHTML('beforeend', '<p>Namn : Rasmus Lind <br> \
    Email: Rasmusnyberglind@hotmail.com <br>\</p>');
}
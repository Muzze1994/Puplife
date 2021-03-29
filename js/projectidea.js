//En annan sida ska i beskriva din projektidé - den prototyp du vill bygga i kursen.

let content = document.getElementById('content');
const btnProject = document.getElementById('btnProjectIdea');

function showProjectIdea() {
    console.log("Projectidea");
    content.innerHTML = "Info om projekt";
}

btnProject.addEventListener('click', showProjectIdea);
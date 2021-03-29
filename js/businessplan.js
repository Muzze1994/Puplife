//En av vyerna ska beskriva i korthet din affärsplan du skapade i kursen Affärsmannaskap för IT.

let content = document.getElementById('content');
const btnBusiness = document.getElementById('btnBusinessPlan');

function showBusinessPlan() {
    console.log("Business Plan");
    content.innerHTML = "Info om affärsplan";
}

btnBusiness.addEventListener('click', showBusinessPlan);
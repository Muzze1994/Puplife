let content = document.getElementById('content');

export function showBusinessPlan() {
    content.innerHTML = "";
    content.insertAdjacentHTML('afterbegin', '<div id="businessdiv"><h2>Min affärsplan</h2></div>');
    let businessDiv = document.getElementById('businessdiv');
    businessDiv.insertAdjacentHTML('beforeend', '<p>I min affärsplan beskrev jag syfte, bakgrund och gjorde en sammanfattning på hela affärsplanen.\
    Jag skapade en nulägesanalys (SWOT) för att ta reda på styrkor, möjligheter, svagheter och hot för att motverka så bra som möjligt.<br> \
    Jag har även skapat en intressentanalys för att reda på kärn-, primär- och sekundärintressenter. \
    Finns även en budgetkalykl, ett gantt-schema och en affärsplan med WBS, riskanalys och riskhanteringsplan och kommunkationsplan</p>');
}
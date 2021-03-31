let content = document.getElementById('content');

export function showProjectIdea() {
    content.innerHTML = "";
    content.insertAdjacentHTML('afterbegin', '<div id="projectdiv"><h2>Min projektidé</h2></div>');
    document.getElementById('projectdiv').insertAdjacentHTML('beforeend', '<p>I den här kursen önskar jag bygga en valpapp med fokus på forum för valpar. \
    Den ska även ha en webbshop, profil för valpen och en informationsdel. Protoypen jag tänker bygga i den här kursen kommer som sagt fokuseras mest på forumsdelen och även profilen för valpen. <br> \
    Tanken är att man ha 4 knappar att trycka på så man kommer till fyra olika delar i appen. I profilen ska man kunna följa valpens åldrande och vad den kan göra beroende på ålder. \
    Det ska även finnas sparade foruminlägg, förslag på aktiviteter och vad som händer med valpen under denna perioden. \
    Informationsdelen ska ha information om allt möjligt som man måste veta när man har en valp och även ett sätta att söka på olika saker man vill ha reda på. \
    Webbshop med olika artiklar för hundar som foder, leksaker, tillbehör osv. \
    Forumet ska vara kopplat till veterinär.se för att kunna ha ett redan aktikvt forum vilket gör att det inte krävs för många användare för att börja använda forumsdelen.</p>');
}
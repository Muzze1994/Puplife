
För att kunna använda sidan behöver du köra npm install för att få ner alla paket som krävs för applikationen. När detta är gjort använder du npm start för att transpilera filerna. Sedan står det vilken localhost servern körs på och kan sedan kopiera den in i browsern eller ctrl + klick på länken.

Just nu har jag ändrat så att applikationen liknar det som i en mobil-app. Knapparna har gjorts om till ikoner och flyttats till footer. Kör man inte applikationen som från en telefon så ser det inte speciellt bra ut. 

My profile har ändrats så att man kan logga in och ut genom att bara skriva in ett användarnamn. Än så länge kan man inte skapa fler användare utan det är bara för att kolla hur det ska se ut. Har även en lista med hårdkodade hundar för att visa hur det är tänkt att vara i framtiden. Trycker man på en hund så ska information komma upp om hunden samt bilder och aktiveter man ska kunna utföra.
På forum så har jag ändrat så att man anropar ett api för att antingen skapa ett inlägg eller få ut alla inlägg. Trycker man sedan på en titel så kommer man till det inlägget med ett hårdkodat svar.
Man måste vara inloggad för att kunna se my profile och forum. När man skapar ett inlägg så blir det användarnamnet man använde för att logga in den som postar. Sedan sätts automatiskt vilken tid inlägget skapades.
Webshop och information består just nu bara av statiska divar med respektive namn.

Jag använder router-react för att lagra data i URL i mina 4 komponenter Information, Forum, Webshop och My-Profile.

Externa bibliotek:

Jag använder mig av axios för att det förenklar asynkrona HTTP-förfrågningar och utför CRUD-operationer på ett mycket lättare sätt.
React-router för att navigera mellan olika vyer i min applikation, den håller alltså applikationens UI och URLen synkroniserad. Detta gör att man kan refresha sidan utan att allt renderas om.

Tjänster:

Jag skapade en caller för https://jsonplaceholder.typicode.com/todos i min Logic.js som man sedan kan importera för att inte skriva ut urlen flera gånger. Jag importerar den sedan i min Todos.js för att kalla på den genom att trycka på en knapp som jag skapar i rendern. Jag har ett input fält där man kan skriva 1-200 för att få ut en specifik todo eller lämna det blankt för att få ut alla. Jag har separerat logiken för att hämta urlen från komponenten där jag anropar vad jag vill ha ut för att avgränsa från applikationens UI. Detta för att göra det lättare att återanvända kod och lättare se vart allt ligger.

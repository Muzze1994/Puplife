
För att kunna använda sidan behöver du köra npm install för att få ner alla paket som krävs för applikationen. När detta är gjort använder du npm start för att transpilera filerna. Sedan står det vilken localhost servern körs på och kan sedan kopiera den in i browsern eller ctrl + klick på länken.

Sedan har du fyra knappar du kan trycka på. På information kan du just nu testa att GETa alla todos i en json placeholder eller välja en enskild todo genom att skriva in ett id mellan 1-200.
Forumsdelen kan du skapa ett extremt enkelt forumsinlägg eller logga in med enbart ett användarnamn som använder sig av localstorage för att spara informationen.
På My Profile kan du just nu bara logga in med ett användarnamn.
Webshop består hittils bara av en statisk div med Webshop.

Jag använder router-react för att lagra data i URL i mina 4 komponenter Information, Forum, Webshop och My-Profile.

Externa bibliotek:

Jag använder mig av axios för att det förenklar asynkrona HTTP-förfrågningar och utför CRUD-operationer på ett mycket lättare sätt.
React-router för att navigera mellan olika vyer i min applikation, den håller alltså applikationens UI och URLen synkroniserad. Detta gör att man kan refresha sidan utan att allt renderas om.

Tjänster:

Jag skapade en caller för https://jsonplaceholder.typicode.com/todos i min Logic.js som man sedan kan importera för att inte skriva ut urlen flera gånger. Jag importerar den sedan i min Todos.js för att kalla på den genom att trycka på en knapp som jag skapar i rendern. Jag har ett input fält där man kan skriva 1-200 för att få ut en specifik todo eller lämna det blankt för att få ut alla. Jag har separerat logiken för att hämta urlen från komponenten där jag anropar vad jag vill ha ut för att avgränsa från applikationens UI. Detta för att göra det lättare att återanvända kod och lättare se vart allt ligger.

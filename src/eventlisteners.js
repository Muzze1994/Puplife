import { showBusinessPlan } from './js/businessplan.js';
import { showContactInfo } from './js/contacts.js';
import { showProjectIdea } from './js/projectidea.js';

const btnBusiness = document.getElementById('btnBusinessPlan');
btnBusiness.addEventListener('click', showBusinessPlan);

const btnContacts = document.getElementById('btnContacts');
btnContacts.addEventListener('click', showContactInfo);

const btnProject = document.getElementById('btnProjectIdea');
btnProject.addEventListener('click', showProjectIdea);
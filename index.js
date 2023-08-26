import { insertDocument, pickDoc } from './modules/items.js';
import * as dateTime from './modules/time.js';

const showTimeDate = document.querySelector('.time');
showTimeDate.innerHTML = `${dateTime.currentDateTime} ${dateTime.hour}:${dateTime.min}`;

document.querySelector('.insertDcmnts').addEventListener('click', () => {
  const documenttitle = document.getElementById('documenttitle').value;
  const writer = document.getElementById('writer').value;
  insertDocument(documenttitle, writer);
});

const documentCatalogue = document.querySelector('.insertbk');
const sendMessage = document.querySelector('.address-dets');
documentCatalogue.style.display = 'none';
sendMessage.style.display = 'none';

pickDoc();

const bookList = document.querySelector('.navigation-list');
const seeBooks = document.querySelector('.show-bks');

bookList.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'Books') {
    pickDoc();
    documentCatalogue.style.display = 'none';
    sendMessage.style.display = 'none';
    seeBooks.style.display = 'block';
  }
  if (e.target.innerHTML === 'Add Book') {
    documentCatalogue.style.display = 'block';
    sendMessage.style.display = 'none';
    seeBooks.style.display = 'none';
  }
  if (e.target.innerHTML === 'Contact Us') {
    documentCatalogue.style.display = 'none';
    sendMessage.style.display = 'block';
    seeBooks.style.display = 'none';
  }
});

import { fetchCatalogue, updtCatalogue, discardCatalogue } from './itemManager.js';

export default class Book {
  constructor(documenttitle, writer) {
    this.documenttitle = documenttitle;
    this.writer = writer;
  }
}

export const pickDoc = () => {
  const bookStorage = fetchCatalogue();
  let markup = '';

  const removeItem = () => {
    const deleteElement = [...document.getElementsByClassName('eraseItem')];
    deleteElement.forEach((item) => {
      item.addEventListener('click', (e) => {
        const index = parseInt(e.target.id, 10);
        discardCatalogue(index);
        pickDoc();
      });
    });
  };

  bookStorage.forEach((item, i) => {
    markup += `<div class="showRw">
      <p>"${item.documenttitle}" by ${item.writer}</p>  
      <button type="button" class="eraseItem" id=${i}>Remove</button>
    </div>
    <hr class="divider"/>`;
  });

  document.querySelector('.all').innerHTML = markup;
  removeItem();
};

export const insertDocument = (documenttitle, writer) => {
  const message = document.querySelector('.showMistake');

  if (documenttitle === '') {
    message.innerHTML = 'Insert title of book';
    message.style.color = 'darkcyan';
    message.style.fontWeight = 'bold';
    setTimeout(() => {
      message.innerHTML = '';
    }, 3000);
    return;
  }

  if (writer === '') {
    message.innerHTML = 'Insert author of book';
    message.style.color = 'darkcyan';
    message.style.fontWeight = 'bold';
    setTimeout(() => {
      message.innerHTML = '';
    }, 3000);
    return;
  }

  const newBook = new Book(documenttitle, writer);
  updtCatalogue(newBook);
  pickDoc();
  document.querySelector('.insertForm').reset();
};

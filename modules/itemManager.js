const bookStorage = JSON.parse(localStorage.getItem('documentCtlg')) || [];

export const fetchCatalogue = () => bookStorage;

export const updtCatalogue = (newBook) => {
  bookStorage.push(newBook);
  localStorage.setItem('documentCtlg', JSON.stringify(bookStorage));
};

export const discardCatalogue = (index) => {
  bookStorage.splice(index, 1);
  localStorage.setItem('documentCtlg', JSON.stringify(bookStorage));
};

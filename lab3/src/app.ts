import {Book, User, IBook, IUser} from './models';
class App {}

document.addEventListener('DOMContentLoaded', () => {
    new App();
    const addBook = document.getElementById('addBook') as HTMLButtonElement;
    const addUser = document.getElementById('addUser') as HTMLButtonElement;

    //Валідація полів для вводу після натискання на кнопку Додати
    const validation = new Validation();
    addBook.addEventListener('click', () => {
        event?.preventDefault();
        validation.checkBookFields();
    });
    addUser.addEventListener('click', () => {
        event?.preventDefault();
        validation.checkUserFields();
    });
});

class Validation {
    bookName = document.getElementById('bookName') as HTMLButtonElement;
    author = document.getElementById('author') as HTMLButtonElement;
    yearOfPublication = document.getElementById(
        'yearOfPublication',
    ) as HTMLButtonElement;

    userName = document.getElementById('userName') as HTMLButtonElement;
    email = document.getElementById('email') as HTMLButtonElement;

    public checkBookFields() {
        //Перевірка поля назва

        const bookNameLabel = document.getElementById('bookNameLabel');
        if (bookNameLabel != null) {
            if (this.bookName.value === '') {
                bookNameLabel.style.display = 'block';
            } else {
                bookNameLabel.style.display = 'none';
            }
        }

        //Перевірка поля автор

        const bookAuthorLabel = document.getElementById('bookAuthorLabel');
        if (bookAuthorLabel != null) {
            if (this.author.value === '') {
                bookAuthorLabel.style.display = 'block';
            } else {
                bookAuthorLabel.style.display = 'none';
            }
        }

        //Перевірка поля рік видання

        const bookYearLabel = document.getElementById('bookYearLabel');
        if (bookYearLabel != null) {
            if (this.yearOfPublication.value === '') {
                bookYearLabel.style.display = 'block';
            } else {
                bookYearLabel.style.display = 'none';
            }
        }
    }

    checkUserFields() {
        //Перевірка поля ім'я користувача

        const userNameLabel = document.getElementById('userNameLabel');
        if (userNameLabel != null) {
            if (this.userName.value === '') {
                userNameLabel.style.display = 'block';
            } else {
                userNameLabel.style.display = 'none';
            }
        }

        //Перевірка поля email

        const emailLabel = document.getElementById('emailLabel');
        if (emailLabel != null) {
            if (this.email.value === '') {
                emailLabel.style.display = 'block';
            } else {
                emailLabel.style.display = 'none';
            }
        }
    }
}

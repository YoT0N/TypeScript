export class Validation {
    bookname = document.getElementById('bookName');
    author = document.getElementById('author');
    yearOfPublication = document.getElementById('yearOfPublication');
    checkBookFields() {
        if (this.bookname.value === '') {
            const div = document.getElementById('bookNameDiv');
            const textNode = document.createTextNode('Текст прикладу');
            div.appendChild(textNode);
        }
    }
}

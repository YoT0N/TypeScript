export class Validation {
    bookname = document.getElementById('bookName') as HTMLButtonElement;
    author = document.getElementById('author') as HTMLButtonElement;
    yearOfPublication = document.getElementById(
        'yearOfPublication',
    ) as HTMLButtonElement;

    public checkBookFields() {
        if (this.bookname.value === '') {
            const div = document.getElementById(
                'bookNameDiv',
            ) as HTMLButtonElement;
            const textNode = document.createTextNode('Текст прикладу');
            div.appendChild(textNode);
        }
    }
}

var Validation = (function () {
    function Validation() {
        this.bookname = document.getElementById('bookName');
        this.author = document.getElementById('author');
        this.yearOfPublication = document.getElementById('yearOfPublication');
    }
    Validation.prototype.checkBookFields = function () {
        if (this.bookname.value === '') {
            var div = document.getElementById('bookNameDiv');
            var textNode = document.createTextNode('Текст прикладу');
            div.appendChild(textNode);
        }
    };
    return Validation;
}());
export { Validation };
//# sourceMappingURL=validation.js.map
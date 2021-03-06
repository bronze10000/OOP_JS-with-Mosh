// exercise for polymorphism

function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}
    // in prototype:
HtmlElement.prototype.focus = function(){
        console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.item.push(item);
    },
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    this.render = function() {
        return `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </select>`;
    }
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;

    this.render = function(){
        return `<img src="${this.src}" />`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

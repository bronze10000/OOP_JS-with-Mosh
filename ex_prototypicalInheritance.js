// exercise for prototypical inheritance
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
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
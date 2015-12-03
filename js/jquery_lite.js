function(){

  var $l = window.$l  = function(arg){
    if (typeof arg === 'string'){
       queryResult = [].slice.call(document.querySelectorAll(arg));
       return new DomNodeCollection(queryResult);
    }

    if (arg instanceof HTMLElement){
      return new DomNodeCollection)([arg]);
    }

  };

  var DomNodeCollection = function(htmlElements){
    this.htmlElements = htmlElements;
  };

  DomNodeCollection.prototype.html = function(arg){
    if (typeof arg === 'undefined'){
      return this.htmlElements[0].innerHTML;
    } else {
      this.htmlElements.forEach(function(el) {
        el.innerHTML = arg;
      });
    }
  };

  DomNodeCollection.prototype.empty = function () {
    this.htmlElements.forEach(function(el) {
      el.innerHTML = "";
    });
  };

  DomNodeCollection.prototype.append = function (arg) {
    if (arg instanceof HTMLElement) {
      this.htmlElements.forEach(function(el) {
        el.appendChild(arg);
      });
    } else if (arg instanceof DomNodeCollection) {
      this.htmlElements.forEach(function(el) {
        arg.forEach(function(el2){
          el.appendChild(el2);
        });
      });
    } else if (typeof arg === "string") {
      this.htmlElements.forEach(function(el){
        var newElement = document.createElement(arg);
        el.appendChild(newElement);
      })
    }
  };

}();

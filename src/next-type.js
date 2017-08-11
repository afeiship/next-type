(function () {

  var global = global || window || self || this;

  var nx = global.nx || require('next-js-core2');
  var toString = nx.class2type.toString;

  nx.type = function (inObj) {
    if (inObj && nx.isFunction(inObj.type)) {
      return inObj.type();
    }
    return inObj == null ? String(inObj) :
      nx.class2type[toString.call(inObj)] || 'object';
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxType;
  }

}());

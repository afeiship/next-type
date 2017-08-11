(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var class2type = {};
  var toString = class2type.toString;
  var javascriptType = 'Boolean Number String Function Array Date RegExp Object Error';

  //populate class2type map:
  javascriptType.split(' ').forEach(function (inName) {
    class2type['[object ' + inName + ']'] = inName.toLowerCase()
  });

  nx.type = function (inObj) {
    if (inObj && nx.isFunction(inObj.type)) {
      return inObj.type();
    }
    return inObj == null ? String(inObj) :
      class2type[toString.call(inObj)] || 'object';
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.type;
  }

}());

(function() {
'use strict';

_.mixin({ 'deepDelete': deepDelete });
function deepDelete(obj, keys) {
  var property,
      properties = _.isArray(keys) ? keys : keys.split('.');

  for(var i=0, len=properties.length; i<len; i++) {
    property = properties[i];
    if(i === len-1) {
      delete obj[property];
      break;
    } else if(_.isObject(obj) && property in obj){
      obj = obj[property];
    }
  }
}

_.mixin({ 'deepRemoveEmpty': deepRemoveEmpty });
function deepRemoveEmpty(root, undef) {
  var removeProps;
  removeProps = function (obj, key, parent) {      
    var i, value, isFullyEmpty = true;
    if (_.isArray(obj)) {
      //.length not cached on purpose
      for (i = 0; i < obj.length; ++i) {
        value = obj[i];
        if (isObject(value)) {
          removeProps(value, i, obj);
          isFullyEmpty = false;
        } else if (value === "" || value === undefined) {
          obj.splice(i--, 1);
        } else {
          isFullyEmpty = false;
        }
      }
    } else {
      for (i in obj) {
        value = obj[i];
        if (_.isObject(value)) {
          removeProps(value, i, obj);
          isFullyEmpty = false;
        } else if (value === "" || value === undef) {
          delete obj[i];
        } else {
          isFullyEmpty = false;
        }
      }
    }
    if (key !== undefined && isFullyEmpty) {
      delete parent[key];
      removeProps(root);
    }
  }

  removeProps(root);
  return root;
};


angular.module('Scribe')
.factory('_', ['$window',
  function($window) {
    return $window._;
  }
]);

})();

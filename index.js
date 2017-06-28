angular.module('bodymovin', []).factory('bodyMovinFactory', function($window){
    if($window.bodymovin){
      //Delete bodymovin from window so it's not globally accessible.
      //  We can still get at it through _thirdParty however, more on why later
      $window._thirdParty = $window._thirdParty || {};
      $window._thirdParty.bodymovin = $window.bodymovin;
      try { delete $window.bodymovin; } catch (e) {$window.bodymovin = undefined;
      /*<IE8 doesn't do delete of window consts, make undefined if delete error*/}
    }
    const bodymovin = $window._thirdParty.bodymovin;
    return bodymovin;
}).factory('fancyMovin',['bodyMovinFactory', bodymovin => bodymovin]);

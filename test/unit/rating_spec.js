'use strict';

describe('Components: rating', function() {
  var $scope, element;

  beforeEach(module('Scribe'));

  // describe('sb-rating-select', function() {
  //   beforeEach(inject(function($compile, $rootScope) {
  //     $scope = $rootScope;
  //     element = angular.element('<sb-rating-select></sb-rating-select>');
  //     $compile(element)($rootScope)
  //   }));

  //   it('should have 5 rating options', function() {
  //     //$scope.$digest();
  //     //expect(element.html()).toBe("4");
  //   });
  // });
  
  describe('sb-rating-item', function() {
    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      element = angular.element('<sb-rating-select></sb-rating-select>');
      $compile(element)($rootScope);
    }));

    it('', function() {
      $scope.$digest();
      expect(element.html()).toBe("4");
    });
  });
});

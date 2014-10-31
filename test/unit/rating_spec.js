describe('Components: rating', function() {
  beforeEach(module('Scribe'));

  beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      element = angular.element('<sb-rating-select>></sb-rating-select>');
      $compile(element)($rootScope)
  }));

  it('should have 5 rating options', function() {
    $scope.$digest();
    expect(element.html()).toBe("4");
  });
});

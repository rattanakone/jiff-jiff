'use strict';

describe('Controller: RandomCtrl', function () {

  // load the controller's module
  beforeEach(module('jiffJiffApp'));

  var RandomCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RandomCtrl = $controller('RandomCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RandomCtrl.awesomeThings.length).toBe(3);
  });
});

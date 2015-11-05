'use strict';

describe('Service: jiffAPI', function () {

  // load the service's module
  beforeEach(module('jiffJiffApp'));

  // instantiate service
  var jiffAPI;
  beforeEach(inject(function (_jiffAPI_) {
    jiffAPI = _jiffAPI_;
  }));

  it('should do something', function () {
    expect(!!jiffAPI).toBe(true);
  });

});

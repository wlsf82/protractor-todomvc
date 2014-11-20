// spec.js

var todomvcHelper = require('./todomvc.helper');
var ProtractorPerf = require('protractor-perf');

describe('angularjs todo mvc homepage', function() {
  var perf = new ProtractorPerf(protractor);
  it('should have a title', function() {
    browser.get('http://todomvc.com/examples/angularjs/#/');
    perf.start();
    expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
    perf.stop();

    if (perf.isEnabled) {
      expect(perf.getStats('meanFrameTime')).toBeLessThan(30);
    }
  });

  todomvcHelper.addTodoItem('Teste de digitação em campo texto');

  it('should be able to add items in the to do list', function() {
    var todoLabel = element(by.css('.view .ng-binding'));
    perf.start();
    expect(todoLabel.getText()).toEqual(text);
    perf.stop();

    if (perf.isEnabled) {
      expect(perf.getStats('meanFrameTime')).toBeLessThan(30);
    }
  });

  it('should be able to clean the to do list', function() {
    var toogleAllCheckBox = element(by.id('toggle-all'));
    var clearCompletedButton = element(by.id('clear-completed'));
    var viewDiv = element(by.className('view'));
    perf.start();
    toogleAllCheckBox.click();
    clearCompletedButton.click();
    expect(viewDiv.isPresent()).toBe(false);
    perf.stop();

    if (perf.isEnabled) {
      expect(perf.getStats('meanFrameTime')).toBeLessThan(30);
    }
  });

  todomvcHelper.addTodoItem('teste');

  it('should be able to complete items and then add them to the completed list', function() {
    var completedLink = element.all(by.css('a[ng-class="{selected: status == \'completed\'}"')).last();
    var toggleAll = element(by.id('toggle-all'));
    var completedList = element(by.css('#todo-list .completed .view .ng-binding'));
    perf.start();
    toggleAll.click();
    completedLink.click();
    expect(completedList.getText()).toContain(text);
    perf.stop();

    if (perf.isEnabled) {
      expect(perf.getStats('meanFrameTime')).toBeLessThan(30);
    }
  });

});

// spec.js

var todomvcHelper = require('./todomvc.helper');

describe('angularjs todo mvc homepage', function() {

  it('should have a title', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://todomvc.com/examples/emberjs/');
    expect(browser.getTitle()).toEqual('ember.js • TodoMVC');
  });

  todomvcHelper.addTodoItem('Teste de digitação em campo texto');

  it('should be able to add items in the to do list', function() {
    browser.ignoreSynchronization = true;
    var todoLabel = element(by.css('#todo-list li label'));
    expect(todoLabel.getText()).toEqual(text);
  });

  it('should be able to clean the to do list', function() {
    browser.ignoreSynchronization = true;
    var toogleAllCheckBox = element(by.id('toggle-all'));
    var clearCompletedButton = element(by.id('clear-completed'));
    var viewDiv = element(by.className('view'));
    toogleAllCheckBox.click();
    clearCompletedButton.click();
    expect(viewDiv.isPresent()).toBe(false);
  });

  todomvcHelper.addTodoItem('teste');

  it('should be able to complete items and then add them to the completed list', function() {
    browser.ignoreSynchronization = true;
    var completedLink = element(by.css('.selected'));
    var toggleAll = element(by.id('toggle-all'));
    var completedList = element(by.css('#todo-list .completed label'));
    toggleAll.click();
    completedLink.click();
    expect(completedList.getText()).toContain(text);
  });

});

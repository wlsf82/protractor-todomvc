// spec.js

var todomvcHelper = require('./todomvc.helper');
var ProtractorPerf = require('protractor-perf');
var fs = require('fs');

describe('angularjs todo mvc homepage', function() {

  function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

  //TODO criar helper para tirar screenshots.
  //TODO refatorar path das screenshots para que a numeração seja incrementada automaticamente

  var perf = new ProtractorPerf(protractor);
  it('should have a title', function() {
    browser.get('http://todomvc.com/examples/angularjs/#/');
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'tmp/screenshots/exception-0.png');
    });
    perf.start();
    expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
    perf.stop();

    if (perf.isEnabled) {
      expect(perf.getStats('meanFrameTime')).toBeLessThan(30);
    }
  });

  todomvcHelper.verifyHeaderElementText('h3', 'AngularJS');
  todomvcHelper.verifyHeaderElementText('h1', 'todos');

  it('should verify if the main web elements are present in the page', function() {
    var newTodo = element(by.id('new-todo'));
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'tmp/screenshots/exception-1.png');
    });
    expect(newTodo.isPresent()).toBe(true);
  });

  todomvcHelper.addTodoItem('Teste de digitação em campo texto');

  it('should be able to add items in the to do list', function() {
    var todoLabel = element(by.css('.view .ng-binding'));
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'tmp/screenshots/exception-2.png');
    });
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
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'tmp/screenshots/exception-3.png');
    });
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
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'tmp/screenshots/exception-4.png');
    });
    expect(completedList.getText()).toContain(text);
    perf.stop();

    if (perf.isEnabled) {
      expect(perf.getStats('meanFrameTime')).toBeLessThan(30);
    }
  });

});

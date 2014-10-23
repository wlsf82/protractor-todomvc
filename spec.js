   // spec.js
   describe('angularjs todo mvc homepage', function() {

   it('should have a title', function() {
     browser.get('http://todomvc.com/examples/angularjs/#/');
     expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
   });

   it('should be able to type a text in the text field, press enter, and verify the result', function() {

    var todoTextField = element(by.id('new-todo'));
    var todoLabel = element(by.className('ng-binding'));

    text = 'Teste de digitação em campo texto'

    todoTextField.sendKeys(text);

    todoTextField.sendKeys(protractor.Key.ENTER);

    expect(todoLabel.getText()).toEqual(text);

   });

   it('should clean the items from the list and verify that no items are available in the list', function() {

     var toogleAllCheckBox = element(by.id('toggle-all'));
     var clearCompletedButton = element(by.id('clear-completed'));
     var viewDiv = element(by.className('view'));

     toogleAllCheckBox.click();

     clearCompletedButton.click();

     expect(viewDiv.isPresent()).toBe(false);

   });

   it('should insert a new item in the to do list, check it as done and then verify if it is in the complete list', function() {
     var todoTextField = element(by.id('new-todo'));
     var todoLabel = element(by.className('ng-binding'));
     var completedLink = element.all(by.css('a[ng-class="{selected: status == \'completed\'}"')).last();

     text = 'Teste de digitação em campo texto'

     todoTextField.sendKeys(text);

     todoTextField.sendKeys(protractor.Key.ENTER);

     completedLink.click();

   });

});

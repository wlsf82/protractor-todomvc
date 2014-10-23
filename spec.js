   // spec.js
   describe('angularjs todo mvc homepage', function() {

   it('should have a title', function() {
     browser.get('http://todomvc.com/examples/angularjs/#/');
     expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
   });

   it('should be able to add items in the to do list', function() {

    var todoTextField = element(by.id('new-todo'));
    var todoLabel = element(by.className('ng-binding'));

    text = 'Teste de digitação em campo texto'

    todoTextField.sendKeys(text);

    todoTextField.sendKeys(protractor.Key.ENTER);

    expect(todoLabel.getText()).toEqual(text);

   });

   it('should be able to clean the to do list', function() {

     var toogleAllCheckBox = element(by.id('toggle-all'));
     var clearCompletedButton = element(by.id('clear-completed'));
     var viewDiv = element(by.className('view'));

     toogleAllCheckBox.click();

     clearCompletedButton.click();

     expect(viewDiv.isPresent()).toBe(false);

   });

   it('should be able to complete items and then add them to the completed list', function() {
     var todoTextField = element(by.id('new-todo'));
     var todoLabel = element(by.className('ng-binding'));
     var completedLink = element.all(by.css('a[ng-class="{selected: status == \'completed\'}"')).last();
     var toggleAll = element(by.id('toggle-all'));
     var completedList = element(by.css('#todo-list')).
       element(by.css('.completed')).
         element(by.css('.view')).
           element(by.css('.ng-binding'));

     text = 'Teste de digitação em campo texto'

     todoTextField.sendKeys(text);
     todoTextField.sendKeys(protractor.Key.ENTER);

     toggleAll.click();

     completedLink.click();

     expect(completedList.getText()).toEqual(text);

   });

});
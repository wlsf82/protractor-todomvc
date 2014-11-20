it ('should be able to complete items and verify them in the completed list'), function() {
  var todoTextField = element(by.id('new-todo'));
  var text = 'Criar teste para limpar completed list';
  todoTextField.sendKeys(text);
  todoTextField.sendKeys(protractor.Key.ENTER);

  var completedLink = element.all(by.css('a[ng-class="{selected: status == \'completed\'}"')).last();
  var toggleAll = element(by.id('toggle-all'));
  var completedList = element(by.css('#todo-list .completed .view .ng-binding'));
  toggleAll.click();
  completedLink.click();
  expect(completedList.getText()).toContain(text);
}

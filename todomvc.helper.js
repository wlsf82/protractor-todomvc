// todomvc.helper.js

module.exports = {
  addTodoItem : function() {
    it('should add an item into the todo list', function() {
      var todoTextField = element(by.id('new-todo'));
      text = 'Teste de digitação em campo texto';
      todoTextField.sendKeys(text);
      todoTextField.sendKeys(protractor.Key.ENTER);
    });
  }
};

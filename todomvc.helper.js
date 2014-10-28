// todomvc.helper.js

module.exports = {
  addTodoItem : function(item) {
    it('should add an item into the todo list', function() {
      browser.ignoreSynchronization = true;
      var todoTextField = element(by.id('new-todo'));
      text = item;
      todoTextField.sendKeys(text);
      todoTextField.sendKeys(protractor.Key.ENTER);
    });
  }
};

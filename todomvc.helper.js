// todomvc.helper.js

module.exports = {
  addTodoItem : function(item) {
    var todoTextField = element(by.id('new-todo')),
        text = item;
    todoTextField.sendKeys(text);
    todoTextField.sendKeys(protractor.Key.ENTER);
  },
  verifyHeaderElementText : function(headerType, headerText) {
    var typeOfHeader = element(by.css(headerType));
    expect(typeOfHeader.getText()).toEqual(headerText);
  }
};

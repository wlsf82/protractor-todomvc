// todomvc.helper.js

module.exports = {
  addTodoItem : function(item) {
    it('should add an item into the todo list', function() {
      var todoTextField = element(by.id('new-todo'));
      text = item;
      todoTextField.sendKeys(text);
      todoTextField.sendKeys(protractor.Key.ENTER);
    });
  },
  verifyHeaderElementText : function(headerType, headerText) {
    it('should verify the text of a header element', function() {
      var typeOfHeader = element(by.css(headerType));
      expect(typeOfHeader.getText()).toEqual(headerText);
    });
  }
};

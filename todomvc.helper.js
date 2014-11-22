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
  verifyTitleElementText : function(titleType, titleText) {
    it('should verify the text of a title element', function() {
      var typeOfTitle = element(by.css(titleType));
      expect(typeOfTitle.getText()).toEqual(titleText);
    });
  }
};

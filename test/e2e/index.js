var fs = require('fs');

describe('Todo List', function () {

  beforeEach(function () {
    browser.url('/');
  });

  it('Adds a todo', function () {
    expect(browser.element('#pending-count').getText()).toEqual('2');
    browser.element('#new-todo-input').setValue('Hello World');
    browser.element('#new-todo').click();
    expect(browser.element('#pending-count').getText()).toEqual('3');
    expect(browser.element('li:last-child .meta').getText()).toEqual('Hello World');
  });

  it('Edits a todo', function () {
    var todoEl = browser.element('li:first-child');
    todoEl.element('.btn-edit').click();
    todoEl.element('input').setValue('todo item 1');
    todoEl.element('.btn-save').click();
    expect(todoEl.element('.meta').getText()).toEqual('todo item 1');
  });

  it('Cancels editing a todo', function () {
    var todoEl = browser.element('li:first-child');
    todoEl.element('.btn-edit').click();
    todoEl.element('input').setValue('todo item 1');
    todoEl.element('.btn-cancel').click();
    expect(todoEl.element('.meta').getText()).toEqual('todo 1');
  });

  it('Removes a pending todo', function () {
    expect(browser.element('#pending-count').getText()).toEqual('2');
    browser.element('li:last-child .btn-remove').click();
    expect(browser.element('li .meta').getText()).toEqual('todo 1');
    expect(browser.elements('li').value.length).toEqual(1);
    expect(browser.element('#pending-count').getText()).toEqual('1');
  });

  it('marks a todo as completed', function () {
    expect(browser.element('#pending-count').getText()).toEqual('2');
    expect(browser.element('#completed-count').getText()).toEqual('0');
    browser.element('li:first-child .meta').click();
    var prop = browser.element('li:first-child .meta').getCssProperty('text-decoration');
    expect(prop.property).toEqual('text-decoration');
    expect(prop.value.indexOf('line-through') > -1).toBeTruthy();
    expect(browser.element('#pending-count').getText()).toEqual('1');
    expect(browser.element('#completed-count').getText()).toEqual('1');
  });

});

import { Template } from 'meteor/templating';
import Todos from '../../collections/todos.js';

import './dashboard.html';

Template.body.onCreated(function() {

  let handle = this.subscribe('todos');

  this.autorun(() => {
    console.log(`${new Date().toTimeString()}: Fetch todos is ${handle.ready() ? 'ready' : 'not ready'}`);
  });
});

Template.body.helpers({
  todos: () => Todos.find()
});

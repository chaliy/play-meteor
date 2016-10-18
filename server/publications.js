import { Meteor } from 'meteor/meteor';
import Todos from '../collections/todos.js';

Meteor.publish('todos', () => {
  return Todos.find({}, { limit: 50 });
});

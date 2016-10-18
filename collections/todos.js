import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Todos = new Mongo.Collection('todos');

Todos.schema = new SimpleSchema({
  todo: {
    type: 'String'
  },
  effort: {
    type: 'Number',
    min: 0,
    max: 5,
  },
  timeOfDay: {
    type: 'String',
    allowedValues: ['Anytime', 'Morning', 'Afternoon', 'Evening']
  },
  dueDate: {
    type: 'Date'
  },
  who: {
    type: ['String']
  },
  repeat: {
    type: 'Boolean'
  }
});

export default Todos;

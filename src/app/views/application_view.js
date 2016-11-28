// Overall "container" for the entire application, similar to TaskListView in the live code.

import Backbone from 'backbone';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
  },

  render: function() {
    this.$el.html('<p>Hello World</p>');

    return this;
  }
});

export default ApplicationView;

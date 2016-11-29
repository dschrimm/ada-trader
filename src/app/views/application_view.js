// Overall "container" for the entire application, similar to TaskListView in the live code.
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.quoteData = options.quoteData;

    // Compile a template to be shared between the individual quotes
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

    // Keep track of the <ul> element
    this.listElement = this.$('.quotes');

    // Create a TaskView for each task
    this.cardList = [];
    this.quoteData.forEach(function(quote) {
      // console.log(quote);
      var card = new QuoteView({
        quote: quote,
        template: this.quoteTemplate
      });
      this.cardList.push(card);
    }, this); // bind `this` so it's available inside forEach
  },

  render: function() {
    // Make sure the list in the DOM is empty
   // before we start appending items
   this.listElement.empty();

   // Loop through the data assigned to this view
   this.cardList.forEach(function(card) {
     
     // Cause the quote to render
     card.render();

     // Add that HTML to our task list
     this.listElement.append(card.$el);
   }, this);

   return this; // enable chained calls
  }
});

export default ApplicationView;

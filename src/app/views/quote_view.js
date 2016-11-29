// View for an individual quote.

import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.symbol = options.quote.symbol;
    this.price = options.quote.price;

    this.template = options.template;
  },

  render: function() {
    var html = this.template({symbol: this.symbol, price: this.price});
    this.$el.html(html);

    // Enable chained calls
    return this;
  },

  events: {
    'click .btn-sell': 'sellQuote',
    'click .btn-buy': 'buyQuote'
  },

  sellQuote: function(event) {
    console.log('sell button was pressed');
  },

  buyQuote: function(event) {
    console.log('buy button was pressed');
  }
});

export default QuoteView;

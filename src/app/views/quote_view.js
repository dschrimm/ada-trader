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
    'click .btn-buy': 'buyQuote',
    'click .btn-sell': 'sellQuote'
  },

  buyQuote: function(event) {
    this.price += 1;
    this.render();
  },

  sellQuote: function(event) {
    this.price -= 1;
    this.render();
  }

});

export default QuoteView;

// View for an individual quote.

var QuoteView = Backbone.View.extend({
  initalize: function(options) {
    this.symbol = options.symbol;
    this.price = options.price;

    // Compile a template to be shared between the individual quotes
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

  },

  render: function() {
    var html = this.quoteTemplate(
      {
        symbol: this.symbol,
        price: this.price
     });

    this.$el.html(html);

    // Enable chained calls
    return this;
  }
});

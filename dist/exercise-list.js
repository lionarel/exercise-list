(function() {
  Polymer({
    is: 'exercise-list',
    attached: function() {},
    properties: {
      exercises: {
        type: Array,
        value: []
      }
    },
    add: function(event) {
      return $(this).trigger('describe-exercise');
    }
  });

}).call(this);

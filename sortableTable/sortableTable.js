/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  // TODO: your code here!
  // After clicking on sort, I want to use .sort on the data in that column
  var index;

  $('th').click(function() {
    console.log('clicked');
    console.log('$(this):', $(this).index());
     index = $(this).index();
  });
  // .find($('td').eq(index));

  //how to access data in the same column?

  $('tr').each(function(index) {
    console.log($(this).text());
  });

});


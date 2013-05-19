jQuery(document).ready(function($) {

  var genre_template = Mustache.compile($.trim($("#genre_template").html()))
      ,$genre_container = $('#genre_criteria') 

  $.each(all_deps, function(i, d){
    $genre_container.append(genre_template({dept: d}));
  });

  $.each(master_fees, function(i, m){ m.id = i+1; });
  window.mf = FeesFilter(master_fees);

  $('#genre_criteria :checkbox').prop('checked', true);
  $('#all_genre').on('click', function(e){
    $('#genre_criteria :checkbox:gt(0)').prop('checked', $(this).is(':checked'));
    mf.filter();
  });

});

var FeesFilter = function(data){
  var template = Mustache.compile($.trim($("#template").html()));

  var view = function(fee){
    return template(fee);
  };
  var callbacks = {
    show_search_count: function(result){
      $('#total_movies').text(result.length);
    },
  };

  options = {
    filter_criteria: {
      genre: ['#genre_criteria input:checkbox:gt(0)', 'ResponsibleDepartment']
    },
    and_filter_on: true,
    callbacks: callbacks,
    search: {input: '#searchbox'},
  }

  return FilterJS(data, "#movies", view, options);
}
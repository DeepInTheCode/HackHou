jQuery(document).ready(function($) {

  var all_deps = [ 'PWE',
  'Health and Human Services',
  'Houston Airport System',
  'City Secretary',
  'Department of Neighborhoods',
  'Library',
  'Administration and Regulatory Affairs',
  'Finance',
  'Parks and Recreation',
  'Police',
  'Municipal Courts Department',
  'Solid Waste Management',
  'Fire',
  'Planning and Development',
  'Mayor Office',
  'City Controller' ];
  var genre_template = Mustache.compile($.trim($("#genre_template").html()))
      ,$genre_container = $('#genre_criteria') 

  $.each(all_deps, function(i, g){
    $genre_container.append(genre_template({genre: g}));
  });

  

  $.each(master_fees, function(i, m){ m.id = i+1; });
  window.mf = MovieFilter(master_fees);

  $('#genre_criteria :checkbox').prop('checked', true);
  $('#all_genre').on('click', function(e){
    $('#genre_criteria :checkbox:gt(0)').prop('checked', $(this).is(':checked'));
    mf.filter();
  });

});

var MovieFilter = function(data){
  var template = Mustache.compile($.trim($("#template").html()));

  var view = function(movie){
    return template(movie);
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
    search: {input: '#searchbox'}/*,
    streaming: {
      data_url: 'data/top_movies_data.json', 
      stream_after: 1,
      batch_size: 50,
      before_add: function(data){
        var offset = this.data.length;

        if (offset == 450) this.clearStreamingTimer();
        
        for(var i = 0, l = data.length; i < l; i++)
          data[i].id = offset + i + 1;
      },
      after_add: function(data){
        var percent = (this.data.length - 250)*100/250;
        $('#stream_progress').text(percent + '%').attr('style', 'width: '+ percent +'%;');
        if (percent == 100) $('#stream_progress').parent().fadeOut(1000);
      }
    }*/
  }

  return FilterJS(data, "#movies", view, options);
}


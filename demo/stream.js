jQuery(document).ready(function($) {

  var depts_template = Mustache.compile($.trim($("#depts_template").html()))
      ,$dept_container = $('#dept_criteria') 

  $.each(all_deps, function(i, d){
    $dept_container.append(depts_template({dept: d}));
  });

  $.each(master_fees, function(i, m){ m.id = i+1; });
  window.mf = FeesFilter(master_fees);

  $('#dept_criteria :checkbox').prop('checked', true);
  $('#all_dept').on('click', function(e){
    $('#dept_criteria :checkbox:gt(0)').prop('checked', $(this).is(':checked'));
    mf.filter();
  });
  mf.filter();

});

var FeesFilter = function(data){
  var template = Mustache.compile($.trim($("#template").html()));

  var view = function(fee){
    return template(fee);
  };
  var callbacks = {
    show_search_count: function(result){
      $('#total_fees').text(result.length);
    },
  };

  options = {
    filter_criteria: {
      dept: ['#dept_criteria input:checkbox:gt(0)', 'ResponsibleDepartment']
    },
    and_filter_on: true,
    callbacks: callbacks,
    search: {input: '#searchbox'},
  }

  return FilterJS(data, "#fees", view, options);
}
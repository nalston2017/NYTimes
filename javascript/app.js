
$(document).ready(function(){

$('#search').on('click', function(e){
e.preventDefault();
    var searchTerm = $('#searchTerm').val();
    var api_key = 'ec82c8de63674fb6bcec39cab6b828d3';
    var queryUrl =  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + api_key + "&q=" + searchTerm;

   

    $.ajax({
        url: queryUrl,
        method: "GET"
      }).done(function(response) {

        console.log(response);
        

    
    
    });
});

// This button clears the top articles section
$("#clear-all").on("click", function() {
    articleCounter = 0;
    $("#well-section").empty();
  });

// end
});

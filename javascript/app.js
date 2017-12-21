$(document).ready(function(){

$('#search').on('click', function(){
    
    var searchTerm = $('#searchTerm').val();
    var api_key = 'ec82c8de63674fb6bcec39cab6b828d3';
    var queryUrl =  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + api_key + "&q=" + searchTerm;

    



});

// end
});
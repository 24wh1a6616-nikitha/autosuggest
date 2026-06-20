
var apiUrl = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchbar=document.getElementById("search-bar");
var searchsug=document.getElementById("search-suggestions");
searchbar.addEventListener("input",function(){
    // function is called to capture the data from user//type usre data

    // use user typed data in the query in the api call
    //call api 
    // append all the search suggestions to div tag in ui
    var query=searchbar.value.trim();
    // to remove extra spaces
    console.log(query);
    fetchSuggestions(query);
    
})
function fetchSuggestions(query){
    var fullApi=apiUrl+"?q="+query+"&weighted=true&algorithm=trie&limit=8";
    fetch(fullApi)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
      showSuggestions(data);
      //console.log(data);

})
  .catch(function(err){
    console.log("Error:"+err);
})}

function showSuggestions(data){
var values=data.results;
if(data.count==0){
    searchsug.innerHTML="<div> No matching results</div>";
}
else{
    var htmlString=""
    for(var i=0;i<values.length;i++){
        htmlString+="<div><spanclass='suggestion-item'>"+values[i].text+"</span><span class='item-weight'>"+values[i].weight+"</span></div>";
    }
    searchsug.innerHTML=htmlString;
}

}


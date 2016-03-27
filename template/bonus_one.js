// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() 
{
            $( "#searchBox" ).hide( );
    var dataArr;
	// Magic!
    $.ajax(
    {
        url: "http://www.mattbowytz.com/simple_api.json?data=all",
        success: function( data )
        {
            dataArr = data.data.interests.concat( data.data.programming );  //create arrays from JSON objects
        }
    });
    
    //keyup even on the search bar to display the suggestion box
    $( "#search" ).bind( "keyup", function( keypress )
    {
        var stringData = $( "#search" ).val();
        console.log( stringData );
        
        if( dataArr.indexOf( stringData ) > -1 )
        {
            $( "#searchBox" ).css( "visibility", "" );  //gets rid of the hidden attribute so that the show and hide function can actually work
            $( "#searchBox" ).show( function()    //this function will show the box of recommendations
            {
            
            });
        }
        
        else
        {
            $( "#searchBox" ).hide( );
        }
    });

})();



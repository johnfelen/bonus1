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
    var hashMap = new Object();
	// Magic!
    //use a hashmap for each level, where the key is the letter and the value is what possible autocompletes are there
    $.ajax(
    {
        url: "http://www.mattbowytz.com/simple_api.json?data=all",
        success: function( data )
        {
            var dataArr = data.data.interests.concat( data.data.programming );  //create one array from JSON objects
            
            //go thorugh and create a hashmap were the keys are all the prefixes(including the full word) and the values of these prefixes are the full possible words
            for( var i = 0; i < dataArr.length; i++ )
            {
                var string = dataArr[ i ];
                for( var e = 1; e <= string.length; e++ )
                {
                    var currSubstring = string.substring( 0, e );
                    if( currSubstring in hashMap )  //already in map, must keep the other values when adding new value
                    {
                        hashMap[ currSubstring ] = hashMap[ currSubstring ].concat( string );
                    }
                    
                    else
                    {
                        hashMap[ currSubstring ] = string;
                    }
                }
            }
        }
    });
    
    //keyup even on the search bar to display the suggestion box
    $( "#search" ).bind( "keyup", function( keypress )
    {
        var stringData = $( "#search" ).val();
        console.log( stringData );
        
        console.log( stringData in hashMap );
        
        if( stringData in hashMap )
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

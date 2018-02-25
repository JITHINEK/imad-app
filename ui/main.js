

var button = document.getElementById('counter');

button.onclick = function(){
    //create a request obj
    var request = new XMLHttpRequest();
    
    //capture the request and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status ===200){
                var counter = counter.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done Yet
    };
    
    //make a request
    request.open('GET','http://jithinek96.imad.hasura-app.io/counter',true);
    request.sent(null);
    

};

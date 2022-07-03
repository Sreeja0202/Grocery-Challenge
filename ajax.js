// Creating an object
function ajax(){
    var xhttp = new XMLHttpRequest();
    // Eventlistener
    
    xhttp.onreadystatechange = function()
    {
        // condition
        if(this.readyState==4&&this.status==200)
        {
            var responses = JSON.parse(this.responseText);
            // just for testing console.log(responses);
            var Jgrocery = responses.grocery;
            // just for testing console.log(Jpeople);
            var output = "";
            for(var i = 0; i<Jgrocery.length; i++)
            {
                output += `<tr>
                <td>${Jgrocery[i].Name}</td>
                <td>${Jgrocery[i].Ouantity}</td>
                <td>${Jgrocery[i].Unit}</td>
                <td>${Jgrocery[i].Department}</td>
                <td>${Jgrocery[i].Notes}</td>
                </tr>`;
            }
            document.getElementById("table_body").innerHTML = output;
        }
    
    }
    xhttp.open("GET", "./grocery.json", true);
        xhttp.send();
    }
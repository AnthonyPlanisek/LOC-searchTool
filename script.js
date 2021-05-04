var input = $("#userSearch")
var select = $("#userSelect")
var submit = $("#submit")

//submit.addEventListener("click", example)

$("#submit").click(function example(event){
    event.preventDefault()
    console.log("n", select.val())
    console.log("h", input.val())
    console.log("s", 
    "https://www.loc.gov/" + select.val() + "/?q=" + input.val() + "&fo=json")
    

    var link = "https://www.loc.gov/" + select.val() + "/?q=" + input.val() + "&fo=json"

    $.ajax({
        url: link,
        method: "GET",
    }).then(function (response){
        console.log('AJAX Response \n-------------')
        console.log(response)
        console.log("t", response.results.length)
        

        

        for (let i = 0; i < response.results.length; i++) {
            var p = document.createElement("p")
            var buttonK = document.createElement("button")
            p.style.color = "white"
            p.style.margin = "5px"

            $("#storage").append(p)
            p.innerHTML = p.innerHTML + response.results[i].title + "<br />"
            $("#storage").append(p)
            p.innerHTML = p.innerHTML + response.results[i].date + "<br />"
            $("#storage").append(p)
            p.innerHTML = p.innerHTML + response.results[i].subject + "<br />"
            $("#storage").append(p)
            p.innerHTML = p.innerHTML + response.results[i].description + "<br />"
            $("#storage").append(buttonK)
            buttonK.innerHTML = buttonK.innerHTML + response.results[i].url + "<br />"
            
            
        }
        

    })

   
})


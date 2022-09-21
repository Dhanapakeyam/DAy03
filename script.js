var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload = function()
{
    var res = JSON.parse(request.response)
    console.log(res)
   for(var i =0; i<res.length; i++)
   {
      console.log(res[i].name)
    }
    for(var k of res)
    {
        console.log(k)
    }
    for(var obj in res)
    {
        console.log(res[obj])
    }
        
}

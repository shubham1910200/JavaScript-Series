# Api
## the <b style="color: orange"><u>fetch()</u></b> method takes one mandatory argument, the path to the resource you want to fetch. It return a <b style='color:orange'><u>Promise</u></b> that resolves to the Response to the request __ as soon as the server responds with headers __ even if the server response is an http error status. you can also optionally pass in an init options object as the second argument.
function outerFunction(){
    var message = "Hello world!"
    return function innerFunction(){
        console.log(message) 
    }
}

var inner = outerFunction()
inner()
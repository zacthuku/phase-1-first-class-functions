function receivesAFunction(spy){
    return(spy());
}
function returnsANamedFunction(){
    function named(){
        return "a named function";
    }
    return named;
}
function returnsAnAnonymousFunction() {
    return function () {
      return "I'm an anonymous function!";
    };
  }
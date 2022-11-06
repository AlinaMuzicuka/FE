new Promise(function(resolve, reject) {
    resolve();
})
.then(function(result){
    return mySuperFunction1(result);
})
.then(function(result){
    return mySuperFunction2(result);
})
.then(function(result){
    return mySuperFunction3(result);
})
.then(function(result){
    return mySuperFunction4(result);
})
.then(function(result){
    return mySuperFunction5(result);
})
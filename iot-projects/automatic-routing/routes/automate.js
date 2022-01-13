// first line
const express = require('express');

// last line
module.exports = createRouter;

var newVariable;


 
function createRouter(deviceObject) {
console.log("Is it working?");
    newVariable = express.Router()   

generateRoute(newVariable, deviceObject);

return newVariable;
}

function generateRoute(router, resource) {
 
 for (var key in resource) {
 var value = resource[key];
    if (typeof value === "object"){
    generateRoute(router, value);
    
}
}
 
 
 
 
 if (resource.link){
   router.route(resource.link).get(function (req, res, next){
   
   var links = populateLinks(resource);

        
    res.links(links);
    req.links = links;
   req.result = resource;
    next();
    
   });
}

 
 }
 
 function populateLinks(resource) {
   linkObject = {
   
   
   };
   for (var key in resource) {
 var value2 = resource[key];
    if (typeof value2 === "object"){
    var subResource = value2;
    
     if (subResource.link){
 linkObject[subResource.name] = subResource.link;
}
}
}

   
   
   
   return linkObject;
 }
 
 


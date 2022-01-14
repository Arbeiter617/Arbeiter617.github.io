const json2html = require('node-json2html');




module.exports = function() {
	return function (req, res, next) {
		// TODO 2: Create the converter function
		if (req.result) {
		
		if (req.accepts('html')){
		
	let transform = {'<>': 'div', 'html': [
    {'<>': 'p', 'html': [
        {'<>': 'b', 'html': 'name:'},
        {'<>': 'p', 'html': '${name}'}
    ]},
    {'<>': 'p', 'html': [
        {'<>': 'b', 'html': 'description:'},
        {'<>': 'p', 'html': '${description}'}
    ]},
    {'<>': 'p', 'html': [
        {'<>': 'b', 'html': 'value:'},
        {'<>': 'p', 'html': '${value}'}
    ]}
]};
		
	

		
		   
		      console.log("sending html");
                      let response = json2html.transform(req.result, transform);
                      let links = generateLinks(req.links);

                      res.send(response + links);
		   
		   return;
		   
		}
		res.send(req.result);
		}
		else {
		next();
		}
		
	};
};



function generateLinks(linkList) {
        var html = "<h4>Links</h4>";
         
         for (var key in linkList) {
          html.innerHtml =  "<a href="+linkList[key]+">"+key+"</a><br>";
          
          return html;
}

}

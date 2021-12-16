const json2html = require('node-json2html');




module.exports = function() {
	return function (req, res, next) {
		// TODO 2: Create the converter function
		if (req.result) {
		
		if (req.accepts('html')){
		
	let transform = {'<>': 'div', 'html': [
    {'<>': 'p', 'html': [
        {'<>': 'b', 'html': 'Property1: "My Pi"'},
        {'<>': 'p', 'html': '${property1}'}
    ]},
    {'<>': 'p', 'html': [
        {'<>': 'b', 'html': 'Property2: "The worlds tastiest Pi"'},
        {'<>': 'p', 'html': '${property2}'}
    ]},
    {'<>': 'p', 'html': [
        {'<>': 'b', 'html': 'Property3: 8484'},
        {'<>': 'p', 'html': '${property3}'}
    ]}
]};
		
	

		
		   
		   res.send(json2html.transform(req.result, transform));
		   
		   return;
		   
		}
		res.send(req.result);
		}
		else {
		next();
		}
		
	};
};

/*

	The key thing to know here is:
		- the import statement must executed only when needed
		- the callback will run asynchronously
		- things like Blaze templates are automatically added to the template tree
*/

Template.hello.events({
	'click button': async function() {
		const  iD  = await import('./imports/importacionDinamica.js')
		console.log(iD)
	},
});

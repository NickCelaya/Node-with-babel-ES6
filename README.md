# Node-with-babel-ES6
Setting up Babel in a Node server in order to use ES6 features like import/export and ES6 modules.  
Installed mocha & chai to create a testing suite that can be used for unit testing. For each file.js that is created there needs to be a file.test.js established in the tests folder.

Use bable presets env in either package json or bablerc file. However I found that if you use a bablerc file, be sure to have some presets in there or your sever will throw an error when spining up. Below are how they should look in the babelrc & package json file. You can use either method in your project. 

1. babelrc file 

{
	"presets": [
		"env"
	]
}

2. package json 

"babel": {
    "presets": [
      "env"
    ]
  }
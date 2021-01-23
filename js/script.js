/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'b1-question-msg': {
        title: 'b1-question-msg',
        subtitle: 'b1-question-msg',
		body: '<p>10 == "are you sure about it?"</p>'
    },
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'mainBG': 'bgmusic1.mp3',
	'mainBG2': 'bgmusic2.mp3',
	'mainBG3': 'bgmusic3.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'alarm': 'alarm.mp3',
	'snake': 'snake.mp3',
	'st': 'street.mp3',

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'bedroom': 'bedroom-scene.png',
	'street': 'Street-scene.png',
	'fantasy': 'pythonworld.gif',
	
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Catto',
		color: '#5bcaff',
		directory: 'catto',
		sprites:{
			happy: 'catto-happy.png',
			sad: 'catto-sad.png',
			default: 'expressions/catto.png',
			angry: 'catto-angry.png',
			shocked: 'catto-shocked.png',
			dissapointed: 'catto-dissapointed.png',
		},
		expressions:{
			happy: 'expressions/catto-happy.png',
			sad: 'expressions/catto-sad.png',
			angry: 'expressions/catto-angry.png',
			shocked: 'expressions/catto-shocked.png',
			dissapointed: 'expressions/catto-dissapointed.png',
			scat: 'expressions/scat.jpeg',
		},

	},
	's': {
		name: 'Datebayo',
		color: '#ffa500',
		directory: 'minion', 
        sprites: {
            snake: 'expressions/snake.png',
            happy: 'expressions/minion-happy.png',
            b1q: 'expressions/b1-question.png',
            b2q: 'expressions/b2-question.png',
            b3q: 'expressions/b3-question.png',
            b4q: 'expressions/b4-question.png',
        },
        expressions: {
            happy: 'expressions/minion-happy.png',
        },
	},
	'p': {
		name: '{{player.name}}',
		color: '#07f6cc',
		directory: 'main-girl',
		sprites:{
			happy: 'main-girl-happy.jpg',
			sad: 'main-girl-sad.jpg',
			angry: 'main-girl-angry.jpg',
			normal: 'main-girl-default.jpg',
			shocked: 'main-girl-shocked.jpg',
			dissapointed: 'main-girl-dissapointed.jpg',
		},
		expressions:{
			happy: 'expressions/main-girl-happy.jpg',
			sad: 'expressions/main-girl-sad.jpg',
			angry: 'expressions/main-girl-angry.jpg',
			normal: 'expressions/main-girl-default.jpg',
			shocked: 'expressions/main-girl-shocked.jpg',
			dissapointed: 'expressions/main-girl-dissapointed.jpg',
		},
		default_expression: 'normal',

	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'centered What if...',
		'centered one day, you woke up in a whole different world?...',
		'centered Would you be able to face all the challenges to escape and go back to your own world?',
		'centered ...Or would you stay there forever?',
		'clear',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'Enter your name:',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'play sound alarm',
		'centered *ALARM RINGING!!*',
		'show background bedroom with headShake',
		'stop sound alarm',
		'play music mainBG with fadeIn 2s volume 70 loop',
		'p oh CRAP! I’m late for school!!',
		'play sound st with volume 100',
		'enter short prep scene',
		'show background street with wobble',
		'p:happy Later, Mom!',
		'p:shocked ahhhhhhhhhhhh',
		'play sound snake with volume 100',
		'enter snake bite scene',
		'show background street with fadeOut 5s',
		'p:shocked shit...',
		'stop music mainBG fade 2',
		'stop sound st',
		'show scene #000000 with flash',
		'centered 3 days later...',
		'play music mainBG3 with volume 80 loop',
		'show background fantasy with fadeIn',
		'show character y default with fadeIn',
		'y:happy hello, hooman!',
		'p:shocked Where am I?..',
		'p:shocked Who are you?..',
		'p:shocked WAAAHH!..',
		'y: Let\'s start again. Hello {{player.name}} Welcome to Monogatari!',
		'y:happy hello, hooman! I saw you lying on the street.',
		'p:shocked What happened?!',
		'p:shocked How did I get here?!',
		'y:happy You must have been his 5th victim for this month, hooman.',
		'p:angry Where am I?!',
		'y:happy You are now at the python world',
		'y:happy For you to get back to your real world, you have to take up the challenges about the PYTHON PROGRAMMING LANGUAGE to defeat the bad snake',
		'p:shocked What happens if I didn\'t do any of those?',
		'y:happy …then you will be stuck here. FOREVER.',
		'p:shocked NANIII!!??', 
		'y you have been bitten by the great snake to try your skills in python by bringin you in this world',
		'p:sad but why me?',
		'y I\'m pretty sure it\'s for no good reason',
		'y You just happen to cross paths',
		'y:happy But hey look on the good side... You\'ll be learning some new things about python',
		'p Well if you put it that way...',
		'p:happy It\'ll give me more skills for my studies too!',
		'show background fantasy with fadeOut 5s',
		'show character y default with fadeOut 5s',
		// =======Ricah part input=====
		'y Hello, again {{player.name}}! I will be the one assisting you on your challenges.',
		'show character y default with fadeIn',
		'show background fantasy with fadeIn',
		

				{
					'Choice': {
							'Dialog': 'y Do you know what Python Programming is?',
						'Yes': {
							'Text': 'Yes',
							'Do': 'jump Yes'
							},
							'No': {
								'Text': 'No',
								'Do': 'jump No'
							},
						},
				},	
		],
						'afterChoice': [
							'*violent creatures appears*',
							'y:worried oh no! {{player.name}}, make them disappear!',
							'y:worried to do that, you have to use the variable on their body and assign them with their right data types',

							'y What you did is called Python Casting! Where you will specify the variable type. See more here: link',
							'y And do you know that data types and variables are important in programming? Yes, it is. Because a variable can store different data types, and do different things!',
							'p:happy SOUNDS AWESOME!',
							'y And for your next challenge, it’s about the numeric data types. There are three(3) numeric types: INT, FLOAT, and COMPLEX.',
							'jump QuestionAgain',

		],
		'QuestionAgain':[
			'y And for your next challenge, it’s about the numeric data types. There are three(3) numeric types: INT, FLOAT, and COMPLEX.',

							{
								'Choice': {
										'Dialog': 'y So, your next challenge is to choose the right numeric types of x = 2.0',
									'Complex': {
										'Text': 'Complex',
										'Do': 'jump Complex'
										},
									'Float': {
										'Text': 'Float',
										'Do': 'jump Float'
										},
									'Int': {
										'Text': 'Int',
										'Do': 'jump Int'
									}
									},
							},	

						],
						'AfterAnswer':[
							'y Now that you have an idea about numeric types. Let’s move on to “Strings”.',
							'y In python, strings is surrounded by single/double quotation marks. For example: “hello” and ‘Hello’ are both correct.',
							'p:happy Ahh! I see.',
						],
				'Yes': [
					'y Because you already know what Python programming is, your first challenge is to put the right data types on the variables!',
					'jump afterChoice',
				],
					
				'No': [
					
					'y 	It is popular programming language',
					'y  used for web development (server-side), software development, mathematics, system scripting. You can look here to know more: Link',
					'jump afterChoice',
				],
				'Complex': [
					'y:sad Oh no! think again',
					'jump QuestionAgain',
				],
				'Float':[
					'y:happy You got it right, {{player.name}}!',
					'jump boolean-scene',

				],
				'Int': [
					'y:sad Oh no! think again',
					'jump QuestionAgain',
				],

		
		// =========arvin scene boolean=====
		'boolean-scene':[
			'y Now...',
			'y For the next topic, I\'ll teach you about Booleans.',
			'p:happy SWEEET!',
			'y Are you ready {{player.name}}?',
			'p:happy READY!!!',
			'y:happy ALRIGHT!!',
			'y Now.. Let me tell you a thing about booleans',
			'y Booleans only represent one of two values which are: TRUE or FALSE.',
			'p:shocked NANI?! It only gives us True or False?',
			'y Yes',
			'p:angry Seems kinda useless don\'t you think?..',
			'y In programming you often need to know if an expression is True or False.',
			'y That\'s why this one plays a big part for your coding.',
			'y now before we move on to your next challenge I\'ll have to let you know about Python Comparison Operators',
			'p What are they?',
			'y:happy Glad you asked.. So.. ',
			'y Comparison operators are used to compare two values',
			'y Remember at the first challenge where we assign values?',
			'p Yes?',
			'y:happy Well a signle equal(=) sign is used to assign values.',
			'y:happy While using a double equal signs(==) is used for comparing values',
			'y:happy And this is where the booleans comes into actions',
			'y boolean will return a True value only if the conditions are being satisfied',
			'y ..and returns False value if it dont',
			'p WOAAAAAW!!',
			'y:happy I KNOW RIGHT?!',
			'y here are different types of Comparison operators',
			'y "=="	Equal, This ask the question are both value equal to each other?',
			'y "!="	Not equal, This on the other hand asks the question are both value <strong>NOT</strong> equal to each other? ',
			'y ">"	Greater than, Asks the question is the first value greater than the second value?',
			'y and <p>"<"	Less than	x < y, Asks the question is the first value lesser than the second value?</p> ', 
			'y ">="	Greater than or equal to, Asks the question is the first value greater thanor equal to the second value? ',  
			'y here <p>"<="	Less than or equal to, And this one asks the question is the first value lesser than or equal to the second value?</p>',  
			'p:sad I hope that\'s everything I need to know... ',
			'y:happy Don\'t be silly we have three more things you need to know',
			'p:shocked WAAAAH!!!... ',
			'p all right let\'s just get over this so I could go back home to my real world.',
			'y I know you can do this. I believe in you',
			'y Let\'s get back to buisness',
			'y The Last three things you need to know is about Python Logical Operators',
			'p:shocked Python Logical What Now?!',
			'y Python Logical Operators',
			'y These logical operators are used to combine conditional statements',
			'y such as <p>(x \< 5 and  x \< 10), (x \< 5 or x \< 4) also (not(x \< 5 and x \< 10))</p>',
			'y "and" operator returns boolean value type True if both statements are true',
			'y "or" operator returns boolean value type True if one of the statements is true',
			'y "not" operator reverses the result, returns False if the result is true',
			'p I get it now',
			'p Let\'s begin on to the next challenge then.',
			'y:happy Alright! Now let\'s see if you can tell what value will the boolean will be returning with the expressions',
			'show character y default with fadeOut 5s',
			'y Good luck {{player.name}}!',
			'show character y default at left with fadeIn',
			'show character s b1q at right with fadeIn',
			

			{
				'Choice': {
						'Dialog': 'y Tell me what value will it return with the expression (10 == "are you sure about it?")',
					'True': {
						'Text': 'True',
						'Do': 'jump b1-True'
						},
					'False': {
						'Text': 'False',
						'Do': 'jump b1-False'
						},
					},
			},	
		],
		'b1-True': [
			'y:dissapointed ohhhhhh.... you dummy.',
			'y The boolean will return False because Int 10 is not equal to str "are you sure about it?"',
			'y Remember.. booleans will only return True if the comparison of two values are equal',
			'hide character s with fadeOut',
			'y It\'s allright we\'ll get the next one this time',
			'jump second-b-Question',
		],
			
		'b1-False': [
			
			'y:happy GREAT WORK!',
			'y The boolean will return False because Int 10 is not equal to str "are you sure about it?"',
			'hide character s with fadeOut',
			'y Let\'s go to the next one',
			'jump second-b-Question',
		],
		'second-b-Question':[
			'show character s b2q at right with fadeIn', 
			'y:happy Here we are on the next boolean challenge',
			'p:sad Ohh boy... here we go again',
			'y: You can do it. Good luck!',
			{
				'Choice': {
						'Dialog': 'y what value will it return with the expression (x==10.0)?',
					'True': {
						'Text': 'True',
						'Do': 'jump b2-True'
						},
					'False': {
						'Text': 'False',
						'Do': 'jump b2-False'
						},
					},
			},
		],
		'b2-True': [
			'y:happy GOOD JOB!',
			'y You\'re getting better at this',
			'y The boolean will return True because Int 10 and float 10.0 are just as equal value that satisfys the condition',
			'hide character s with fadeOut',
			'y:happy LET\'s GO TO THE NEXT ONE TO BRING YOU BACK TO YOUR WORLD!',
			'jump third-b-Question',
		],
			
		'b2-False': [
			'y:scat GREAT SCAAAT! NOOOOOOOO!',
			'y:dissapointed Did you even listen to any of my teachings earlier?',
			'y:dissapointed The boolean will return True because Int 10 and float 10.0 are just as equal value that satisfys the condition',
			'y Remember.. booleans will only return True if the comparison of two values are the same',
			'hide character s with fadeOut',
			'y:happy LET\'s KEEP GOING TO GET YOU BACK TO YOUR OWN WORLD!',
			'y Don\'t give up',
			'jump third-b-Question',
		],
		'third-b-Question':[
			'show character s b3q at right with fadeIn', 
			{
				'Choice': {
						'Dialog': 'y what boolean value will the problem shown above return?',
					'True': {
						'Text': 'True',
						'Do': 'jump b3-True'
						},
					'False': {
						'Text': 'False',
						'Do': 'jump b3-False'
						},
					},
			},
		],
		'b3-True': [
			'y:scat NOOOOOOOO!',
			'y:dissapointed we\'ll I gatta admit this one was pretty tough',
			'y:dissapointed The expression (x>y) returns False since 5 is actually less than 10',
			'y:dissapointed Then the expression <p>(y<5)</p> returns false since 10 is greater than 5',
			'y:dissapointed Thus with the "and" operator on the conditions, the boolean type that will be returning is False since both are not True ',
			'y Remember.. "and" operator only returns boolean value type True if both statements are true',
			'hide character s with fadeOut',
			'y Don\'t worry...',
			'y:happy Let\'s go to the FINAL challenge and finish this shall we?',
			'jump fourth-b-Question',
		],
			
		'b3-False': [
			'y:happy AMAZING!',
			'y You\'re really really good at this',
			'y The expression (x>y) returns False since 5 is actually less than 10',
			'y Then the expression <p>(y<5)</p> returns false since 10 is greater than 5',
			'y Thus with the "and" operator on the conditions, the boolean type that will be returning is False since both are not True ',
			'y:happy Remember.. "and" operator only returns boolean value type True if both statements are true',
			'y We\'re almost there. One more to go',
			'hide character s with fadeOut',
			'y:happy Let\'s go to the FINAL challenge and finish this shall we?',
			'jump fourth-b-Question',
		],
		'fourth-b-Question':[

			'end'
		],

});

// 'show scene #f7f6f6 with fadeIn',
// 		'show notification Welcome',
// 		{
// 			'Input': {
// 				'Text': 'What is your name?',
// 				'Validation': function (input) {
// 					return input.trim ().length > 0;
// 				},
// 				'Save': function (input) {
// 					this.storage ({
// 						player: {
// 							name: input
// 						}
// 					});
// 					return true;
// 				},
// 				'Revert': function () {
// 					this.storage ({
// 						player: {
// 							name: ''
// 						}
// 					});
// 				},
// 				'Warning': 'You must enter a name!'
// 			}
// 		},
// 		'y Hi {{player.name}} Welcome to Monogatari!',
// 		't:happy SASUKEE!!!!! datebayo~',
// 		{
// 			'Choice': {
// 				'Dialog': 'y Have you already read some documentation?',
// 				'Yes': {
// 					'Text': 'Yes',
// 					'Do': 'jump Yes'
// 				},
// 				'No': {
// 					'Text': 'No',
// 					'Do': 'jump No'
// 				}
// 			}
// 		}
// 	],

// 	'Yes': [
// 		'y Thats awesome!',
// 		'y Then you are ready to go ahead and create an amazing Game!',
// 		'y I can’t wait to see what story you’ll tell!',
// 		'end'
// 	],

// 	'No': [

// 		'y You can do it now.',

// 		'show message Help',

// 		'y Go ahead and create an amazing Game!',
// 		'y I can’t wait to see what story you’ll tell!',
// 		'end'
// 	]

// intro:
		// select character (M/F)
		// input name
		// nakagat ng ahas 
		// 'show character s normal at center with fadeIn',
		// tas napunta sa python world
		// kilala ung SC na pusa
		// intro ng bat ganon nag sasalita
		// na napunta sya sa python world
		// INTRO to str and int DATA TYPE:----------
		// isang violent creature appeared
		// need to put variable and data type to free the creature

		// 1st topic and game is:
		// type ng data types srt, int
		// 2nd topic:
		// boolean values, true or false ung choice of answers nila
		// 3rd topic:
		// List, game huhulaan ung output sa binigay na codes to open gate
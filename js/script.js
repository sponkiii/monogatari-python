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
	}
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

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

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
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Catto',
		color: '#5bcaff'
	},
	's': {
		name: 'Datebayo',
		color: '#ffa500',
		directory: 'minion', 
        sprites: {
            angry: 'normal.png',
            happy: 'minion-happy.png',
            normal: 'normal.png',
            sad: 'sad.png',
            surprised: 'surprised.png',
        },
        expressions: {
            happy: 'expressions/minion-happy.png',
        }
	},
	'p': {
		name: '{{player.name}}',
		color: '#07f6cc',
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
		'centered *ALARM RINGING!!*',
		'show background bedroom with headShake',
		'p oh CRAP! I’m late for school!!',
		'enter short prep scene',
		'show background street with wobble',
		'p Later, Mom!',
		'p: ahhhhhhhhhhhh',
		'enter snake bite scene',
		'show background street with fadeOut 5s',
		'p: shit...',
		'show scene #000000 with flash',
		'centered 3 days later...',
		'p: Where am I?..',
		'p: Who are you?..',
		'p: WAAAHH!..',
		'y: hello madafaka {{player.name}} Welcome to Monogatari!',
		's:happy hello, hooman! I saw you lying on the street.',
		'p: What happened?!',
		'p: How did I get here?!',
		's:happy Maybe you’re his 5th victim, hooman.',
		'p Where am I?',
		's:happy You are now at the python world',
		's:happy For you to get back to your real world, you have to take up the challenges about the PYTHON PROGRAMMING LANGUAGE to defeat the bad snake',
		'p What if I didn\'t do any of those?',
		's:happy …then you will be stuck here. FOREVER.',
		'p whaat?? *shocked face* ', 
		'y you have been chosen by the great snake to save our world',
		's:happy Datebayoo~',
		'p but why me?',
		'y just shut up and save our world nigguh',
		// =======Ricah part input=====
		'background ng different world',
		'y Hello, {{player.name}}! I will be the one assisting you on your challenges.',
		

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
							'y What you did is called Python Casting! Where you will specify the variable type. See more here: link',
							'y And do you know that data types and variables are important in programming? Yes, it is. Because a variable can store different data types, and do different things!',
							'p SOUNDS AWESOME!',
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
				'Yes': [
					'y HOOMAN! Your first challenge is python casting! You have to put the right data types on the variables!!',
					'jump afterChoice',
				],
					
				'No': [
					
					'y 	It is popular programming language',
					'y  used for web development (server-side), software development, mathematics, system scripting. You can look here to know more: Link',
					'jump afterChoice',
				],
				'Complex': [
					'y Oh no! think again',
					'jump QuestionAgain',
				],
				'Float':[
					'y You got it right, {{player.name}}!',

				],
				'Int': [
					'y Oh no! think again',
					'jump QuestionAgain',
				],

		
		// =========arvin scene boolean=====
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
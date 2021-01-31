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
	'bed': 'fell.mp3',

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
	'living': 'living-room.jpg',
	
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Catto',
		color: '#5bcaff',
		directory: 'catto',
		sprites:{
			happy: 'catto-happy.jpg',
			sad: 'catto-sad.png',
			default: 'expressions/catto.png',
			angry: 'catto-angry.png',
			shocked: 'catto-shocked.png',
			dissapointed: 'catto-dissapointed.jpg',
		},
		expressions:{
			happy: 'expressions/catto-happy.jpg',
			sad: 'expressions/catto-sad.png',
			default: 'expressions/catto.jpg',
			angry: 'expressions/catto-angry.png',
			shocked: 'expressions/catto-shocked.jpg',
			dissapointed: 'expressions/catto-dissapointed.jpg',
			scat: 'expressions/scat.jpeg',
		},
		default_expression: 'default',

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
			snake: 'expressions/Snake-fullbody.png',
			creature1Mad: 'expressions/creature1-fullbody.png',
			creature1Happy: 'expressions/creature1-freed-fullbody.png',
			creature2Mad: 'expressions/creature2-fullbody.png',
			creature2Happy: 'expressions/creature2-freed-fullbody.png',
        },
        expressions: {
			happy: 'expressions/minion-happy.png',
			snake: 'expressions/Snake-face.png',
			creature1Mad: 'expressions/monster1-face.png',
			creature1Happy: 'expressions/freed1-face.png',
			creature2Mad: 'expressions/monster2-face.png',
			creature2Happy: 'expressions/freed2-face.png',
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
			running: 'female-run.png',
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
		'play sound bed',
		'play music mainBG with fadeIn 2s volume 90 loop',
		'p:shocked oh CRAP! I’m late for school!!',
		'p:shocked waaah! where\'s my socks!??',
		'stop sound bed',
		'show background living with fadeIn 2s',
		'p:happy Hello! Mr. Sun, the weather is so nice today!',
		'p:normal hmmm the breakfast is so delicious! I want to eat more',
		'p:shocked but I am gonna be late, so I gotta go',
		'play sound st with volume 100',
		// snake start
		'show background street with wobble',
		'show character p running at right with fadeIn end-fadeOut',
		'p:happy Later, Mom!',
		'p:shoced I am soooo late!',
		'p:dissapointed kinda lazy to attend my classes today, ugh!',
		'snake appeared',
		'show character s snake at left with fadeIn',
		's:snake Ssssssssss....',
		'p:shocked Waahhh!',
		's:snake YOU!!!',
		's:snake COME HERE KID!',
		'p:dissapointed Damnit...',
		'p:dissapointed Another talking snake',
		'p:dissapointed I\'m on some kid\'s another monogatari script again',
		'p:dissapointed I knew it...',
		'p:angry STAY AWAY FROM MEEE!!',
		's:snake Sssssssssssss...',
		'p:angry SHOOO!!',
		'p:angry SHOOO!!',
		'p:angry I SWEAR I\'ll BITE BACK!',
		'snake attacked and bit player',
		'show character s snake at center',
		'p:shocked ahhhhhhhhhhhh',
		'play sound snake with volume 100',
		'show background street with fadeOut 5s',
		'hide character s with fadeOut',
		'hide character p with fadeOut',
		'p:shocked shit...',
		'stop music mainBG fade 2',
		// snake end
		'stop sound st',
		'show scene #000000 with flash',
		'centered 3 days later...',
		'play music mainBG3 with volume 100 loop',
		'show background fantasy with fadeIn',
		'show character y default with fadeIn',
		'y:happy hello, hooman!',
		'p:shocked Where am I?..',
		'p:shocked Who are you?..',
		'p:shocked WAAAHH!..',
		'y:dissapointed Let\'s start again. Hello {{player.name}} Welcome to Monogatari!',
		'y:happy I saw you lying on the street.',
		'p:shocked What happened?!',
		'p:shocked How did I get here?!',
		'y:happy You must have been the serpent\'s 5th victim for this month, hooman.',
		'p:angry Where am I?!',
		'y:happy You are now at the python world',
		'y:happy For you to get back to your real world, you have to take up the challenges about the <span style="color:aqua">PYTHON PROGRAMMING LANGUAGE</span> to defeat the bad snake',
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
		'...',
		'show character y default with fadeIn',
		'show background fantasy with fadeIn',
		'y Hello, again {{player.name}}! I will be the one assisting you on your challenges.',
		

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
			'hide character y with fadeOut',
			'show character s creature1Mad with fadeIn',
			's:creature1Mad RAAAAAAAAAAWRRR!!',
			'vibrate 200',
			'y:shocked oh no! {{player.name}}, seems like we have encountered a violent creature!',
			'y:shocked These lovely ceratures gets violent reactions when people mess with their variable types.',
			'y:shocked We need to help them free from their variable types confusion',
			'y:shocked to do that, you have to use the variables on their body and assign them with their right data types seen above their head',
			// hiding everything
			'hide character s with fadeOut',
			'show background fantasy with fadeOut 5s',
			'stop music mainBG3 fade 2',

			'jump first-c-challenge',
		],
		'first-c-challenge':[
			'...', 
			// background
			'show background fantasy with fadeIn',
			// monster
			'show character s creature1Mad with fadeIn',
			's:creature1Mad RAAAAAAAAAAWRRR!!',
			'vibrate 200',
			// sound
			'play music mainBG3 with volume 100 loop',
			'boy eto na first ',
			'y:shocked {{player.name}}, Use the variables on their body and assign them with their right data types with values seen above their head',
			{
				'Input': {
					'Class': 'questions',
					'Text': 'sample: var_name = data_type(data_value)',
					'Validation': function (input) {
						return input.trim ().length > 0;
					},
					'Save': function (input) {
						this.storage ({
							player: {
								ans: input
							}
						});
						return true;
					},
					'Revert': function () {
						this.storage ({
							player: {
								ans: ''
							}
						});
					},
					'Warning': 'You must enter a code!'
				}
			},
			{'Conditional': {
				'Condition': function () {
					return this.storage ('player').ans == 'a = Int(5)';
				},
				'True': 'jump correct-ans-for-q1',
				'False': 'jump wrong-ans-for-q1',
			}},
		],
		'wrong-ans-for-q1':[
			'hide character s with fadeOut',
			'show background fantasy with fadeOut 5s',
			'stop music mainBG3 fade 2s',
			'p:shocked shit...',
			'show scene #000000 with flash',
			'show character y default with fadeIn',
			'p:shocked What happened?',
			'y:sad We failed to free the creature from their variable types confusion',
			'y Don\'t worry we\'ll try it again',
			'hide character y with fadeOut',
			
			'jump first-c-challenge',
		],
		'correct-ans-for-q1':[
			// hide violent creature
			'hide character s with fadeOut 3s',
			// show freed creature
			'show character s creature1Happy with fadeIn 2s',
			// success
			'y:happy We did it!',
			'p:happy YEEEY!!',
			's:creature1Happy Thankyou {{player.name}}',
			// show new violent creature
			'show character s creature2Mad with fadeIn',
			's:creature2Mad RAAAAAAAAAAWRRR!!',
			'vibrate 200',
			'y:shocked Oh oh, looks like we have another one',
			'p:shocked This one\'s larger than the other one!',
			'p:happy Don\'t worry big fellow, we\'ll free you from your variable confusion too',
			// fade everything out
			'hide character s with fadeOut',
			'show background fantasy with fadeOut 5s',
			'stop music mainBG3 fade 2',
			
			'jump second-c-challenge',
		],
		'second-c-challenge':[
			'...',
			// background
			'show background fantasy with fadeIn',
			// next monster
			'show character s creature2Mad with fadeIn',
			's:creature2Mad RAAAAAAAAAAWRRR!!',
			'vibrate 200',
			// sound
			'play music mainBG3 with volume 100 loop', 
			'another one!',
			'y:shocked {{player.name}}, Use the variables on their body and assign them with their right data types with values seen above their head',


			{
				'Input': {
					'Class': 'questions',
					'Text': 'sample: var_name = data_type(data_value)',
					'Validation': function (input) {
						return input.trim ().length > 0;
					},
					'Save': function (input) {
						this.storage ({
							player: {
								ans: input
							}
						});
						return true;
					},
					'Revert': function () {
						this.storage ({
							player: {
								ans: ''
							}
						});
					},
					'Warning': 'You must enter a code!'
				}
			},
			{'Conditional': {
				'Condition': function () {
					return this.storage ('player').ans == 'y = str("I am a string")';
				},
				'True': 'jump correct-ans-for-q2',
				'False': 'jump wrong-ans-for-q2',
			}},

			
		],
		'wrong-ans-for-q2':[
			'hide character s with fadeOut',
			'show background fantasy with fadeOut 5s',
			'stop music mainBG3 fade 2',
			'p:shocked shit...',
			'show scene #000000 with flash',
			'show character y default with fadeIn',
			'p:shocked What happened?',
			'y:sad We failed to free the creature from their variable types confusion',
			'y Don\'t worry we\'ll try it again',
			'hide character y with fadeOut',
			// again
			'jump second-c-challenge',
		],
		'correct-ans-for-q2':[
			// hide violent creature
			'hide character s with fadeOut',
			// show freed creature
			'show character s creature2Happy with fadeIn 2s',
			// success
			'y:happy We did it again!',
			's:creature2Happy I\'m FREEE!!!',
			's:creature2Happy Thankyou {{player.name}}',
			'p:happy I\'m the best pokemon trainner EVEER!!',
			'y Wrong game, bro...',
			'y But yeah, you\'re the best!',
			// fade everything out
			'hide character s with fadeOut',
			'show background fantasy with fadeOut 5s',
			'stop music mainBG3 fade 2',
			
			'jump end-of-Casting-challenge',
		],
		'end-of-Casting-challenge':[
			// show cat, sound and bg
			'play music mainBG3 with volume 100 loop',
			'show character y default with fadeIn', 
			'show background fantasy with fadeIn',
			//scene
			'y:happy GREAT JOB! {{player.name}}',
			'y:happy You help free both of those creatures from their variable types confusions',
			'y What you did is called Python Casting! Where you will specify the variable type. See more here: <a href="https://www.w3schools.com/python/python_casting.asp" target="_blank" style="color: aqua;">https://www.w3schools.com/python/python_casting.asp</a>',
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
					'y  used for web development (server-side), software development, mathematics, system scripting. You can look here to know more: <a href="https://www.w3schools.com/python/default.asp" target="_blank" style="color: aqua;">https://www.w3schools.com/python/default.asp</a>',
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
			'y <span style="color:aqua">"=="</span> Equal, This ask the question are both value equal to each other?',
			'y <span style="color:aqua">"!="</span>	Not equal, This on the other hand asks the question are both value <strong>NOT</strong> equal to each other? ',
			'y <span style="color:aqua">">"</span> Greater than, Asks the question is the first value greater than the second value?',
			'y <span style="color:aqua">"<"</span> Less than, Asks the question is the first value lesser than the second value?', 
			'y <span style="color:aqua">">="</span>	Greater than or equal to, Asks the question is the first value greater thanor equal to the second value? ',  
			'y <span style="color:aqua">"<="</span> Less than or equal to, And this one asks the question is the first value lesser than or equal to the second value?',  
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
			'y such as <span style="color:aqua">(x \< 5 and  x \< 10)</span>, <span style="color:aqua">(x \< 5 or x \< 4)</span> also <span style="color:aqua">(not(x \< 5 and x \< 10))<span>',
			'y <span style="color:aqua">"and"</span> operator returns boolean value type True if both statements are true',
			'y <span style="color:aqua">"or"</span> operator returns boolean value type True if one of the statements is true',
			'y <span style="color:aqua">"not"</span> operator reverses the result, returns False if the result is true',
			'y:happy Here is a link that you could use as a reference scroll down for comparison and logical operators: <a href="https://www.w3schools.com/python/python_operators.asp" target="_blank" style="color: aqua;">https://www.w3schools.com/python/python_operators.asp</a>',
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
			'p:shocked NO WAY I\'m WRONG?!',
			'y:dissapointed Yep, you didn\'t get it right',
			'y The boolean will return False because <span style="color:aqua">Int 10</span> is not equal to <span style="color:aqua">str "are you sure about it?"</span>',
			'y Remember.. booleans will only return <span style="color:aqua">True</span> if the comparison of two values are <span style="color:aqua">equal</span>',
			'hide character s with fadeOut',
			'y It\'s allright we\'ll get the next one this time',
			'jump second-b-Question',
		],
			
		'b1-False': [
			'y:happy GREAT WORK!',
			'p:happy YES!!',
			'y The boolean will return False because <span style="color:aqua">Int 10</span> is not equal to <span style="color:aqua">str "are you sure about it?"</span>',
			'hide character s with fadeOut',
			'y Let\'s go to the next one',
			'jump second-b-Question',
		],
		'second-b-Question':[ 
			'y:happy Here we are on the next boolean challenge',
			'p:sad Ohh boy... here we go again',
			'y:happy You can do it. Good luck!',
			'show character s b2q at right with fadeIn',
			{
				'Choice': {
						'Dialog': 'y what value will it return with the expression <span style="color:aqua">(x==10.0)</span>?',
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
			'p:happy YAHOOO!!, I don\'t do mistakes',
			'y You\'re getting better at this',
			'y The boolean will return True because <span style="color:aqua">Int 10</span> and <span style="color:aqua">float 10.0</span> are just as equal value that satisfies the condition',
			'hide character s with fadeOut',
			'y:happy LET\'s GO TO THE NEXT ONE TO BRING YOU BACK TO YOUR WORLD!',
			'jump third-b-Question',
		],
			
		'b2-False': [
			'y:scat GREAT SCAAAT! NOOOOOOOO!',
			'p What did I got it wrong again?',
			'y:sad Yep, you failed this one',
			'p:sad Nooo way...',
			'y:dissapointed Did you even listen to any of my teachings earlier?',
			'y:dissapointed The boolean will return True because <span style="color:aqua">Int 10</span> and <span style="color:aqua">float 10.0</span> are just as equal value that satisfys the condition',
			'y Remember.. booleans will only return <span style="color:aqua">True</span> if the comparison of two values are <span style="color:aqua">equal</span>',
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
			'p:shocked UGGGHHH!! It\'s too haard',
			'y:dissapointed we\'ll I gatta admit this one was pretty tough',
			'y:dissapointed The expression <span style="color:aqua">(x>y)</span> returns False since <span style="color:aqua">5</span> is actually less than <span style="color:aqua">10</span>',
			'y:dissapointed Then the expression <span style="color:aqua">(y<5)</span> returns <span style="color:aqua">false</span> since <span style="color:aqua">10</span> is greater than <span style="color:aqua">5</span>',
			'y:dissapointed Thus with the <span style="color:aqua">"and"</span> operator on the conditions, the boolean type that will be returning is <span style="color:aqua">False</span> since both expressions are not True',
			'y Remember.. <span style="color:aqua">"and"</span> operator only returns boolean value type <span style="color:aqua">True</span> if both statements are true',
			'hide character s with fadeOut',
			'y Don\'t worry...',
			'y:happy Let\'s go to the FINAL challenge and finish this shall we?',
			'jump fourth-b-Question',
		],
			
		'b3-False': [
			'y:happy AMAZING!',
			'p That\'s right, call me Agent. Smooth',
			'y You\'re really really good at this',
			'y The expression <span style="color:aqua">(x>y)</span> returns False since <span style="color:aqua">5</span> is actually less than <span style="color:aqua">10</span>',
			'y Then the expression <span style="color:aqua">(y<5)</span> returns <span style="color:aqua">false</span> since <span style="color:aqua">10</span> is greater than <span style="color:aqua">5</span>',
			'y Thus with the <span style="color:aqua">"and"</span> operator on the conditions, the boolean type that will be returning is <span style="color:aqua">False</span> since both expressions are not True',
			'y:happy Remember.. <span style="color:aqua">"and"</span> operator only returns boolean value type <span style="color:aqua">True</span> if both statements are true',
			'y We\'re almost there. One more to go',
			'hide character s with fadeOut',
			'y:happy Let\'s go to the FINAL challenge and finish this shall we?',
			'jump fourth-b-Question',
		],
		'fourth-b-Question':[
			'y This is it {{player.name}}, this final question will determin whether you go back into your world or get stuck here in our world',
			'y Before we proceed... I want you to know that',
			'y:happy I really had a great time assisting you in our world. So, Good luck!',
			'p Hey, I enjoyed our company together in this world as well.',
			'show character s b4q at right with fadeIn',
			{
				'Choice': {
						'Dialog': 'y what boolean value type will the problem shown above return?',
					'True': {
						'Text': 'True',
						'Do': 'jump b4-True'
						},
					'False': {
						'Text': 'False',
						'Do': 'jump b4-False'
						},
					},
			},

		],
		'b4-True':[
			'y:scat GREAT SCAT!!!',
			'p:shocked UGGGHHH!! WHAT\'S HAPPENING?!',
			'y:scat SEEMS LIKE YOUR MISTAKE IS BRINGING US BACK TO THE PREVIOUS QUESTIONS!',
			'p:shocked THA\'S NOT GOOOD!!',
			'y:scat The expression <span style="color:aqua">(x==y)</span> returns False, because <span style="color:aqua">int 3</span> is not equal to <span style="color:aqua">str \'3\'</span>',
			'y:scat Then the expression <span style="color:aqua">(x>2)</span> returns <span style="color:aqua">True</span>, because <span style="color:aqua">3</span> is greater than <span style="color:aqua">2</span>',
			'y:scat Thus with the <span style="color:aqua">"or"</span> operator on the conditions, the boolean type that will be returning is <span style="color:aqua">True</span> since one of the statements is true',
			'y:scat BUT!, with the <span style="color:aqua">"not"</span> condition on it, the returned value will be <span style="color:aqua">False</span>. Since the value from <span style="color:aqua">"or"</span> was <span style="color:aqua">True</span>',
			'y:scat Remember.. <span style="color:aqua">"or"</span> operator returns boolean value type <span style="color:aqua">True</span> if one of the statements is <span style="color:aqua">True</span>',
			'y:scat and the <span style="color:aqua">"not"</span> operator reverses the returned results, It returns <span style="color:aqua">False</span> if the result is <span style="color:aqua">True</span>',
			'hide character s with fadeOut',
			'y Don\'t worry...',
			'y:happy We\'ll get it next time',
			'jump second-b-Question',
		],
		'b4-False':[
			'y:happy YOU DID IT!!!',
			'p:happy I DID IT!!',
			'y:happy You\'re amazing!',
			'p:happy I can finally go back home to my real world!',
			'y:happy YES!, CONGRATULATIONS!',
			'y The expression <span style="color:aqua">(x==y)</span> returns False, because <span style="color:aqua">int 3</span> is not equal to <span style="color:aqua">str \'3\'</span>',
			'y Then the expression <span style="color:aqua">(x>2)</span> returns <span style="color:aqua">True</span>, because <span style="color:aqua">3</span> is greater than <span style="color:aqua">2</span>',
			'y Thus with the <span style="color:aqua">"or"</span> operator on the conditions, the boolean type that will be returning is <span style="color:aqua">True</span> since one of the statements is true',
			'y BUT!, with the <span style="color:aqua">"not"</span> condition on it, the returned value will be <span style="color:aqua">False</span>. Since the value from <span style="color:aqua">"or"</span> was <span style="color:aqua">True</span>',
			'y:happy Remember.. <span style="color:aqua">"or"</span> operator returns boolean value type <span style="color:aqua">True</span> if one of the statements is <span style="color:aqua">True</span>',
			'y:happy and the <span style="color:aqua">"not"</span> operator reverses the returned results, It returns <span style="color:aqua">False</span> if the result is <span style="color:aqua">True</span>',
			'y:happy CONGRATULATIONS YOU COMPLETED THE CHALLENGES!',
			'hide character s with fadeOut',
			'p:happy Thank\'s Catto-san',
			'p:sad I woudn\'t have made it if it wasn\'t for you',
			'y:happy You\'re welcome. I\'m proud of you and good luck on your career on your real world',
			'y:happy Till we meet again!',
			'hide character y with fadeOut',
			'jump endo',
		],
		'endo':[
			
			'show background street with fadeIn',
			'{{player.name}} got back',
			'p:shocked WOAW! I\'m BACK!',
			'p:sad I must\'ve hit my self or something..',
			'p:sad Was it all just a dream?',
			'p Oh, well.. forgot where did I left here',
			'p:shocked OH!, CRAP I\'M LATE FOR SHCOOL!!!',
			'centered <div style="color:black; background-color: rgba(2, 2, 2, 0.555)7, 7, 7) !important;"><h2>{{player.name}} Missed 4 subjects on that day...</h2></div> ',
			'centered <div style="color:black; background-color: rgba(2, 2, 2, 0.555)7, 7, 7) !important;"><h2>But {{player.name}} became the best python developer in the world</h2></div>',
			'centered <div style="color:black; background-color: rgba(2, 2, 2, 0.555)7, 7, 7) !important;"><h2>The End</h2></div>',
			'centered <div style="color:black; background-color: rgba(2, 2, 2, 0.555)7, 7, 7) !important;"><h2>THANKS FOR PLAYING</h2></div>',
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
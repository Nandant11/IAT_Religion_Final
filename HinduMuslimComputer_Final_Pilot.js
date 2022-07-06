define(['pipAPI', 'https://cdn.jsdelivr.net/gh/Nandant11/IAT_Religion_Final@main/parameters_computer.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
var posWords = API.shuffle([
            'Love', 'Cheer', 'Friend', 'Pleasure', 
            'Cheerful', 'Friendship', 'Joyful', 
            'Smiling','Excellent', 'Glad', 
            'Joy', 'Delight','Excitement', 'Laughing', 'Attractive', 
            'Fabulous', 'Glorious', 'Beautiful', 
            'Fantastic', 'Happy', 'Lovely',
            'Celebrate', 'Enjoy', 'Magnificent']);
  var negWords = API.shuffle([
            'Abuse', 'Poison', 'Sadness', 
            'Pain', 'Failure', 'Violence', 
            'Angry', 'Horrible', 'Negative', 
            'Ugly', 'Dirty', 'Evil', 'Anger', 'Disaster', 
	    'Horrific', 'Fear', 'Hate', 'Guilt',
            'Selfish', 'Hurt', 'Sick']);
	
	return iatExtension({

		category1 : {
			name : 'Muslims', //Will appear in the data.
			title : {
				media : {word : 'Muslims'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		            {word: 'Sheikh'},
                {word: 'Pathan'},
				        {word: 'Ansari'},
            	  {word: 'Khan'},
            	  {word: 'Sayied'},
            	  {word: 'Qureshi'} 
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},	
		category2 :	{
			name : 'Hindus', //Will appear in the data.
			title : {
				media : {word : 'Hindus'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		        {word: 'Desai'},
                {word: 'Prajapati'},	       
            	  {word: 'Joshi'},
            	  {word: 'Raval'},
                {word: 'Thakor'},
				        {word: 'Mehta'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		attribute1 :
		{
			name : 'Bad',
			title : {
				media : {word : 'Bad'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]},
				{word: negWords[6]},
				{word: negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Good',
			title : {
				media : {word : 'Good'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]},
				{word: posWords[6]},
				{word: posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});

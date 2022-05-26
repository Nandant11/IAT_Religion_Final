define(['pipAPI', 'https://raw.githubusercontent.com/Nandant11/IAT_Religion_Final/main/religionIAT.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    return iatExtension({
        category1 : {
            name : 'Muslim', //Will appear in the data.
            title : {
                media : {word : 'Muslim'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Khan'},
                {word: 'Hussain'},
                {word: 'Ali'},
                {word: 'Ahmad'},
                {word: 'Allah'},
                {word: 'Asif'},
                {word: 'Qadri'},
                {word: 'Karim'},
                {word: 'Habib'},
                {word: 'Ashraf'}  
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 :    {
            name : 'Hindu', //Will appear in the data.
            title : {
                media : {word : 'Hindu'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Patel'},
                {word: 'Desai'},
                {word: 'Bhavsar'},
                {word: 'Thakor'},
                {word: 'Joshi'},
                {word: 'Mehta'},
                {word: 'Prasad'},
                {word: 'Rathod'},
                {word: 'Parekh'},
                {word: 'Acharya'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
       

});


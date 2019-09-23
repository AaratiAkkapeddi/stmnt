//THESE ARE THE DEFAULT WORD BANKS
var oneBank = ["visually rich", "non-visual", "family/Inter-generational", "immersive", "hands on", "surprising", "memorable", "critical", "speculative", "educational", "compact", "funny","engaging", "inclusive", "shocking","relaxing","provocative","intuitive","illustrated","lo-poly","sarcastic","impromptu","visceral symphony","anthropophagic"]
var twoBank = ["vr", "AR", "AI", "wearable","Processing","chatbot","sculptural","Open frameworks","P5.js","interactive fiction","sketch","painting","written","analog","projection mapping","film","animated","hand made","IoT","digital","sharable","Chrome extension"]
var threeBank = ["game", "installation", "data visualization", "social experiment","manifesto","product","documentary","app","service","promotional piece","recipe","training service","collage","song","conversation","narrative","public intervention","performance","comic book","instrument","web series"]
var fourBank = ["societal", "personal", "global", "reusable", "emotional","interactive","surprising","replayable","shocking","cross-platform","thought-provoking","darkly humorous","portable","surprising","multiplayer","emapathetic","meditative","confrontational","a series","political","instructional","contrasting","overlapping","malleable","flexible","visceral","tattooed","multi-layered","foldable","adaptive","organic"]
var fiveBank = ["disconnectedness", "wealth disparity", "nature", "communication","empathy","being blind","memory","time","travel","connection","childhood","resistance","duality","resonance","decrepitude beauty","collapsible reality","separate identities merging in single entity","becoming flower","cultivating cosmos","what is beneath the surface","various kinds of rain","the prenatal experience","personification","embryonic meditation","falling from one realm into another","limitless dimension","past and future coexisting within","imperceptibly existing love","devour and be devoured","life before eating the apple of Eden","innocent devouring","finding new eye","desire to conquer the universe","floating resistance"]
var sixBank = ["children under 10", "designers", "professionals", "couples","seniors","pre-teens","teens","special needs persons","the blind","the deaf","refugees","students","teachers","the LGBTQ community","immigrants","my family","myself","gamers","art galleries","serial killers","toddlers","minorities","passionate people","dreamers","those who believe that there is something beyond this reality","anthropophagi","cosmic (wo)man","humans from the future","extra terrastrial humans and non humans","cyborgs","robots","Artificial Intelligence"]



$(document).ready(function(){
//shuffle function
	var all = ["one", "two", "three", "four", "five", "six"];
	for (var i = all.length - 1; i >= 0; i--) {
		var thing = "lock-" + all[i];

		if(localStorage.getItem(thing) == "on"){
			$("." + all[i] + " .lock").addClass('on')
		}
	}

	function shuffleText(){

		if(!$('.one .lock').hasClass('on')){
			$('.one .piece').text(oneBank[Math.floor(Math.random()*oneBank.length)]);
			var one = $('.one .piece').text()
			$('#one').text(one);
		}
		if(!$('.two .lock').hasClass('on')){
			$('.two .piece').text(twoBank[Math.floor(Math.random()*twoBank.length)]);
			var two = $('.two .piece').text()
			$('#two').text(two);
		}
		if(!$('.three .lock').hasClass('on')){
			$('.three .piece').text(threeBank[Math.floor(Math.random()*threeBank.length)]);
			var three = $('.three .piece').text()
			$('#three').text(three);
		}
		if(!$('.four .lock').hasClass('on')){
			$('.four .piece').text(fourBank[Math.floor(Math.random()*fourBank.length)]);
			var four = $('.four .piece').text()
			$('#four').text(four);
		}
		if(!$('.five .lock').hasClass('on')){
			$('.five .piece').text(fiveBank[Math.floor(Math.random()*fiveBank.length)]);
			var five = $('.five .piece').text()
			$('#five').text(five);
		}	
		if(!$('.six .lock').hasClass('on')){
			$('.six .piece').text(sixBank[Math.floor(Math.random()*sixBank.length)]);
			var six = $('.six .piece').text()
			$('#six').text(six);
		}		
		
	}
//POPULATING DROPDOWNS
	//one
	console.log(JSON.parse(localStorage.getItem('one')))

	var myOne = JSON.parse(localStorage.getItem('one')) || oneBank;
	var myTwo = JSON.parse(localStorage.getItem('two')) || twoBank;
	var myThree = JSON.parse(localStorage.getItem('three')) || threeBank;
	var myFour = JSON.parse(localStorage.getItem('four')) || fourBank;
	var myFive = JSON.parse(localStorage.getItem('five')) || fiveBank;
	var mySix = JSON.parse(localStorage.getItem('six')) || sixBank;

	for (var i = myOne.length - 1; i >= 0; i--) {
		var el = $('<div class="option"><span class="option-inner">'+myOne[i]+'</span><span class="goodbye">-</span></div>')
		$('.one .dropdown .options').append(el)
	}

	$('.one .option-inner').on('click',function(){
		$('.one .piece').text($(this).text())
		$('#one').text($(this).text())
		var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
	})
	//two
	for (var i = myTwo.length - 1; i >= 0; i--) {
		var el = $('<div class="option"><span class="option-inner">'+myTwo[i]+'</span><span class="goodbye">-</span></div>')
		$('.two .dropdown .options').append(el)
	}

	$('.two .option-inner').on('click',function(){
		$('.two .piece').text($(this).text())
		$('#two').text($(this).text())
		var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
	})
	//three
	for (var i = myThree.length - 1; i >= 0; i--) {
		var el = $('<div class="option"><span class="option-inner">'+myThree[i]+'</span><span class="goodbye">-</span></div>')
		$('.three .dropdown .options').append(el)
	}

	$('.three .option-inner').on('click',function(){
		$('.three .piece').text($(this).text())
		$('#three').text($(this).text())
		var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
	})

	//four
	for (var i = myFour.length - 1; i >= 0; i--) {
		var el = $('<div class="option"><span class="option-inner">'+myFour[i]+'</span><span class="goodbye">-</span></div>')
		$('.four .dropdown .options').append(el)
	}

	$('.four .option-inner').on('click',function(){
		$('.four .piece').text($(this).text())
		$('#four').text($(this).text())
		var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
	})
	//five
	for (var i = myFive.length - 1; i >= 0; i--) {
		var el = $('<div class="option"><span class="option-inner">'+myFive[i]+'</span><span class="goodbye">-</span></div>')
		$('.five .dropdown .options').append(el)
	}

	$('.five .option-inner').on('click',function(){
		$('.five .piece').text($(this).text())
		$('#five').text($(this).text())
		var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
	})
	//six
	for (var i = mySix.length - 1; i >= 0; i--) {
		var el = $('<div class="option"><span class="option-inner">'+mySix[i]+'</span><span class="goodbye">-</span></div>')
		$('.six .dropdown .options').append(el)
	}

	$('.six .option-inner').on('click',function(){
		$('.six .piece').text($(this).text())
		$('#six').text($(this).text())
		var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
	})



//DROPDOWN TRIGGER
	$('.dropdown-exit').on('click',function(){
		$(this).parent().removeClass('open')
		$('body').removeClass('side')
	})
	$('.dropdown-trigger').on('click',function(){
		parent = $(this).parent();
		dropdown = $(parent).find('.dropdown');
		if(dropdown.hasClass('open')){
			dropdown.removeClass('open')
			$('body').removeClass('side')
		} else{
			$('.dropdown').removeClass('open')
			dropdown.addClass('open')
			$('body').addClass('side')
		}
	})
//EXIT DROPDOWN ON CLICK OUTSIDE
	$(document).mouseup(function(e) 
	{
	    var container = $(".buttons");
	    // if the target of the click isn't the container nor a descendant of the container
	    if (!container.is(e.target) && container.has(e.target).length === 0) 
	    {
	        container.find('.dropdown').removeClass('open');
	        $('body').removeClass('side')
	    }
	});

//shuffle on page load
if(localStorage.getItem('sentence')){
	var sentence = JSON.parse(localStorage.getItem('sentence'))
	$('#one').text(sentence[0])
	$('#two').text(sentence[1])
	$('#three').text(sentence[2])
	$('#four').text(sentence[3])
	$('#five').text(sentence[4])
	$('#six').text(sentence[5])
	$('.one .piece').text(sentence[0])
	$('.two .piece').text(sentence[1])
	$('.three .piece').text(sentence[2])
	$('.four .piece').text(sentence[3])
	$('.five .piece').text(sentence[4])
	$('.six .piece').text(sentence[5])
}else{
	shuffleText()
	var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
}


//shuffle on spacebar
	$('body').keyup(function(e){
	   if(e.keyCode == 32){
	       shuffleText()
	       var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
	   }
	});
//lock on click
	$('.lock').on('click', function(){
		var thing = "lock-" + $(this).parent().attr('class').split(' ')[0]

		if($(this).hasClass('on')){
			$(this).removeClass('on');
			localStorage.setItem(thing, '')
		} else{
			$(this).addClass('on')
			localStorage.setItem(thing, 'on')
		}
	})
//ADDING TO LIST
$(".dropdown input").on('keyup', function (e) {
    if (e.keyCode === 13) {
        // Do something
        var val = $(this).val();

        var newval = []
		var options = $(this).parent().parent().find('.option-inner')
        for (var i = options.length - 1; i >= 0; i--) {
        	newval.push($(options[i]).text())
        }
        newval.push($(this).val())

        localStorage.setItem($(this).attr('data-bankk'), JSON.stringify(newval));
        
        var el = $('<div class="option"><span class="option-inner">'+$(this).val()+'</span><span class="goodbye">-</span></div>')
        $(this).parent().parent().find('.options').prepend(el)
        $(el).find('.goodbye').on('click', function(){
        	$(this).parent().remove()
        })
        $(el).find('.option-inner').on('click',function(){
        	$(this).parent().parent().parent().find('.piece').text($(this).text())
        	var myclass = $(this).parent().parent().parent().attr('class').split(' ')[0]
			$('#'+ myclass).text($(this).text())

		})

		$(this).val('')
		var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
    }
});

$(".dropdown .add").on('click', function(){
        var input = $(this).parent().find('input');
        // Do something

        var val = $(input).val();

        var newval = []
		var options = $(input).parent().parent().find('.option-inner')
        for (var i = options.length - 1; i >= 0; i--) {
        	newval.push($(options[i]).text())
        }
        newval.push($(input).val())

        localStorage.setItem($(input).attr('data-bankk'), JSON.stringify(newval));
        

        var el = $('<div class="option"><span class="option-inner">'+$(input).val()+'</span><span class="goodbye">-</span></div>')
        $(input).parent().parent().find('.options').prepend(el)
        $(el).find('.goodbye').on('click', function(){
        	$(this).parent().remove()
        })
        $(el).find('.option-inner').on('click',function(){
        	$(input).parent().parent().parent().find('.piece').text($(input).text())
        	var myclass = $(input).parent().parent().parent().attr('class').split(' ')[0]
			$('#'+ myclass).text($(input).text())

		})
		$(input).val('')
    
        var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
})
//REMOVING FROM LIST
$('.goodbye').on('click',function(){
	var optioncontainer = $(this).parent().parent()
	$(this).parent().remove()
    var newval = []
	var options = $(optioncontainer).find('.option-inner')
    for (var i = options.length - 1; i >= 0; i--) {
    	newval.push($(options[i]).text())
    }

    localStorage.setItem($(optioncontainer).parent().find('input').attr('data-bankk'), JSON.stringify(newval));
    console.log($(optioncontainer).parent().find('input').attr('data-bankk'))
})
//RESTORING DEFAULTS
$('.restore').on('click', function(){
	console.log('i clicked')
	$(this).parent().find('.option').remove();

	localStorage.setItem($(this).attr('data-bank'), null);
   
	if($(this).attr('data-bank') == 'one'){
		for (var i = oneBank.length - 1; i >= 0; i--) {
			var el = $('<div class="option"><span class="option-inner">'+oneBank[i]+'</span><span class="goodbye">-</span></div>')
			$('.one .dropdown').append(el)
		}
		$('.one .option-inner').on('click',function(){
			$('.one .piece').text($(this).text())
			$('#one').text($(this).text())
		})
	} else if($(this).attr('data-bank') == 'two'){
		for (var i = twoBank.length - 1; i >= 0; i--) {
			var el = $('<div class="option"><span class="option-inner">'+twoBank[i]+'</span><span class="goodbye">-</span></div>')
			$('.two .dropdown').append(el)
		}
		$('.two .option-inner').on('click',function(){
			$('.two .piece').text($(this).text())
			$('#two').text($(this).text())
		})
	}else if($(this).attr('data-bank') == 'three'){
		for (var i = threeBank.length - 1; i >= 0; i--) {
			var el = $('<div class="option"><span class="option-inner">'+threeBank[i]+'</span><span class="goodbye">-</span></div>')
			$('.three .dropdown').append(el)
		}
		$('.three .option-inner').on('click',function(){
			$('.three .piece').text($(this).text())
			$('#three').text($(this).text())
		})

	}else if($(this).attr('data-bank') == 'four'){
		for (var i = fourBank.length - 1; i >= 0; i--) {
			var el = $('<div class="option"><span class="option-inner">'+fourBank[i]+'</span><span class="goodbye">-</span></div>')
			$('.four .dropdown').append(el)
		}
		$('.four .option-inner').on('click',function(){
			$('.four .piece').text($(this).text())
			$('#four').text($(this).text())
		})

	}else if($(this).attr('data-bank') == 'five'){
		for (var i = fiveBank.length - 1; i >= 0; i--) {
			var el = $('<div class="option"><span class="option-inner">'+fiveBank[i]+'</span><span class="goodbye">-</span></div>')
			$('.five .dropdown').append(el)
		}
		$('.five .option-inner').on('click',function(){
			$('.five .piece').text($(this).text())
			$('#five').text($(this).text())
		})

	}else if($(this).attr('data-bank') == 'six'){
		for (var i = sixBank.length - 1; i >= 0; i--) {
			var el = $('<div class="option"><span class="option-inner">'+sixBank[i]+'</span><span class="goodbye">-</span></div>')
			$('.six .dropdown').append(el)
		}

		$('.six .option-inner').on('click',function(){
			$('.six .piece').text($(this).text())
			$('#six').text($(this).text())
		})

		

	}
	var sentence = [$('#one').text(),$('#two').text(),$('#three').text(),$('#four').text(),$('#five').text(),$('#six').text()]
		localStorage.setItem('sentence',JSON.stringify(sentence))
	$('.goodbye').on('click',function(){
	$(this).parent().remove()
})
})

})
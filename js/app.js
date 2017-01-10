////////////////////////////
// App
////////////////////////////


$(document).ready(function() {
	addTabEvents()
	loadInitialMovies()
})

// Hard-coded page navigation based on tab clicking
function addTabEvents() {
	$('#watchlist-tab').click(function() {
		$('#tabs a').removeClass('active')
		$('#watchlist-tab a').addClass('active')
		$('section').addClass('hidden')
		$('#watchlist').removeClass('hidden')
	})
	$('#history-tab').click(function() {
		$('#tabs a').removeClass('active')
		$('#history-tab a').addClass('active')
		$('section').addClass('hidden')
		$('#history').removeClass('hidden')
	})
	$('#all-movies-tab').click(function() {
		$('#tabs a').removeClass('active')
		$('#all-movies-tab a').addClass('active')
		$('section').addClass('hidden')
		$('#all-movies').removeClass('hidden')
	})
}

// Queries firebase for initial data
function loadInitialMovies() {
	var watchlistUrl = 'https://moviehistory-githappens.firebaseio.com/watchlist.json'
	var historyUrl = 'https://moviehistory-githappens.firebaseio.com/history.json'
	var movie
	var p1 = new Promise(function(res, rej) {
		$.getJSON(watchlistUrl, (data) => res(data))
	})
	p1.then(populateWatchlist)
	var p2 = new Promise(function(res, rej) {
		$.getJSON(historyUrl, (data) => res(data))
	})
	p2.then(populateHistory)
}

// Uses handlebar template to create cards
function populateWatchlist(watchlist) {
	var templateHTML = $('#card-template').html()
	var template = Handlebars.compile(templateHTML)

	for(var movie in watchlist) {
		card = template(watchlist[movie])
		$('#watchlist .movie-cards .row').append(card)
		$('#all-movies .movie-cards .row').append(card)
	}
}

// Uses handlebar template to create cards
function populateHistory(history) {
	var templateHTML = $('#card-template').html()
	var template = Handlebars.compile(templateHTML)

	for(var movie in history) {
		card = template(history[movie])
		$('#history .movie-cards .row').append(card)
		$('#all-movies .movie-cards .row').append(card)
	}
}















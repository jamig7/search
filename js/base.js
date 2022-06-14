/*	GOOGLE
	----------------------------------------------------- */

eng.google = {
	pageTitle: "SearXNG",
	logo: "google.png",
	places: {
		'Web'    : ["https://searx.tiekoetter.com/search?q=%query%", false],
		'Images' : ["https://searx.tiekoetter.com/search?=%query%&category_images=on", false],
		'Maps'   : ["https://searx.tiekoetter.com/search?=%query%&category_map=on", false]
	}
};


/*	WIKIPEDIA
	----------------------------------------------------- */
	
eng.wikipedia = {
	pageTitle: "Wikiless",
	logo: "wikipedia.png",
	places: {
		'Search'        : ["https://wikiless.org/w/index.php?search=%query%&title=Special%3ASearch&fulltext=Search", false],
		'Go to Article' : ["https://wikiless.org/w/Special:Search?search=%query%&go=Go", false],
	}
};


/*	YOUTUBE
	----------------------------------------------------- */

eng.youtube = {
	pageTitle: "Invidious",
	logo: "youtube.png",
	places: {
		'Videos' : ["https://invidious.tiekoetter.com/search?q=%query%", false]
	},
};


/*	TWITTER
	----------------------------------------------------- */

eng.twitter = {
	pageTitle: "Twitter",
	logo: "twitter.png",
	places: {
		'Search Twitter' : ["https://nitter.tiekoetter.com/search?f=tweets&q=%query%&since=&until=&near=", false]
	}
};

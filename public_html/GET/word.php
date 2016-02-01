<?php

header('Content-Type: application/json');

require '../../vendor/autoload.php';


// config.inc.php should include Twitter OAuth info
require '../../config.inc.php';


/**
 * Searches a sentence for words of a desired length 
 *
 * @param {integer} $length The length of words you want 
 * @param {string} $source A sentence containing many words 
 *
 * @return {array} 
 */
function extractNLengthWords( $length, $source ){

	// Construct a regex pattern that finds only the 7 letter words with regular characters
	$pattern = '/\b[A-Za-z0-9]{' . $length . '}\b/';

	// Define array variable to store matches
	$matchData = [];

	// Regex find all the correct length words
	preg_match_all( $pattern, $source, $matchData );

	// Return the actual matches
	return $matchData[0];
	
}



/**
 * Sticks all the items from second array to the first array and returns it. 
 * A faster method than array_merge which copies both array
 *
 * @param {array} $firstArray 
 * @param {array} $secondArray 
 */
function array_concat( $firstArray, $secondArray ){
	$iLimit = count($secondArray);
	for( $i = 0; $i < $iLimit; $i++ ){
		$firstArray[] = $secondArray[$i];
	}
	return $firstArray;
}



use Abraham\TwitterOAuth\TwitterOAuth;


// Open connection to Twitter
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);


// Get a bunch of Tweets about fish 
$statusData = $connection->get("search/tweets", ["q" => 'fish', "count" => 25,  "lang" => 'en' ]);


// Extract the statuses from the object
$statuses = $statusData->statuses;


// Array to hold appropriate words
$words = [];


// Iterate over the statuses
foreach( $statuses as $status ){
	$words = array_concat($words, extractNLengthWords( 7, $status->text ) );
}


// Iterate over the words, converting them to lowercase
foreach( $words as &$word ){
	$word = strtolower( $word );
}


// Remove duplicates
$words = array_unique($words);


// Echo out a random item from our array of words
echo '{ "word": "' . $words[array_rand($words)] . '" }';

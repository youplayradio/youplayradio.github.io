var search;
var category = "music";
var results;
var currentVideo;
var currentIndex;
var videoIDs, ctags, htags, stags, ptags, wtags = [];
var removedVideos = [];
var currentStatus = 0;
var currentVolume = 50;
var key = "AIzaSyBcZQayQhTZJPfo6w0cGhIVChLqAl8gtgs";

function searchVideos() {
    var searchURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&key="+key+"&maxResults=50";
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", searchURL, false );
    xmlHttp.send();
    results = xmlHttp.responseText;

    results = $.parseJSON(results);
    currentIndex = 0;
    parseResults();

}

function searchVideosMoods() {
    var searchURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&key="+key+"&maxResults=50";

    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", searchURL, false );
    xmlHttp.send();
    results = xmlHttp.responseText;

    results = $.parseJSON(results);
    parseResultsMoods();
}

function parseResultsMoods() {

    $.each(results.items, function(item) {
        if(results.items[item].id.videoId != null && results.items[item].id.videoId != undefined){
            if(removedVideos.indexOf(results.items[item].id.videoID) == -1)
                videoIDs.push(results.items[item].id.videoId);
        }
    });

    var nextPageToken = results.nextPageToken;

    var searchURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&key="+key+"&maxResults=50&pageToken="+nextPageToken;
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", searchURL, false );
    xmlHttp.send();
    results = xmlHttp.responseText;
    //console.log(results);
    results = $.parseJSON(results);

    $.each(results.items, function(item) {
        if(results.items[item].id.videoId != null && results.items[item].id.videoId != undefined){
            if(removedVideos.indexOf(results.items[item].id.videoID) == -1)
                videoIDs.push(results.items[item].id.videoId);
        }
    });

}

function setChill() {
    videoIDs = [];
    shufflectags();

    for(var i=0;i<3;i++) {
        search = ctags[i]+ " music";
        searchVideosMoods();
    }
    currentIndex = 0;
    shuffleArray();
    //embedVideo();
}
function setHappy() {
    videoIDs = [];
    shufflehtags();

    for(var i=0;i<3;i++) {
        search = htags[i]+ " music";
        searchVideosMoods();
    }
    currentIndex = 0;
    shuffleArray();
    //embedVideo();
}
function setStudying() {
    videoIDs = [];
    shufflestags();

    for(var i=0;i<3;i++) {
        search = stags[i]+ " music";
        searchVideosMoods();
    }
    currentIndex = 0;
    shuffleArray();
    //embedVideo();
}
function setParty() {
    videoIDs = [];
    shuffleptags();

    for(var i=0;i<3;i++) {
        search = ptags[i]+ " music";
        searchVideosMoods();
    }
    currentIndex = 0;
    shuffleArray();
    //embedVideo();
}
function setWorkout() {
    videoIDs = [];
    shufflewtags();

    for(var i=0;i<3;i++) {
        search = wtags[i]+ " music";
        searchVideosMoods();
    }
    currentIndex = 0;
    shuffleArray();
    //embedVideo();
}
function setSearch() {
    search = document.getElementById("search").value + " music";
    videoIDs = [];
    searchVideos();
}

function getVideosMoods() {}

function parseResults() {
    console.log(results);
    $.each(results.items, function(item) {
        if(results.items[item].id.videoId != null && results.items[item].id.videoId != undefined)
        {
            if(removedVideos.indexOf(results.items[item].id.videoId) == -1) {
                videoIDs.push(results.items[item].id.videoId);
            }

        }
    });

    shuffleArray();

    var searchURL = "https://gdata.youtube.com/feeds/api/videos/"+videoIDs[0]+"?v=1";

    var xmlHttp = null;

    /*xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", searchURL, false );
    xmlHttp.send( null );
    results = xmlHttp.responseText;

    var splits = results.split("duration='");
    splits.splice(0, 1);
    results = splits[0];
    var loc = results.indexOf("'"); IF DURATION IS GREATER THAN 500
    var duration = results.substring(0,loc);

    if (duration > 500) {}
    */

}

function shuffleArray() {
    var array = videoIDs;

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    videoIDs = array;

    embedVideo();
}

function shufflectags() {
    var array = ctags;

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    ctags = array;
}

function shufflehtags() {
    var array = htags;

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    htags = array;
}

function shufflestags() {
    var array = stags;

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    stags = array;
}

function shuffleptags() {
    var array = ptags;

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    ptags = array;
}

function shufflewtags() {

    var array = wtags;

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    wtags = array;
}

function embedVideo() {
    currentStatus=1;
    if(currentStatus == 1)
    {
        changeBackground();
    }
    if(videoIDs.length == 0)
        alert("No results found!");
    $('#videoplayer').empty();
    currentVideo = videoIDs[currentIndex];
    if(currentVideo == null || currentVideo == undefined){
    }
        //alert("No results found!");
    else {
        $('#videoplayer').append("<iframe width='560' id='idank' height='310' src='http://www.youtube.com/embed/"+currentVideo+"?&fs=0&controls=0&autohide=1&color=white&autoplay=1&version=3&enablejsapi=1&iv_load_policy=3' frameborder='0' ></iframe>");
    }

    onYouTubeIframeAPIReady();
    changeVolume();
}

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('idank', {
    events: {
      'onStateChange': onPlayerStateChange,
      'onReady': changeVolume
    }
  });
}

function onSliderChange(sliderVal) {
    currentVolume = sliderVal;
    player.setVolume(currentVolume);
}

function changeVolume(event) {
    player.setVolume(currentVolume);
    //p
}

function pause() {
    player.pauseVideo();
}

function play() {
    player.playVideo();
}

function onPlayerStateChange(event) {
    if(YT.PlayerState.ENDED == event.data){
        nextSong();
    }
}

function flagged() {
    if(currentVideo == null || currentVideo == undefined)
        alert("No video to flag!");
    else {
         //$('#flagger').attr('href', "mailto:youplayradio@gmail.com?Subject=Flagged%20Video&Body=Link:%20http://youtube.com/watch/"+currentVideo);
    var videoLink = "http://youtube.com/watch/"+currentVideo;
    var searchText = search;
    var id = currentVideo;

	            /*$.ajax({
	                url: 'http://clubbedinapp.com/ypr/submitflag.php',
	                crossDomain: true,
	                type: 'post',
	                data: {
                        "link": videoLink,
                       "search": searchText,
                        "id": id
                    },
	                success: function (data) {
	                	alert("Video has been flagged for being irrelevant. Awaiting moderation...");
	                },
	                error: function (data) {
						alert("Error: Could Not Flag Video");
					}
        });*/
    //window.location=document.getElementById('flagger').href;
    }
}

function nextSong() {
    currentIndex++;
    currentVideo = videoIDs[currentIndex];
    embedVideo();
}

function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    console.log("mobile");
  }
}

function httpGet(){
    var xmlHttp = null;
    var theUrl = "https://youplayradio.firebaseio.com/.json";

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",theUrl,false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function getData(){
    detectmob();
    var json = httpGet();
    json = jQuery.parseJSON(json);

    stags = json.StudyTags; ctags = json.ChillTags; htags = json.HappyTags; ptags = json.PartyTags; wtags = json.WorkOutTags;

    for(var i=0;i<stags.length;i++)
    {
     if(stags[i] == null)
         stags.splice(i,1);
    }
    for(var i=0;i<htags.length;i++)
    {
     if(htags[i] == null)
         htags.splice(i,1);
    }
    for (var i=0;i<ptags.length;i++)
    {
     if(ptags[i] == null)
         ptags.splice(i,1);
    }
    for (var i=0;i<wtags.length;i++){
     if(wtags[i] == null)
         wtags.splice(i,1);
    }
    for (var i=0; i<ctags.length;i++)
    {
        if(ctags[i] == null)
         ctags.splice(i,1);
    }
    	          /* $.ajax({
	                url: 'http://clubbedinapp.com/ypr/getremoved.php',
	                crossDomain: true,
	                type: 'post',
                    async: false,
	                success: function (data) {
                        var json = jQuery.parseJSON(data);
                        for(var i=0; i<json.length; i++)
                        {
                            removedVideos.push(json[i]);
                        }
	                }
	            });*/
}

function changeBackground() {
    $('#videoplayer').css({"background":"#000"});
}

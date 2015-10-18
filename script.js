function tweet(){
  a = document.getElementById('quote').innerHTML;
  a = a.replace(/(<([^>]+)>)/ig, "");
  window.open("https://twitter.com/intent/tweet?text=" + a);
}
! function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');

$(document).ready(function(){
  generate();
  function generate(){
    var quotes = [
      "<h3>The most difficult thing is the decision to act, the rest is merely tenacity. @—Amelia Earhart</h3>","<h3>The most common way people give up their power is by thinking they don’t have any. @—Alice Walker</h3>","<h3>When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. @—Henry Ford</h3>","<h3>I am not a product of my circumstances. I am a product of my decisions. @—Stephen Covey</h3>",
      "<h3>Strive not to be a success, but rather to be of value. @—Albert Einstein</h3>","<h3>I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. @—Michael Jordan</h3>","<h3>Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. @—Mark Twain</h3>","<h3>Whatever the mind of man can conceive and believe, it can achieve. @—Napoleon Hill</h3>",
      "<h3>Do or do not. There is no try. @—Yoda</h3>","<h3>Too many of us are not living our dreams because we are living our fears. @—Les Brown</h3>","<h3>To handle yourself, use your head; to handle others, use your heart. @—Eleanor Roosevelt</h3>","<h3>Believe you can and you’re halfway there. @—Theodore Roosevelt</h3>",
      "<h3>I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. @—Jimmy Dean</h3>","<h3>Remember no one can make you feel inferior without your consent. @—Eleanor Roosevelt</h3>","<h3>If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. @—Oprah Winfrey</h3>","<h3>Life is 10% what happens to me and 90% of how I react to it. @—Charles Swindoll</h3>",
      "<h3>Perfection is not attainable, but if we chase perfection we can catch excellence. @—Vince Lombardi</h3>","<h3>Whether you think you can or you think you can’t, you’re right. @—Henry Ford</h3>","<h3>Nothing is impossible, the word itself says “I’m possible”! @—Audrey Hepburn</h3>","<h3>Nothing is impossible, the word itself says “I’m possible”! @—Audrey Hepburn</h3>"
    ];
    randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteAuthor = randomQuote.replace(/(<([^>]+)>)/ig, "").split("@");
    var a = $('.saying').text(quoteAuthor[0]);
    var b = $('.author').text(quoteAuthor[1]);
  }
  $('.button').click(function(){
    generate();
  });
  
});

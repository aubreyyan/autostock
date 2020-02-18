let tweets = [
    "The rumor that I'm building a spaceship to get back to my home planet Mars is totally untrue",
    "A ceiling is simply a floor from below",
    "His name is Gary & he’s a snail",
    "Evian, the first bottled water, is naive spelled backwards",
    "My Twitter is pretty much complete nonsense at this point",
    "If life is a video game, the graphics are great, but the plot is confusing & the tutorial is way too long",
    "the color orange is named after the fruit",
    "Door hinge",
    "Tesla blows haha",
    "Technically, alcohol is a solution",
    "Why is there no Flat Mars Society!?",
    "When I was in college, I wanted to be involved in things that would change the world. Now I am."
];

let content = tweets[Math.floor(Math.random() * tweets.length)] + " @elonmusk";

let ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('p').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});

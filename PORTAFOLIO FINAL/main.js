let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString(' "Depositare tus opiniones en una cuenta bancaría y veré si en un par de años genera algún tipo de interes')
.pauseFor(200)
.deleteChars(10)
.start();
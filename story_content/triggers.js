function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6m0FbRYJHJb":
        Script1();
        break;
      case "6UaIHtuphfV":
        Script2();
        break;
      case "6geu2Ehwp0x":
        Script3();
        break;
      case "6EOrfV2I64q":
        Script4();
        break;
      case "69f7EiD65nE":
        Script5();
        break;
      case "6STL0PabVZ0":
        Script6();
        break;
      case "6qZE5rbMgmI":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('641EUVI7WgR');
const duration = 750;
const easing = 'ease-out';
const id = '6LbQlyxc3kB';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('641EUVI7WgR');
const duration = 750;
const easing = 'ease-out';
const id = '6LbQlyxc3kB_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5eC8SYF1Sdb');
const duration = 750;
const easing = 'ease-out';
const id = '6Eqx0EheG1O';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5eC8SYF1Sdb');
const duration = 750;
const easing = 'ease-out';
const id = '6Eqx0EheG1O_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6JlMknrUmri');
const duration = 750;
const easing = 'ease-out';
const id = '6cm0wIHMYg7';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6JlMknrUmri');
const duration = 750;
const easing = 'ease-out';
const id = '6WXFEc4AdRu';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6HflRsPYHLD');
const duration = 750;
const easing = 'ease-out';
const id = '5p73cNmV8JR';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};

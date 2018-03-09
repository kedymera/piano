var osc;
var volSlider;
var vol = 0.1;
var bottomFreq = 400;

var kbKeys = ["A", "S", "D", "F", "G", "H", "J", "K"];
var keys = [];

function setup()
{
	noCanvas();
	volSlider = createSlider(0, 1, 0.1, 0.01);

	for (var i = 0; i < 8; i++)
	{
		var newkey = new Key(440 * pow(2, i/12.0), kbKeys[i]);
		keys.push(newkey);
	}
}

function draw()
{
	for (var i = 0; i < 8; i++)
	{
		keys[i].volume(volSlider.value());
	}
}

function keyPressed()
{
	for (var i = 0; i < 8; i++){
		if (keyCode == kbKeys[i].charCodeAt(0))
		{
			keys[i].start();
		}
	}
}

function keyReleased()
{
	for (var i = 0; i < 8; i++){
		if (keyCode == kbKeys[i].charCodeAt(0))
		{
			keys[i].stop();
		}
	}
}
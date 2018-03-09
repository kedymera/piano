function Key(freq, key)
{
	this.osc = new p5.Oscillator();
	this.osc.setType("sine");
	this.osc.amp(0.1);
	this.osc.freq(freq);
	this.note = "X";

	this.key = key;

	this.start = function()
	{
		this.osc.start();
		console.log("starting osc");
	}

	this.stop = function()
	{
		this.osc.stop();
		console.log("stopping osc");
	}

	this.volume = function(vol)
	{
		this.osc.amp(vol);
	}
}
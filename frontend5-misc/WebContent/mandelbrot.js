function Mandelbrot(canvas) {
	this.canvas = canvas;
    this.width = 900;
	this.height = 600;
}

Mandelbrot.prototype.loadForm = function(dataForm) {
	this.xmin = parseFloat(dataForm.xmin.value);
	this.xmax = parseFloat(dataForm.xmax.value);
	this.ymin = parseFloat(dataForm.ymin.value);
	this.ymax = parseFloat(dataForm.ymax.value);
    this.iterations = parseInt(dataForm.iterations.value);
};

Mandelbrot.prototype.iter = function(cx, cy, maxiter)
{
  var i;
  var x = 0.0;
  var y = 0.0;
  for (i = 0; i < maxiter && x*x + y*y <= 4; ++i)
  {
    var tmp = 2*x*y;
    x = x*x - y*y + cx;
    y = tmp + cy;
  }
  return i;
};
 
Mandelbrot.prototype.calculate = function()
{
  var ctx = this.canvas.getContext("2d");
  var img = ctx.getImageData(0, 0, this.width, this.height);
  var pix = img.data;
  for (var ix = 0; ix < this.width; ++ix)
    for (var iy = 0; iy < this.height; ++iy)
    {
      var x = this.xmin + (this.xmax-this.xmin)*ix/(this.width-1);
      var y = this.ymin + (this.ymax-this.ymin)*iy/(this.height-1);
      var i = this.iter(x, y, this.iterations);
      var ppos = 4*(900*iy + ix);
      if (i == this.iterations)
      {
        pix[ppos] = 0;
        pix[ppos+1] = 0;
        pix[ppos+2] = 0;
      }
      else
      {
        var c = 3*Math.log(i)/Math.log(this.iterations - 1.0);
        if (c < 1)
        {
          pix[ppos] = 255*c;
          pix[ppos+1] = 0;
          pix[ppos+2] = 0;
        }
        else if (c < 2)
        {
          pix[ppos] = 255;
          pix[ppos+1] = 255*(c-1);
          pix[ppos+2] = 0;
        }
        else
        {
          pix[ppos] = 255;
          pix[ppos+1] = 255;
          pix[ppos+2] = 255*(c-2);
        }
      }
      pix[ppos+3] = 255;
    }
    ctx.putImageData(img,0,0);
}
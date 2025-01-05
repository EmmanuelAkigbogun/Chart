export let nthlineyfxpositive = (index, linewidthval, color,context) => {
      let ctx = context.ctx;
      let canvas = context.canvas;
      let yoriginbottom = context.yoriginbottom;
      let mark = context.mark;
      let xoriginleft = context.xoriginleft;
      let xoriginright = context.xoriginright;
      let chartbeginx = context.chartbeginx;
      let constantleft = context.constantleft;
      let constantright = context.constantright;
      let constantbottom = context.constantbottom;
      let dashy = context.dashy;
  ctx.current.strokeStyle = color;
  ctx.current.lineWidth = linewidthval;
  ctx.current.setLineDash([dashy.current]);
  ctx.current.moveTo(
    xoriginleft.current + constantleft.current + chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      index * mark.current -
      yoriginbottom.current
  );
  ctx.current.lineTo(
    canvas.current.width - xoriginright.current - constantright.current,
    canvas.current.height -
      constantbottom.current -
      index * mark.current -
      yoriginbottom.current
  );
  ctx.current.stroke();
};
export let nthlineyfxnegative = (index, linewidthval, color,context) => {
      let ctx = context.ctx;
      let canvas = context.canvas;
      let yoriginbottom = context.yoriginbottom;
      let mark = context.mark;
      let xoriginleft = context.xoriginleft;
      let xoriginright = context.xoriginright;
      let chartbeginx = context.chartbeginx;
      let constantleft = context.constantleft;
      let constantright = context.constantright;
      let constantbottom = context.constantbottom;
      let dashy = context.dashy;
  ctx.current.strokeStyle = color;
  ctx.current.lineWidth = linewidthval;
  ctx.current.setLineDash([dashy.current]);
  ctx.current.moveTo(
    xoriginleft.current + constantleft.current + chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      index * mark.current -
      yoriginbottom.current
  );
  ctx.current.lineTo(
    canvas.current.width - xoriginright.current - constantright.current,
    canvas.current.height -
      constantbottom.current -
      index * mark.current -
      yoriginbottom.current
  );
  ctx.current.stroke();
};
export let lineyfx = (context) => {
      let ctx = context.ctx;
      let maximum = context.maximum;
      let minimum = context.minimum;
      let increment = context.increment;

  ctx.current.beginPath();
  ctx.current.save();
  //first line
  nthlineyfxpositive(0, "0.5", "rgb(158,158,158,.3)",context);
  if (maximum.current > 0) {
    //other lines
    for (
      let index = 1;
      index < parseInt(maximum.current / increment.current) + 2;
      index++
    ) {
      nthlineyfxpositive(index, "0.5", "rgb(158,158,158,.3)",context);
    }
  }
  //first line
  //nthlineyfxnegative(0, "0.5", "rgb(158,158,158,.3)");
  if (minimum.current < 0) {
    //other lines
    for (
      let index = parseInt(minimum.current / increment.current) - 1;
      index < 1;
      index++
    ) {
      nthlineyfxnegative(index, "0.5", "rgb(158,158,158,.3)",context);
    }
    for (
      let index = parseInt(minimum.current / increment.current) - 1;
      index < 1;
      index++
    ) {
      nthlineyfxnegative(index, "0.5", "rgb(158,158,158,.3)",context);
    }
  }
  ctx.current.restore();
  ctx.current.closePath();
};

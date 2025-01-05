export let nthlinexfxnegative = (index, linewidthval, color, context) => {
      let ctx = context.ctx;
      let canvas = context.canvas;
    
      let minimum = context.minimum;

      let yoriginbottom = context.yoriginbottom;
      let wid = context.wid;
      let increment = context.increment;
      let mark = context.mark
      let gap = context.gap;
      let xoriginleft = context.xoriginleft;
      let chartbeginx = context.chartbeginx;
      let constantleft = context.constantleft;
      let constantbottom = context.constantbottom;
  ctx.current.strokeStyle = color;
  ctx.current.lineWidth = linewidthval;
  ctx.current.moveTo(
    index * (wid.current + gap.current) +
      constantleft.current +
      xoriginleft.current +
      chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      (parseInt(minimum.current / increment.current) - 1) * mark.current -
      yoriginbottom.current
  );
  ctx.current.lineTo(
    index * (wid.current + gap.current) +
      xoriginleft.current +
      constantleft.current +
      chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      0 * mark.current -
      yoriginbottom.current
  );
  ctx.current.stroke();
};
export let nthlinexfxpositive = (index, linewidthval, color,context) => {
          let ctx = context.ctx;
          let canvas = context.canvas;

          let maximum = context.minimum;

          let yoriginbottom = context.yoriginbottom;
          let wid = context.wid;
          let increment = context.increment;
          let mark = context.mark;
          let gap = context.gap;
          let xoriginleft = context.xoriginleft;

          let chartbeginx = context.chartbeginx;
          let constantleft = context.constantleft;

          let constantbottom = context.constantbottom;
  ctx.current.strokeStyle = color;
  ctx.current.lineWidth = linewidthval;
  ctx.current.moveTo(
    index * (wid.current + gap.current) +
      xoriginleft.current +
      constantleft.current +
      chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      0 * mark.current -
      yoriginbottom.current
  );
  ctx.current.lineTo(
    index * (wid.current + gap.current) +
      xoriginleft.current +
      constantleft.current +
      chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      (parseInt(maximum.current / increment.current) + 1) * mark.current -
      yoriginbottom.current
  );
  ctx.current.stroke();
};
// canvas.current.height - constantbottom.current - 0 * mark.current - yoriginbottom.current
export let linexfx = (context) => {
      let ctx = context.ctx;
      let maximum = context.maximum;
      let minimum = context.minimum;
      let data = context.data;
      let dashx = context.dashx;
  ctx.current.beginPath();
  ctx.current.setLineDash([dashx.current]);
  if (maximum.current > 0) {
    //first line
    nthlinexfxpositive(0, "0.5", "rgb(158,158,158,.3)",context);
    //other lines
    for (let index = 1; index < data.current.length + 1; index++) {
      nthlinexfxpositive(index, "0.5", "rgb(158,158,158,.3)",context);
    }
  }
  if (minimum.current < 0) {
    //first line
    nthlinexfxnegative(0, "0.5", "rgb(158,158,158,.3)",context);
    //other lines
    for (let index = 1; index < data.current.length + 1; index++) {
      nthlinexfxnegative(index, "0.5", "rgb(158,158,158,.3)",context);
    }
  }
  ctx.current.restore();
  ctx.current.closePath();
};

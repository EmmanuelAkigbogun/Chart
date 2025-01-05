export let textyfxpositive = (index, color, colorfill, font,context) => {
  let ctx = context.ctx;
  let canvas = context.canvas;
  let yoriginbottom = context.yoriginbottom;
  let increment = context.increment;
  let mark = context.mark;
  let precision = context.precision;
  let xoriginleft = context.xoriginleft;
  let constantleft = context.constantleft;
  let constantbottom = context.constantbottom;
  let begintexty = context.begintexty;
  let textval =
    index * increment.current.toString().includes(".")
      ? (index * increment.current).toPrecision(precision.current)
      : index * increment.current;
  ctx.current.beginPath();
  ctx.current.lineWidth = ".2";
  ctx.current.letterSpacing = "1px";
  //ctx.current.strokeStyle = color;
  ctx.current.fillStyle = colorfill;
  ctx.current.font = font;
  //text y axiz stroke
  ctx.current.strokeText(
    textval,
    begintexty.current +
      xoriginleft.current +
      constantleft.current -
      ctx.current.measureText(textval).width,
    canvas.current.height -
      constantbottom.current -
      index * mark.current -
      yoriginbottom.current +
      ctx.current.measureText(index * increment.current).hangingBaseline / 2
  );
  ctx.current.stroke();
  //text y axiz fill
  ctx.current.fillText(
    textval,
    begintexty.current +
      xoriginleft.current +
      constantleft.current -
      ctx.current.measureText(textval).width,
    canvas.current.height -
      constantbottom.current -
      index * mark.current -
      yoriginbottom.current +
      ctx.current.measureText(index * increment.current).hangingBaseline / 2
  );
  ctx.current.fill();
  ctx.current.closePath();
};
export let textyfxnegative = (index, color, colorfill, font,context) => {
      let ctx = context.ctx;
      let canvas = context.canvas;
      let yoriginbottom = context.yoriginbottom;
      let increment = context.increment;
      let mark = context.mark;
      let precision = context.precision;
      let xoriginleft = context.xoriginleft;
      let constantleft = context.constantleft;
      let constantbottom = context.constantbottom;
      let begintexty = context.begintexty;
  let textval =
    index * increment.current.toString().includes(".")
      ? (index * increment.current).toPrecision(precision.current)
      : index * increment.current;
  ctx.current.beginPath();
  ctx.current.lineWidth = ".2";
  ctx.current.letterSpacing = "1px";
  ctx.current.strokeStyle = color;
  ctx.current.fillStyle = colorfill;
  ctx.current.font = font;
  //text y axiz stroke
  ctx.current.strokeText(
    textval,
    begintexty.current +
      xoriginleft.current +
      constantleft.current -
      ctx.current.measureText(textval).width,
    canvas.current.height -
      constantbottom.current -
      index * mark.current -
      yoriginbottom.current +
      ctx.current.measureText(index * increment.current).hangingBaseline / 2
  );
  ctx.current.stroke();
  //text y axiz fill
  ctx.current.fillText(
    textval,
    begintexty.current +
      xoriginleft.current +
      constantleft.current -
      ctx.current.measureText(textval).width,
    canvas.current.height -
      constantbottom.current -
      index * mark.current -
      yoriginbottom.current +
      ctx.current.measureText(index * increment.current).hangingBaseline / 2
  );
  ctx.current.fill();
  ctx.current.closePath();
};
export let textyfx = (context) => {
      let maximum = context.maximum;
      let minimum = context.minimum;
      let increment = context.increment;
      let fontguy = context.fontguy;
  textyfxpositive(
    0,
    "white",
    "rgb(158,158,158)",
    fontguy.current + "px sans-serif",
    context
  );
  if (maximum.current > 0) {
    for (
      let index = 1;
      index < parseInt(maximum.current / increment.current) + 2;
      index++
    ) {
      textyfxpositive(
        index,
        "white",
        "rgb(158,158,158)",
        fontguy.current + "px sans-serif",
        context
      );
    }
  }
  if (minimum.current < 0) {
    for (
      let index = parseInt(minimum.current / increment.current) - 1;
      index < 1;
      index++
    ) {
      textyfxnegative(
        index,
        "white",
        "rgb(158,158,158)",
        fontguy.current + "px sans-serif",
        context
      );
    }
  }
};

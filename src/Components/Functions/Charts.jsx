import { linexfx } from "./Linex";
import { lineyfx } from "./Liney";
import { bars } from "./Bars";
import { shadowoff } from "./Component";
import { textxfx } from "./Textx";
import { textyfx } from "./Texty";
export let barChart = (xax, yax,context) => {
    let ctx = context.ctx;
    let canvas = context.canvas;
    let maximum = context.maximum;

    let list = context.list;
    let data = context.data;
  
    let yorigintop = context.yorigintop;
    let yoriginbottom = context.yoriginbottom;
 
    let wid = context.wid;
    let maxormin = context.maxormin;
  
    let increment = context.increment;
   
    let scaley = context.scaley;
  
    let precision = context.precision;
 
    let gap = context.gap;
 
    let xoriginleft = context.xoriginleft;
    let xoriginright = context.xoriginright;
    let chartbeginx = context.chartbeginx;
    let constantleft = context.constantleft;
    let constantright = context.constantright;
    let constantbottom = context.constantbottom;
 
    let chatwi = context.chatwi;

    let fontguy = context.fontguy;
    let shadowx = context.shadowx;
  
  ctx.current.beginPath();
  ctx.current.font = fontguy.current + "px sans-serif";
  if (maxormin.current > 1) {
    constantleft.current =
      chatwi.current / 2 +
      Math.round(
        ctx.current.measureText(
          (parseInt(maxormin.current / increment.current) +
            1 -
            (maxormin.current >= maximum.current ? 0 : 1)) *
            increment.current *
            (maxormin.current > maximum.current ? -1 : -1)
        ).width
      );
  } else {
    constantleft.current =
      chatwi.current / 2 +
      ctx.current.measureText(
        (increment.current * 1).toPrecision(precision.current).toString() + " -"
      ).width;
  }
  constantright.current = chatwi.current * 2;
  Math.abs(gap.current) +
    shadowx.current +
    ctx.current.measureText(data.current[data.current.length - 1]).width -
    wid.current / 2;
  //picture dimension definition from chart content
  canvas.current.height =
    constantbottom.current +
    yorigintop.current +
    yoriginbottom.current +
    ctx.current.measureText(list.current[0]).hangingBaseline / 2 +
    (maximum.current <= 0
      ? 0
      : 2 +
        (parseInt(maximum.current / increment.current) + 1) *
          increment.current *
          scaley.current);
  canvas.current.width =
    xoriginleft.current +
    constantleft.current +
    xoriginright.current +
    constantright.current +
    chartbeginx.current +
    data.current.length * (wid.current + gap.current);
  //canvas color
  ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
  ctx.current.fillStyle = "transparent";
  ctx.current.rect(0, 0, canvas.current.width, canvas.current.height);
  ctx.current.fill();
  ctx.current.closePath();
  ///*lines y
  lineyfx(context);
  //*/
  ///*
  //lines x
  //linexfx(context);
  //*/
  //bars
  bars(xax, yax,context);
  //text x axiz
  shadowoff(context);
  textxfx(context);
  //text y axiz
  textyfx(context);
};

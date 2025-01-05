import {shadow} from "./Component"
export let bars = (xax, yax,context) => {
    let ctx = context.ctx;
    let canvas = context.canvas;
    let data = context.data;
    let datayx = context.datayx;
    let datayy = context.datayy;
    let datayh = context.datayh;

    let yoriginbottom = context.yoriginbottom;

    let gradient = context.gradient;
    let wid = context.wid;

    let scaley = context.scaley;

    let gap = context.gap;
    let fgap = context.fgap;
 
    let xoriginleft = context.xoriginleft;
    let chartbeginx = context.chartbeginx;
    let constantleft = context.constantleft;

    let constantbottom = context.constantbottom;
    let pathpoint = context.pathpoint;

            
  ctx.current.lineWidth = "1";
  data.current.map((e, i) => {
    //shadow
    shadow(context);
    // bars gradient.current
    ctx.current.beginPath();

    gradient.current = ctx.current.createLinearGradient(
      i * (gap.current + wid.current) +
        fgap.current +
        chartbeginx.current +
        xoriginleft.current +
        constantleft.current,
      canvas.current.height -
        constantbottom.current -
        (e * scaley.current + yoriginbottom.current),
      i * (gap.current + wid.current) +
        fgap.current +
        chartbeginx.current +
        xoriginleft.current +
        constantleft.current +
        wid.current,
      canvas.current.height -
        constantbottom.current -
        (e * scaley.current + yoriginbottom.current) +
        e * scaley.current
    );

    //gradient.current.addColorStop(0,"rgb(23,74,97)")
    gradient.current.addColorStop(1, "rgba(52, 202, 165,.1)");
    ctx.current.fillStyle = gradient.current;
    //bars
    ctx.current.clearRect(
      i * (gap.current + wid.current) +
        fgap.current +
        chartbeginx.current +
        xoriginleft.current +
        constantleft.current,
      canvas.current.height -
        constantbottom.current -
        (e * scaley.current + yoriginbottom.current),
      wid.current,
      e * scaley.current
    );

    ctx.current.roundRect(
      i * (gap.current + wid.current) +
        fgap.current +
        chartbeginx.current +
        xoriginleft.current +
        constantleft.current,
      canvas.current.height -
        constantbottom.current -
        (e * scaley.current + yoriginbottom.current),
      wid.current,
      e * scaley.current,
      [20, 20, 0, 0]
    );
    //click check
    if (ctx.current.isPointInPath(xax, yax)) {
      pathpoint.current = [datayx.current[i], datayy.current[i]];
    }
    ctx.current.fill();
    //store bar data
    datayx.current[i] =
      i * (gap.current + wid.current) +
      fgap.current +
      chartbeginx.current +
      xoriginleft.current +
      constantleft.current;
    datayy.current[i] =
      canvas.current.height -
      constantbottom.current -
      (e * scaley.current + yoriginbottom.current);
    datayh.current[i] = e * scaley.current;
  });
};

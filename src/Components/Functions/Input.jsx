import { barChart } from "./Charts";
import { tryhover } from "./Hover";
export let inputfx = (context) => {
  let ctx = context.ctx;
  let canvas = context.canvas;
  let yearly = context.yearly;
  let weekly = context.weekly;
  let monthly = context.monthly;
  let datax = context.datax;
    let state = context.state;
  ctx.current = canvas?.current?.getContext("2d");
  if (state == "yearly") {
    for (let index = 0; index < 7; index++) {
      yearly.current[index] = new Date().getFullYear() - index;
    }
    yearly.current = yearly.current.reverse();
    datax.current = yearly.current;
  } else if (state == "weekly") {
    datax.current = weekly.current;
  } else {
    datax.current = monthly.current;
  }
  rangefx(context);
  tryhover(context);
};

export let rangefx = (context) => {
  randomdata(context);
  checklowest(context);
  autoscalefx(context);
  barChart(true, true, context);
  tryhover(context);
};
export let randomdata = (context) => {
  let lowest = context.lowest;
  let difference = context.difference;
  let maximum = context.maximum;
  let minimum = context.minimum;
  let list = context.list;
  let data = context.data;
    let datax = context.datax;
  list.current = datax.current.map((e, i) => {
    return Math.random() * difference.current + lowest.current;
  });
  data.current = list.current;
  maximum.current = Math.max(...data.current);
  minimum.current = Math.min(...data.current);
};
export let autoscalefx = (context) => {
  let maximum = context.maximum;
  let minimum = context.minimum;
  let maxormin = context.maxormin;
  let maximumpossible = context.maximumpossible;
  let list = context.list;
  let data = context.data;
  let increment = context.increment;
  let divisor = context.divisor;
  let mark = context.mark;
  let scaley = context.scaley;
  let constantscaley = context.constantscaley;
  let precision = context.precision;
  maxormin.current =
    Math.abs(maximum.current) > Math.abs(minimum.current)
      ? Math.abs(maximum.current)
      : Math.abs(minimum.current);
  data.current = data.current.map((e) => Math.round(e));
  if (Math.round(maxormin.current / divisor.current) > 5) {
    ///*
    increment.current = +(
      (Math.round(maxormin.current / divisor.current) + 10)
        .toString()
        .slice(0, increment.current.length - 1) + "0"
    );
    //*/
    //increment.current = Math.round(maximum.current/4)
    if (
      increment.current * divisor.current - maxormin.current <
        increment.current &&
      divisor.current * increment.current - maxormin.current > 0
    ) {
      console.log("within", 10);
    } else {
      increment.current * divisor.current - maxormin.current > increment.current
        ? (increment.current = increment.current - 5)
        : "";
      divisor.current * increment.current - maxormin.current < 0
        ? (increment.current = increment.current + 5)
        : "";
      if (
        increment.current * divisor.current - maxormin.current <
          increment.current &&
        divisor.current * increment.current - maxormin.current > 0
      ) {
        console.log("within", 5);
      } else {
        increment.current = Math.round(maxormin.current / divisor.current) + 1;
        if (
          increment.current * divisor.current - maxormin.current <
            increment.current &&
          divisor.current * increment.current - maxormin.current > 0
        ) {
          console.log("within", 1);
        }
      }
    }
  } else if (maxormin.current >= divisor.current) {
    Math.round(maxormin.current / divisor.current) === 0
      ? (increment.current = Math.round(maxormin.current / divisor.current) + 1)
      : (increment.current = Math.round(maxormin.current / divisor.current));
    if (
      increment.current * divisor.current - maxormin.current <
        increment.current &&
      divisor.current * increment.current - maxormin.current > 0
    ) {
      console.log("within", "number");
    }
  } else {
    data.current = list.current.map((e) => e.toPrecision(precision.current));
    increment.current = +(maxormin.current / divisor.current).toPrecision(
      precision.current
    );
    console.log("within", "none");
  }
  scaley.current =
    constantscaley.current / (maxormin.current / maximumpossible.current);
  mark.current = increment.current * scaley.current;
};
export let checklowest = (context) => {
  let ctx = context.ctx;
  let minimum = context.minimum;
  let list = context.list;
  let increment = context.increment;
  let scaley = context.scaley;
  let constantbottom = context.constantbottom;
  if (minimum.current < 0) {
    constantbottom.current =
      Math.abs(parseInt(minimum.current / increment.current) - 1) *
        increment.current *
        scaley.current +
      ctx.current.measureText(list.current[0]).hangingBaseline;
  } else {
    constantbottom.current = ctx.current.measureText(
      list.current[0]
    ).hangingBaseline;
  }
};

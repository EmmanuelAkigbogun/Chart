import { useContext, useEffect, useRef } from "react";
function ChartBoard({ state }) {
  let weekly = useRef(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
  let monthly = useRef([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
  let yearly = useRef([
    "2015",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ]);
  let datax = useRef([]);
  let data = useRef([100, 204, 205, 420, 500, 680, 106]);
  let difference = useRef(5000);
  let lowest = useRef(0);
  let divisor = useRef(9);
  let constantbottom = useRef(0);
  let constantleft = useRef(0);
  let constantright = useRef(0);
  let datayx = useRef({}); //start x of the bars
  let datayy = useRef({}); //start y of the bars
  let datayh = useRef({}); //height of the bars
  let pathpoint = useRef([]);
  let wid = useRef(30);
  let fgap = useRef(0);
  let bgap = useRef(32);
  let gap = useRef(fgap.current + bgap.current);
  let scaley = useRef(5);
  let increment = useRef(25);
  let constantscaley = useRef(2.3);
  let maximumpossible = useRef(100);
  let mark = useRef(increment.current * scaley.current);
  let chartbeginx = useRef(30);
  let xoriginright = useRef(0);
  let xoriginleft = useRef(0);
  let yoriginbottom = useRef(25);
  let yorigintop = useRef(0);
  let begintexty = useRef(-10);
  let begintextx = useRef(-20);
  let fontguy = useRef(16);
  let dashy = useRef(5);
  let dashx = useRef(5);
  let x = useRef(0);
  let y = useRef(0);
  let o = useRef(0);
  let triwid = useRef(7);
  let list = useRef([]);
  let maximum = useRef(Math.max(...data.current));
  let minimum = useRef(Math.min(...data.current));
  let maxormin = useRef(0);
  let shadowx = useRef(15);
  let shadowy = useRef(0);
  let precision = useRef(2);
  let chathi = useRef(10);
  let chatwi = useRef(20);
  let canvas = useRef(null);
  useEffect(() => {
    inputfx();
    canvas.current.addEventListener("touchstart", (e) => {
      console.log(e);
      hover("touch", "touch");
      e.preventDefault();
      e.stopPropagation();
    });
    canvas.current.addEventListener("dblclick", (e) => {
      lowest.current == 0 ? (lowest.current = -100) : (lowest.current = 0);
      constantscaley.current == 2.3
        ? (constantscaley.current = 1.15)
        : (constantscaley.current = 2.3);
      difference.current == 100
        ? (difference.current = 200)
        : (difference.current = 100);
      inputfx();
      tryhover();
    });
  }, [state]);
  let ctx = useRef(canvas?.current?.getContext("2d"));
  let gradient = useRef([]);
  let gradient1 = useRef([]);
  let inputfx = () => {
    ctx.current = canvas?.current?.getContext("2d");
    if (state == "yearly") {
      for (let index = 0; index < 7; index++) {
        yearly.current[index] = new Date().getFullYear() - index;
      }
      yearly.current = yearly.current.reverse();
    }

    state == "weekly"
      ? (datax.current = weekly.current)
      : state == "monthly"
      ? (datax.current = monthly.current)
      : state == "yearly"
      ? (datax.current = yearly.current)
      : "";

    rangefx();
    tryhover();
  };
  let randomdata = () => {
    list.current = datax.current.map((e, i) => {
      //datax.current.lenggth possible bar
      return Math.random() * difference.current + lowest.current;
    });
    data.current = list.current;
    maximum.current = Math.max(...data.current);
    minimum.current = Math.min(...data.current);
  };
  let autoscalefx = () => {
    maxormin.current =
      Math.abs(maximum.current) > Math.abs(minimum.current)
        ? Math.abs(maximum.current)
        : Math.abs(minimum.current);
    data.current = data.current.map((e) => Math.round(e));
    if (Math.round(maxormin.current / divisor.current) > 5) {
      ///*
      increment.current = Math.round(maxormin.current / divisor.current) + 10;
      increment.current = increment.current.toString();
      increment.current = +(
        increment.current.slice(0, increment.current.length - 1) + "0"
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
        increment.current * divisor.current - maxormin.current >
        increment.current
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
          increment.current =
            Math.round(maxormin.current / divisor.current) + 1;
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
        ? (increment.current =
            Math.round(maxormin.current / divisor.current) + 1)
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
    //((Math.round(Math.abs(maxormin.current) / increment.current)  + 1)-(maxormin.current<maximum.current&&1))*increment.current;
    //barChart(true, true);
    //tryhover();
  };
  let rangefx = () => {
    randomdata();
    autoscalefx();
    checklowest();
    barChart(true, true);
    tryhover();
  };
  let forward = (h) => {
    x1 = x.current + h * Math.cos((Math.PI / 180) * o);
    y1 = y.current + h * Math.sin((Math.PI / 180) * o);
    ctx.current.lineTo(x1, y1);
    ctx.current.stroke();
    x.current = x1;
    y.current = y1;
  };
  let right = (p) => {
    o.current += p;
  };
  let checklowest = () => {
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
  let shadow = () => {
    //shadow
    ctx.current.shadowBlur = 11;
    ctx.current.shadowColor = "rgba(35, 35, 35, .5)";
    ctx.current.shadowOffsetX = shadowx.current;
    ctx.current.shadowOffsetY = shadowy.current;
  };
  let shadowoff = () => {
    //shadow
    ctx.current.shadowBlur = 0;
    ctx.current.shadowColor = "rgba(35, 35, 35, .5)";
    ctx.current.shadowOffsetX = 0;
    ctx.current.shadowOffsetY = 0;
  };
  let circle = (x, y, r) => {
    ctx.current.arc(x, y, 10, 0, Math.PI * 2);
  };
  let star = (e, color, color0, tox, toy, w, text) => {
    ctx.current.beginPath();
    ctx.current.font = fontguy.current + "px sans-serif";
    x.current = tox;
    y.current = toy;
    forward(w);
    right(144);
    forward(w);
    right(144);
    forward(w);
    right(144);
    forward(w);
    right(144);
    forward(w);
    right(144);
    forward(w);
    ctx.current.fillStyle = color;
    ctx.current.strokeStyle = color0;
    ctx.current.fill();
    ctx.current.stroke();
    //text
    ctx.current.beginPath();
    ctx.current.fillStyle = "white";
    ctx.current.fillText(
      text,
      tox + w / 2 - ctx.current.measureText(text).width / 2,
      toy + ctx.current.measureText(text).hangingBaseline
    );
    ctx.current.fill();
  };
  let chatwithin = (e) => {
    if (data.current[e] < 0)
      return (
        canvas.current.height -
        datayy.current[e] -
        (10 +
          (shadowy.current < 0 ? -shadowy.current : 0) +
          chathi.current +
          ctx.current.measureText(data.current[e]).hangingBaseline +
          3 * triwid.current)
      );

    return (
      datayy.current[e] -
      (10 +
        (shadowy.current < 0 ? -shadowy.current : 0) +
        chathi.current +
        ctx.current.measureText(data.current[e]).hangingBaseline +
        3 * triwid.current)
    );
  };
  let chat = (color, color0, tox, toy, w, text, levitate) => {
    color = "rgb(15,15,15,.8)";
    ctx.current.font = fontguy + "px sans-serif";
    ctx.current.beginPath();
    x.current = tox;
    y.current = toy - (text < 0 ? -levitate : levitate);
    //triangle
    ctx.current.moveTo(x.current, y.current);
    ctx.current.lineTo(
      x.current + (text < 0 ? -w : w),
      y.current - (text < 0 ? -w : w)
    );
    ctx.current.lineTo(
      x.current - (text < 0 ? -w : w),
      y.current - (text < 0 ? -w : w)
    );
    ctx.current.lineTo(x.current, y.current);
    ctx.current.fillStyle = color;
    ctx.current.strokeStyle = color0;
    // round rect
    ctx.current.roundRect(
      x.current - 2 * (text < 0 ? -w : w),
      y.current -
        3 * (text < 0 ? -w : w) -
        (text < 0 ? 2 * w : ctx.current.measureText(text).hangingBaseline) -
        (text < 0 ? 0 : 1) * chathi.current,
      (text < 0 ? -1 : 1) * (ctx.current.measureText(text).width + 2 * w) +
        (text < 0 ? -1 : 1) * chatwi.current,
      ctx.current.measureText(text).hangingBaseline + 2 * w + chathi.current,
      3
    );
    ctx.current.fill();
    ctx.current.stroke();
    //text
    ctx.current.beginPath();
    ctx.current.fillStyle = "white";
    ctx.current.fillText(
      text,
      x.current -
        (text < 0 ? -w + ctx.current.measureText(text).width : w) +
        ((text < 0 ? -1 : 1) * chatwi.current) / 2,
      y.current -
        (text < 0 ? 0 : -ctx.current.measureText(text).hangingBaseline) +
        (text < 0 ? 1 : -1) *
          (ctx.current.measureText(text).hangingBaseline + 2 * w) -
        ((text < 0 ? -1 : 1) * chathi.current) / 2
    );
    ctx.current.fill();
    ctx.current.stroke();
    //remove stroke
    ctx.current.beginPath();
    ctx.current.save();
    ctx.current.lineWidth = "2";
    ctx.current.strokeStyle = color;
    ctx.current.moveTo(
      x.current - (text < 0 ? -w : w),
      y.current - (text < 0 ? -w : w)
    );
    ctx.current.lineTo(
      x.current + (text < 0 ? -w : w),
      y.current - (text < 0 ? -w : w)
    );
    ctx.current.stroke();
    ctx.current.restore();
    ctx.current.closePath();
  };
  let nthlineyfxpositive = (index, linewidthval, color) => {
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
  let nthlineyfxnegative = (index, linewidthval, color) => {
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
  let lineyfx = () => {
    ctx.current.beginPath();
    ctx.current.save();
    //first line
    nthlineyfxpositive(0, "0.5", "rgb(158,158,158,.3)");
    if (maximum.current > 0) {
      //other lines
      for (
        let index = 1;
        index < parseInt(maximum.current / increment.current) + 2;
        index++
      ) {
        nthlineyfxpositive(index, "0.5", "rgb(158,158,158,.3)");
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
        nthlineyfxnegative(index, "0.5", "rgb(158,158,158,.3)");
      }
      for (
        let index = parseInt(minimum.current / increment.current) - 1;
        index < 1;
        index++
      ) {
        nthlineyfxnegative(index, "0.5", "rgb(158,158,158,.3)");
      }
    }
    ctx.current.restore();
    ctx.current.closePath();
  };
  let nthlinexfxnegative = (index, linewidthval, color) => {
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
  let nthlinexfxpositive = (index, linewidthval, color) => {
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
  let linexfx = () => {
    ctx.current.beginPath();
    ctx.current.setLineDash([dashx.current]);
    if (maximum.current > 0) {
      //first line
      nthlinexfxpositive(0, "0.5", "rgb(158,158,158,.3)");
      //other lines
      for (let index = 1; index < data.current.length + 1; index++) {
        nthlinexfxpositive(index, "0.5", "rgb(158,158,158,.3)");
      }
    }
    if (minimum.current < 0) {
      //first line
      nthlinexfxnegative(0, "0.5", "rgb(158,158,158,.3)");
      //other lines
      for (let index = 1; index < data.current.length + 1; index++) {
        nthlinexfxnegative(index, "0.5", "rgb(158,158,158,.3)");
      }
    }
    ctx.current.restore();
    ctx.current.closePath();
  };

  let textyfxpositive = (index, color, colorfill, font) => {
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
  let textyfxnegative = (index, color, colorfill, font) => {
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
  let textyfx = () => {
    textyfxpositive(
      0,
      "white",
      "rgb(158,158,158)",
      fontguy.current + "px sans-serif"
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
          fontguy.current + "px sans-serif"
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
          fontguy.current + "px sans-serif"
        );
      }
    }
  };

  let textxfxindex = (index) => {
    ctx.current.beginPath();
    ctx.current.save();
    ctx.current.lineWidth = ".2";
    ctx.current.letterSpacing = "1px";
    ctx.current.fillStyle = "rgb(158,158,158)";
    ctx.current.font = fontguy.current + 1 + "px sans-serif";
    ctx.current.translate(
      index * (wid.current + gap.current) +
        fgap.current +
        xoriginleft.current +
        constantleft.current +
        chartbeginx.current +
        wid.current / 2,
      canvas.current.height -
        constantbottom.current -
        yoriginbottom.current -
        begintextx.current
    );
    ctx.current.rotate((Math.PI / 180) * 0);
    //text x axiz stroke
    ctx.current.strokeText(
      datax.current[index],
      -ctx.current.measureText(datax.current[index]).width / 2,
      ctx.current.measureText(datax.current[index]).hangingBaseline / 2
    );
    ctx.current.stroke();
    //text x axiz fill
    ctx.current.fillText(
      datax.current[index],
      -ctx.current.measureText(datax.current[index]).width / 2,
      ctx.current.measureText(datax.current[index]).hangingBaseline / 2
    );
    ctx.current.fill();
    ctx.current.restore();
    ctx.current.closePath();
  };
  let textxfx = () => {
    for (let index = 0; index < datax.current.length; index++) {
      textxfxindex(index);
    }
  };

  let bars = (xax, yax) => {
    ctx.current.lineWidth = "1";
    data.current.map((e, i) => {
      //shadow
      shadow();
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
  let barChart = (xax, yax) => {
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
          (increment.current * 1).toPrecision(precision.current).toString() +
            " -"
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
    lineyfx();
    //*/
    ///*
    //lines x
    //linexfx();
    //*/
    //bars
    bars(xax, yax);
    //text x axiz
    shadowoff();
    textxfx();
    //text y axiz
    textyfx();
  };
  let hover = (ex, ey) => {
    let boolguy = false;
    let r = {
      offsetX: ex,
      offsetY: ey,
    };
    //check if event, for event ex=0 boolguy ==true
    if (r.offsetX == "click" && r.offsetY == "click") {
      r = window.event;
      boolguy = true;
    }
    if (r.offsetX == "touch" && r.offsetY == "touch") {
      let ev = window.event.targetTouches[0];
      r = {
        offsetX: ev.clientX - canvas.current.getBoundingClientRect().x,
        offsetY: ev.clientY - canvas.current.getBoundingClientRect().y,
      };
      boolguy = true;
    }
    barChart(
      r.offsetX *
        (boolguy ? canvas.current.width / canvas.current.offsetWidth : 1),
      r.offsetY *
        (boolguy ? canvas.current.height / canvas.current.offsetHeight : 1)
    );

    Object.keys(datayx.current).map((e, i) => {
      if (
        datayx.current[e] == pathpoint.current[0] &&
        datayy.current[e] == pathpoint.current[1]
      ) {
        //make chat within
        if (chatwithin(e) < 0) {
          data.current[e] < 0
            ? (yoriginbottom.current =
                yoriginbottom.current + Math.ceil(-chatwithin(e)))
            : (yorigintop.current =
                yorigintop.current + Math.ceil(-chatwithin(e)));

          barChart(true, true);
        }
        // hover bar
        ctx.current.beginPath();
        shadow();

        //gradient.current

        gradient1.current = ctx.current.createLinearGradient(
          datayx.current[e],
          datayy.current[e],
          datayx.current[e] + wid.current,
          datayy.current[e] + datayh.current[e]
        );

        //gradient1.current.addColorStop(0,"rgb(80,24,17)")
        gradient1.current.addColorStop(1, "rgba(52, 202, 165,0)");
        gradient1.current.addColorStop(0, "rgba(52, 202, 165)");
        ctx.current.fillStyle = gradient1.current;
        //bar
        ctx.current.moveTo(datayx.current[e], datayy.current[e]);
        ctx.current.clearRect(
          datayx.current[e],
          datayy.current[e],
          wid.current,
          datayh.current[e]
        );
        ctx.current.roundRect(
          datayx.current[e],
          datayy.current[e],
          wid.current,
          datayh.current[e],
          [20, 20, 0, 0]
        );
        ctx.current.fill();
        //chat
        chat(
          gradient1.current,
          "white",
          datayx.current[e] + wid.current / 2,
          datayy.current[e],
          triwid.current,
          data.current[e],
          10
        );
        //star
        1 == 2 &&
          star(
            e,
            "rgba(52, 202, 165)",
            "white",
            datayx.current[e] + wid.current,
            datayy.current[e],
            70,
            data.current[e]
          );
        //redraw hidden trext
        shadowoff();
        textxfxindex(e);
      }
    });
    pathpoint.current = [];
    //console.log(ex, ey, r.offsetX, r.offsetY);
  };
  let tryhover = () => {
    let hoverType;
    state == "weekly"
      ? (hoverType = "new Date().getDay()")
      : state == "monthly"
      ? (hoverType = "new Date().getMonth()")
      : state == "yearly"
      ? (hoverType = "datax.current.indexOf(new Date().getFullYear())")
      : "";
    eval(`
    hover(
      Object.values(datayx.current)[${hoverType}]+wid.current/2,
      Object.values(datayy.current)[${hoverType}]
    )
   `);
  };
  return (
    <>
      <canvas
        ref={canvas}
        onClick={() => {
          hover("click", "click");
        }}
        className="pointer"
      ></canvas>
    </>
  );
}
export default ChartBoard;

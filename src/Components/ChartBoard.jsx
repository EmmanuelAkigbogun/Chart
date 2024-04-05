import { useEffect, useRef, useState } from "react";
function ChartBoard({ state}) {
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
  let difference = useRef(400);
  let lowest = useRef(20);
  let divisor = useRef(4);
  let constantbottom = useRef(0);
  let constantleft = useRef(0);
  let constantright = useRef(0);
  let datayx = useRef({}); //start x of the bars
  let datayy = useRef({}); //start y of the bars
  let datayh = useRef({}); //height of the bars
  let pathpoint = useRef([]);
  let wid = useRef(50);
  let fgap = useRef(0);
  let bgap = useRef(30);
  let gap = useRef(fgap.current + bgap.current);
  let scaley = useRef(5);
  let increment = useRef(25);
  let constantscaley = useRef(2.3);
  let maximumpossible = useRef(100);
  let mark = useRef(increment.current * scaley.current);
  let chartbeginx = useRef(20);
  let xoriginright = useRef(0);
  let xoriginleft = useRef(0);
  let yoriginbottom = useRef(15);
  let yorigintop = useRef(0);
  let begintexty = useRef(0);
  let begintextx = useRef(-10);
  let fontguy = useRef(18);
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
  let roundheight = useRef(10);
  useEffect(() => {
    inputfx();
  }, [state]);
  let canvas = useRef(null);
  let [cxt, setcxt] = useState(canvas?.current?.getContext("2d"));
  let [gradient, setgradient] = useState([]);
  let [gradient1, setgradient1] = useState([]);
  let inputfx = () => {
    setcxt((cxt = canvas.current.getContext("2d")));
    if (state == "yearly") {
      for (let index = 0; index < 7; index++) {
        yearly.current[index] = new Date().getFullYear() - index;
      }
      yearly.current = yearly.current.reverse();
    }
       console.log(state);

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
    cxt.lineTo(x1, y1);
    cxt.stroke();
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
        cxt.measureText(list.current[0]).hangingBaseline;
    } else {
      constantbottom.current = cxt.measureText(list.current[0]).hangingBaseline;
    }
  };
  let shadow = () => {
    //shadow
    cxt.shadowBlur = 11;
    cxt.shadowColor = "rgba(35, 35, 35, .5)";
    cxt.shadowOffsetX = shadowx.current;
    cxt.shadowOffsetY = shadowy.current;
  };
  let shadowoff = () => {
    //shadow
    cxt.shadowBlur = 0;
    cxt.shadowColor = "rgba(35, 35, 35, .5)";
    cxt.shadowOffsetX = 0;
    cxt.shadowOffsetY = 0;
  };
  let circle = (x, y, r) => {
    cxt.arc(x, y, 10, 0, Math.PI * 2);
  };
  let star = (e, color, color0, tox, toy, w, text) => {
    cxt.beginPath();
    cxt.font = fontguy.current + "px sans-serif";
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
    cxt.fillStyle = color;
    cxt.strokeStyle = color0;
    cxt.fill();
    cxt.stroke();
    //text
    cxt.beginPath();
    cxt.fillStyle = "white";
    cxt.fillText(
      text,
      tox + w / 2 - cxt.measureText(text).width / 2,
      toy + cxt.measureText(text).hangingBaseline
    );
    cxt.fill();
  };
  let chatwithin = (e) => {
    if (data.current[e] < 0)
      return (
        canvas.current.height -
        datayy.current[e] -
        (10 +
          (shadowy.current < 0 ? -shadowy.current : 0) +
          chathi.current +
          cxt.measureText(data.current[e]).hangingBaseline +
          3 * triwid.current)
      );

    return (
      datayy.current[e] -
      (10 +
        (shadowy.current < 0 ? -shadowy.current : 0) +
        chathi.current +
        cxt.measureText(data.current[e]).hangingBaseline +
        3 * triwid.current)
    );
  };
  let chat = (color, color0, tox, toy, w, text, levitate) => {
    color = "rgb(15,15,15,.8)";
    cxt.font = fontguy + "px sans-serif";
    cxt.beginPath();
    x.current = tox;
    y.current = toy - (text < 0 ? -levitate : levitate);
    //triangle
    cxt.moveTo(x.current, y.current);
    cxt.lineTo(
      x.current + (text < 0 ? -w : w),
      y.current - (text < 0 ? -w : w)
    );
    cxt.lineTo(
      x.current - (text < 0 ? -w : w),
      y.current - (text < 0 ? -w : w)
    );
    cxt.lineTo(x.current, y.current);
    cxt.fillStyle = color;
    cxt.strokeStyle = color0;
    // round rect
    cxt.roundRect(
      x.current - 2 * (text < 0 ? -w : w),
      y.current -
        3 * (text < 0 ? -w : w) -
        (text < 0 ? 2 * w : cxt.measureText(text).hangingBaseline) -
        (text < 0 ? 0 : 1) * chathi.current,
      (text < 0 ? -1 : 1) * (cxt.measureText(text).width + 2 * w) +
        (text < 0 ? -1 : 1) * chatwi.current,
      cxt.measureText(text).hangingBaseline + 2 * w + chathi.current,
      3
    );
    cxt.fill();
    cxt.stroke();
    //text
    cxt.beginPath();
    cxt.fillStyle = "white";
    cxt.fillText(
      text,
      x.current -
        (text < 0 ? -w + cxt.measureText(text).width : w) +
        ((text < 0 ? -1 : 1) * chatwi.current) / 2,
      y.current -
        (text < 0 ? 0 : -cxt.measureText(text).hangingBaseline) +
        (text < 0 ? 1 : -1) * (cxt.measureText(text).hangingBaseline + 2 * w) -
        ((text < 0 ? -1 : 1) * chathi.current) / 2
    );
    cxt.fill();
    cxt.stroke();
    //remove stroke
    cxt.beginPath();
    cxt.save();
    cxt.lineWidth = "2";
    cxt.strokeStyle = color;
    cxt.moveTo(
      x.current - (text < 0 ? -w : w),
      y.current - (text < 0 ? -w : w)
    );
    cxt.lineTo(
      x.current + (text < 0 ? -w : w),
      y.current - (text < 0 ? -w : w)
    );
    cxt.stroke();
    cxt.restore();
    cxt.closePath();
  };
  let nthlineyfxpositive = (index, linewidthval, color) => {
    cxt.strokeStyle = color;
    cxt.lineWidth = linewidthval;
    cxt.setLineDash([dashy.current]);
    cxt.moveTo(
      xoriginleft.current + constantleft.current + chartbeginx.current,
      canvas.current.height -
        constantbottom.current -
        index * mark.current -
        yoriginbottom.current
    );
    cxt.lineTo(
      canvas.current.width - xoriginright.current - constantright.current,
      canvas.current.height -
        constantbottom.current -
        index * mark.current -
        yoriginbottom.current
    );
    cxt.stroke();
  };
  let nthlineyfxnegative = (index, linewidthval, color) => {
    cxt.strokeStyle = color;
    cxt.lineWidth = linewidthval;
    cxt.setLineDash([dashy.current]);
    cxt.moveTo(
      xoriginleft.current + constantleft.current + chartbeginx.current,
      canvas.current.height -
        constantbottom.current -
        index * mark.current -
        yoriginbottom.current
    );
    cxt.lineTo(
      canvas.current.width - xoriginright.current - constantright.current,
      canvas.current.height -
        constantbottom.current -
        index * mark.current -
        yoriginbottom.current
    );
    cxt.stroke();
  };
  let lineyfx = () => {
    cxt.beginPath();
    cxt.save();
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
    nthlineyfxnegative(0, "0.5", "rgb(158,158,158,.3)");
    if (minimum.current < 0) {
      //other lines
      for (
        let index = parseInt(minimum.current / increment.current) - 1;
        index < 1;
        index++
      ) {
        nthlineyfxnegative(index, "0.5", "rgb(158,158,158,.3)");
      }
    }
    cxt.restore();
    cxt.closePath();
  };
  let nthlinexfxnegative = (index, linewidthval, color) => {
    cxt.strokeStyle = color;
    cxt.lineWidth = linewidthval;
    cxt.moveTo(
      index * (wid.current + gap.current) +
        constantleft.current +
        xoriginleft.current +
        chartbeginx.current,
      canvas.current.height -
        constantbottom.current -
        (parseInt(minimum.current / increment.current) - 1) * mark.current -
        yoriginbottom.current
    );
    cxt.lineTo(
      index * (wid.current + gap.current) +
        xoriginleft.current +
        constantleft.current +
        chartbeginx.current,
      canvas.current.height -
        constantbottom.current -
        0 * mark.current -
        yoriginbottom.current
    );
    cxt.stroke();
  };
  let nthlinexfxpositive = (index, linewidthval, color) => {
    cxt.strokeStyle = color;
    cxt.lineWidth = linewidthval;
    cxt.moveTo(
      index * (wid.current + gap.current) +
        xoriginleft.current +
        constantleft.current +
        chartbeginx.current,
      canvas.current.height -
        constantbottom.current -
        0 * mark.current -
        yoriginbottom.current
    );
    cxt.lineTo(
      index * (wid.current + gap.current) +
        xoriginleft.current +
        constantleft.current +
        chartbeginx.current,
      canvas.current.height -
        constantbottom.current -
        (parseInt(maximum.current / increment.current) + 1) * mark.current -
        yoriginbottom.current
    );
    cxt.stroke();
  };
  // canvas.current.height - constantbottom.current - 0 * mark.current - yoriginbottom.current
  let linexfx = () => {
    cxt.beginPath();
    cxt.setLineDash([dashx.current]);
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
    cxt.restore();
    cxt.closePath();
  };

  let textyfxpositive = (index, color, colorfill, font) => {
    let textval =
      index * increment.current.toString().includes(".")
        ? (index * increment.current).toPrecision(precision.current)
        : index * increment.current;
    cxt.beginPath();
    cxt.lineWidth = ".2";
    cxt.letterSpacing = "1px";
    //cxt.strokeStyle = color;
    cxt.fillStyle = colorfill;
    cxt.font = font;
    //text y axiz stroke
    cxt.strokeText(
      textval,
      begintexty.current +
        xoriginleft.current +
        constantleft.current -
        cxt.measureText(textval).width,
      canvas.current.height -
        constantbottom.current -
        index * mark.current -
        yoriginbottom.current +
        cxt.measureText(index * increment.current).hangingBaseline / 2
    );
    cxt.stroke();
    //text y axiz fill
    cxt.fillText(
      textval,
      begintexty.current +
        xoriginleft.current +
        constantleft.current -
        cxt.measureText(textval).width,
      canvas.current.height -
        constantbottom.current -
        index * mark.current -
        yoriginbottom.current +
        cxt.measureText(index * increment.current).hangingBaseline / 2
    );
    cxt.fill();
    cxt.closePath();
  };
  let textyfxnegative = (index, color, colorfill, font) => {
    let textval =
      index * increment.current.toString().includes(".")
        ? (index * increment.current).toPrecision(precision.current)
        : index * increment.current;
    cxt.beginPath();
    cxt.lineWidth = ".2";
    cxt.letterSpacing = "1px";
    cxt.strokeStyle = color;
    cxt.fillStyle = colorfill;
    cxt.font = font;
    //text y axiz stroke
    cxt.strokeText(
      textval,
      begintexty.current +
        xoriginleft.current +
        constantleft.current -
        cxt.measureText(textval).width,
      canvas.current.height -
        constantbottom.current -
        index * mark.current -
        yoriginbottom.current +
        cxt.measureText(index * increment.current).hangingBaseline / 2
    );
    cxt.stroke();
    //text y axiz fill
    cxt.fillText(
      textval,
      begintexty.current +
        xoriginleft.current +
        constantleft.current -
        cxt.measureText(textval).width,
      canvas.current.height -
        constantbottom.current -
        index * mark.current -
        yoriginbottom.current +
        cxt.measureText(index * increment.current).hangingBaseline / 2
    );
    cxt.fill();
    cxt.closePath();
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
    cxt.beginPath();
    cxt.save();
    cxt.lineWidth = ".2";
    cxt.letterSpacing = "1px";
    cxt.fillStyle = "rgb(158,158,158)";
    cxt.font = 20 + "px sans-serif";
    cxt.translate(
      index * (wid.current + gap.current) +
        fgap.current +
        xoriginleft.current +
        constantleft.current +
        chartbeginx.current +
        wid.current / 2,
      canvas.current.height - constantbottom.current - yoriginbottom.current - begintextx.current
    );
    cxt.rotate((Math.PI / 180) * 0);
    //text x axiz stroke
    cxt.strokeText(
      datax.current[index],
      -cxt.measureText(datax.current[index]).width / 2,
      cxt.measureText(datax.current[index]).hangingBaseline / 2
    );
    cxt.stroke();
    //text x axiz fill
    cxt.fillText(
      datax.current[index],
      -cxt.measureText(datax.current[index]).width / 2,
      cxt.measureText(datax.current[index]).hangingBaseline / 2
    );
    cxt.fill();
    cxt.restore();
    cxt.closePath();
  };
  let textxfx = () => {
    for (let index = 0; index < datax.current.length; index++) {
      textxfxindex(index);
    }
  };
    let roundTop = (i, xax, yax, filler) => {
      // round top
      cxt.beginPath();
      cxt.fillStyle = filler;
      cxt.moveTo(datayx.current[i], datayy.current[i]);
      cxt.quadraticCurveTo(
        datayx.current[i] + wid.current / 2,
        datayy.current[i] - 15,
        datayx.current[i] + wid.current,
        datayy.current[i]
      );
      if (cxt.isPointInPath(xax, yax)) {
        pathpoint.current = [datayx.current[i], datayy.current[i]];
      }
      cxt.fill();
      cxt.closePath();
      cxt.beginPath();
      cxt.save();
      cxt.lineWidth = "2";
      cxt.strokeStyle = cxt.fillStyle;
      cxt.moveTo(datayx.current[i], datayy.current[i]);
      cxt.lineTo(datayx.current[i] + wid.current, datayy.current[i]);
      cxt.restore();
      cxt.closePath();
    };
  let bars = (xax, yax) => {
    cxt.lineWidth = "1";
    data.current.map((e, i) => {
      //shadow
      shadow();
      // bars gradient
      cxt.beginPath();
      setgradient(
        (gradient = cxt.createLinearGradient(
          i * (gap.current + wid.current) +
            fgap.current +
            chartbeginx.current +
            xoriginleft.current +
            constantleft.current,
          canvas.current.height -
            constantbottom.current -
            (e * scaley.current + yoriginbottom.current)+roundheight.current,
          i * (gap.current + wid.current) +
            fgap.current +
            chartbeginx.current +
            xoriginleft.current +
            constantleft.current +
            wid.current,
          canvas.current.height -
            constantbottom.current -
            (e * scaley.current + yoriginbottom.current) +
            e * scaley.current -
            roundheight.current
        ))
      );
      //gradient.addColorStop(0,"rgb(23,74,97)")
      gradient.addColorStop(1, "rgba(81,209,178,.1)");
      cxt.fillStyle = gradient;
      //bars
      cxt.clearRect(
        i * (gap.current + wid.current) +
          fgap.current +
          chartbeginx.current +
          xoriginleft.current +
          constantleft.current,
        canvas.current.height -
          constantbottom.current -
          (e * scaley.current + yoriginbottom.current) +
          roundheight.current,
        wid.current,
        e * scaley.current - roundheight.current
      );

      cxt.rect(
        i * (gap.current + wid.current) +
          fgap.current +
          chartbeginx.current +
          xoriginleft.current +
          constantleft.current,
        canvas.current.height -
          constantbottom.current -
          (e * scaley.current + yoriginbottom.current) +
          roundheight.current,
        wid.current,
        e * scaley.current - roundheight.current
      );
      //click check
      if (cxt.isPointInPath(xax, yax)) {
        pathpoint.current = [datayx.current[i], datayy.current[i]];
      }
      cxt.fill();
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
        (e * scaley.current + yoriginbottom.current) +
        roundheight.current;
      datayh.current[i] = e * scaley.current - roundheight.current;
        roundTop(i, xax, yax, gradient);
    });
  };
  let barChart = (xax, yax) => {
    cxt.beginPath();
    cxt.font = fontguy.current + "px sans-serif";
    if (maxormin.current > 1) {
      constantleft.current =
        chatwi.current / 2 +
        Math.round(
          cxt.measureText(
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
        cxt.measureText(
          (increment.current * 1).toPrecision(precision.current).toString() +
            " -"
        ).width;
    }
    constantright.current = chatwi.current * 2;
    Math.abs(gap.current) +
      shadowx.current +
      cxt.measureText(data.current[data.current.length - 1]).width -
      wid.current / 2;
    //picture dimension definition from chart content
    canvas.current.height =
      constantbottom.current +
      yorigintop.current +
      yoriginbottom.current +
      cxt.measureText(list.current[0]).hangingBaseline / 2 +
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
    cxt.clearRect(0, 0, canvas.current.width, canvas.current.height);
    cxt.fillStyle = "transparent";
    cxt.rect(0, 0, canvas.current.width, canvas.current.height);
    cxt.fill();
    cxt.closePath();
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
    if (r.offsetX == 0 && r.offsetY == 0) {
      r = window.event;
      boolguy = true;
    }

    barChart(
      r.offsetX *
        (boolguy ? canvas.current.width / canvas.current.offsetWidth : 1),
      r.offsetY *
        (boolguy ? canvas.current.height / canvas.current.offsetHeight : 1)
    );

    Object.keys(datayx.current).map((e, i) => {
      if (datayx.current[e] == pathpoint.current[0] && datayy.current[e] == pathpoint.current[1]) {
        //make chat within
        if (chatwithin(e) < 0) {
          data.current[e] < 0
            ? (yoriginbottom.current = yoriginbottom.current + Math.ceil(-chatwithin(e)))
            : (yorigintop.current = yorigintop.current + Math.ceil(-chatwithin(e)));

          barChart(true, true);
        }
        // hover bar
        cxt.beginPath();
        shadow();

        //gradient
        setgradient1(
          (gradient1 = cxt.createLinearGradient(
            datayx.current[e],
            datayy.current[e],
            datayx.current[e] + wid.current,
            datayy.current[e] + datayh.current[e]
          ))
        );
        //gradient1.addColorStop(0,"rgb(80,24,17)")
        gradient1.addColorStop(0, "rgba(81,209,178,.4)");
        cxt.fillStyle = gradient1;
        //bar
        cxt.moveTo(datayx.current[e], datayy.current[e]);
        cxt.clearRect(datayx.current[e], datayy.current[e], wid.current, datayh.current[e]);
        cxt.rect(datayx.current[e], datayy.current[e], wid.current, datayh.current[e]);
        cxt.fill();
        roundTop(
          i,
          r.offsetX *
            (boolguy ? canvas.current.width / canvas.current.offsetWidth : 1),
          r.offsetY *
            (boolguy ? canvas.current.height / canvas.current.offsetHeight : 1),
          gradient1
        );
        //chat
        chat(
          gradient1,
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
            "rgba(81,209,178)",
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
      Object.values(datayx.current)[${hoverType}],
      Object.values(datayy.current)[${hoverType}]
    )
   `);
  };
  return (
    <>
      <canvas
        ref={canvas}
        onClick={() => {
          hover(0, 0);
        }}
      ></canvas>
    </>
  );
}
export default ChartBoard;

export let shadow = (context) => {
  let shadowx = context.shadowx;
    let shadowy = context.shadowy;
      let ctx = context.ctx;
  //shadow
  ctx.current.shadowBlur = 11;
  ctx.current.shadowColor = "rgba(35, 35, 35, .5)";
  ctx.current.shadowOffsetX = shadowx.current;
  ctx.current.shadowOffsetY = shadowy.current;
};
export let shadowoff = (context) => {
    let ctx = context.ctx;
  //shadow
  ctx.current.shadowBlur = 0;
  ctx.current.shadowColor = "rgba(35, 35, 35, .5)";
  ctx.current.shadowOffsetX = 0;
  ctx.current.shadowOffsetY = 0;
};
export let forward = (h,context) => {
    let ctx = context.ctx;
    let x = context.x;
    let y = context.y;
    x1 = x.current + h * Math.cos((Math.PI / 180) * o);
    y1 = y.current + h * Math.sin((Math.PI / 180) * o);
    ctx.current.lineTo(x1, y1);
    ctx.current.stroke();
    x.current = x1;
    y.current = y1;
  };
  export let right = (p,context) => {
      let o = context.o;
    o.current += p;
  };
export let star = (e, color, color0, tox, toy, w, text,context) => {
  let ctx = context.ctx;
  let fontguy = context.fontguy;
  let x = context.x;
  let y = context.y;
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
export let circle = (x, y, r,context) => {
    let ctx = context.ctx;
  ctx.current.arc(x, y, 10, 0, Math.PI * 2);
};
export let chat = (color, color0, tox, toy, w, text, levitate,context) => {
  let ctx = context.ctx;
  let chathi = context.chathi;
    let chatwi = context.chatwi;
  let fontguy = context.fontguy;
  let x = context.x;
  let y = context.y;
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

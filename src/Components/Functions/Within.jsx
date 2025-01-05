export let chatwithin = (e,context) => {
      let ctx = context.ctx;
      let canvas = context.canvas;
      let data = context.data;
      let datayy = context.datayy;
      let triwid = context.triwid;
      let chathi = context.chathi;
      let shadowy = context.shadowy;
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

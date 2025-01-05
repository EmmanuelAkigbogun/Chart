import { useContext, useEffect } from "react";
import { inputfx } from "./Functions/Input";
import { hover } from "./Functions/Hover";
import { tryhover } from "./Functions/Hover";
import { Context } from "./BarCharts";
function Functions() {
    let context=useContext(Context)
    let canvas = context.canvas;
    let lowest = context.lowest;
    let difference = context.difference;
    let constantscaley = context.constantscaley;
     useEffect(() => {
       inputfx(context);
       canvas.current.addEventListener("touchstart", (e) => {
         console.log(e);
         hover("touch", "touch", context);
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
         inputfx(context);
         tryhover(context);
       });
     }, [context.state]);
    return<></>
}
export default Functions;
import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"
const ResponsiveGridLayout = WidthProvider(Responsive);

function MyFirstGrid() {
  const [items, setItems] = useState(["a", "b", "c"]);

  const createElement = (x, i) => {
    return (<div key={x} data-grid={{ x: i, y: 0, w: 1, h: 2 }}>{i}</div>)
  }

  const onAddItem = () => {
    setItems(items.concat("d"))
  }
  return (
    <div>
      <button onClick={() => onAddItem()}>Add</button>
      <ResponsiveGridLayout
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {_.map(items, createElement)}
        {/* <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
          a
        </div>
        <div key="b" data-grid={{ x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
          b
        </div>
        <div key="c" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
          c
        </div> */}

      </ResponsiveGridLayout>
    </div>
  );
}

export default MyFirstGrid;

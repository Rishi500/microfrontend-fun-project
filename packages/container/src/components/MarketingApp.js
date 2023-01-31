import React from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";
export default () => {
  const ref = React.useRef(null);
  const history = useHistory();
  React.useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = history.location;
        if (nextPathname !== currentPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

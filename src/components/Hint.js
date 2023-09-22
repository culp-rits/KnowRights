import { useMemo } from "react";

const Hint = ({ taskONEPosition, taskONETop, taskONELeft }) => {
  const taskONEStyle = useMemo(() => {
    return {
      position: taskONEPosition,
      top: taskONETop,
      left: taskONELeft,
    };
  }, [taskONEPosition, taskONETop, taskONELeft]);

  return <div className="w-56 h-[169px]" style={taskONEStyle} />;
};

export default Hint;

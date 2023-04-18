import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import "./numberanimation.sass";

interface PropsNumber {
  value: number;
}

const NumberAnimation = ({ value }: PropsNumber) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    reset: true,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const props = useSpring({
    to: {
      opacity: inView ? 1 : 0,
    },
  });

  return (
    <animated.div className="number" ref={ref} style={props}>
      {number.to((value) => value.toFixed(0))}
    </animated.div>
  );
};

export default NumberAnimation;

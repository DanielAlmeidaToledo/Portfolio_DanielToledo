import { useSpring, animated } from "@react-spring/web";

import "./numberanimation.sass";

interface PropsNumber {
  value: number;
}

const NumberAnimation = ({ value }: PropsNumber) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 1000,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <animated.div className="number">
      {number.to((value) => value.toFixed(0))}
    </animated.div>
  );
};

export default NumberAnimation;

import { useSpring, animated } from "@react-spring/web";

interface PropsNumber {
  value: number;
}

const NumberAnimation = ({ value }: PropsNumber) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((value) => value.toFixed(0))}</animated.div>;
};

export default NumberAnimation;

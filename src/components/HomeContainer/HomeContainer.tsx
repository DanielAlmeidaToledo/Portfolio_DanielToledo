import styles from "../../styles/abstracts/styles.module.css";
import "./homecontainer.sass";

import arrow from "../../assets/arrow.svg";
import { Link } from "react-scroll";

import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const HomeContainer = () => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e: any) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };

  const { innerWidth: width } = window;

  return (
    <div className="mainDiv">
      <div className="mainItem">
        <h1>Daniel Toledo</h1>
        <span>Frontend Developer</span>
      </div>
      <div className="mainImg"></div>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
      </div>
      <Link
        className="arrow"
        to={innerWidth > 1000 ? "main-content" : "sidebar"}
        spy={true}
        smooth={true}
        offset={-90}
        duration={700}
      >
        <img src={arrow} alt="Seta" />
      </Link>
    </div>
  );
};

export default HomeContainer;

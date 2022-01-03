import React from "react";
import { useRef, useEffect, useState } from "react";

const SlidingNav = ({ liArr, urlArr }) => {
  const [slidingSpan, setSlidingSpan] = useState({
    display: "inline-block",
    width: "0px",
    borderBottom: "2px solid",
    position: "absolute",
    transition: "all .5s",
  });
  const [arrOnMouseOVer, setArrOnMouseOver] = useState(
    Array(liArr.length).fill(false)
  );
  const ulRef = useRef();
  const liRef = useRef();
  const gap = 16;

  const slidingNavStyle = {
    padding: "1rem",
    display: "flex",
  };
  const ulStyle = {
    display: "flex",
    listStyle: "none",
    gap: "1rem",
    position: "relative",
  };

  const checkLength = () => {
    if (liArr.length !== urlArr.length) {
      window.alert("liArr and urlArr don't have the same length!");
    }
  };

  const handleMouseOver = (index) => {
    setArrOnMouseOver((prev) => {
      return prev.map((item, i) => {
        return i === index ? true : false;
      });
    });
  };

  useEffect(() => {
    checkLength();
    let liLength = [];

    const getArrTrueIndex = () => {
      return arrOnMouseOVer.findIndex((item) => item === true);
    };

    for (let i = 0; i < ulRef.current.children.length - 1; i++) {
      liRef.current = ulRef.current.children[i];
      liLength.push(liRef.current.offsetWidth);
    }
    // console.log(liLength);
    if (arrOnMouseOVer.includes(true)) {
      //   console.log(
      //     liLength[arrOnMouseOVer.findIndex((item) => item === true)] + "px"
      //   );
      setSlidingSpan({
        ...slidingSpan,
        top: ulRef.current.offsetHeight + "px",
        width: liLength[getArrTrueIndex()] + "px",
        left: getArrTrueIndex()
          ? liLength
              .map((curr, i) => {
                return i >= getArrTrueIndex() ? 0 : curr;
              })
              .reduce((prev, curr) => prev + curr) +
            arrOnMouseOVer.findIndex((item) => item === true) * gap +
            "px"
          : "0px",
      });
    }
  }, [arrOnMouseOVer]);

  return (
    <div className="slidingNav" style={slidingNavStyle}>
      <ul className="slidingNav__ul" ref={ulRef} style={ulStyle}>
        {liArr.map((item, i) => (
          <li key={item} onMouseOver={handleMouseOver.bind(null, i)}>
            <a href={urlArr[i]}>{item}</a>
          </li>
        ))}
        <span className="slidingSpan" style={slidingSpan}></span>
      </ul>
    </div>
  );
};

export default SlidingNav;

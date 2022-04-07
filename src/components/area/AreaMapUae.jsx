import React, { useImperativeHandle, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import classes from "./AreaMap.module.scss";

const AreaMapUae = React.forwardRef((props, ref) => {
  const arrowCurr = useSelector((state) => state.mouseLocation.currLocation);

  const mapRef = useRef(null);

  const animateMap = () => {
    mapRef.current.classList.add(`${classes["area-map-active"]}`);
    setTimeout(() => {
      mapRef.current.classList.add(`${classes["area-map-animate"]}`);
    }, 500);
  };

  const removeAnimation = () => {
    mapRef.current.classList.remove(`${classes["area-map-animate"]}`);
  };

  useImperativeHandle(ref, () => {
    return { animateMap, removeAnimation };
  });

  useEffect(() => {
    const indicator = document.querySelector(`[data-type="indicator"]`);
    const { width, height } = indicator.getBoundingClientRect();
    // if (arrowCurr.x - width * 1.2 < 0) {
    //   indicator.style.left = `${arrowCurr.x - width * 1.2}px`;
    // } else {
    //   indicator.style.left = `${arrowCurr.x - width * 1.2}px`;
    // }
    indicator.style.left = `${arrowCurr.x - width * 1.2}px`;
    indicator.style.top = `${arrowCurr.y - height * 1.2}px`;
  }, [arrowCurr]);

  const onMouseOverHandler = (stateName, event) => {
    // document.querySelectorAll(`.${classes["map-loc"]}`).forEach((el) => {
    //   el.style.fill = `#000`;
    //   el.style.stroke = `#fff`;
    // });
    props.setActiveState(event.target.getAttribute("loc"));
    event.target.style.fill = `#fff`;
    // event.target.style.stroke = `#69b423`;
  };

  const onMouseOutHandler = () => {
    document.querySelectorAll(`.${classes["map-loc"]}`).forEach((el) => {
      el.style.fill = `#252525`;
      el.style.stroke = `#fff`;
      props.setActiveState("");
    });
  };

  return (
    <div>
      <svg
        ref={mapRef}
        className={classes["area-map"]}
        width="884"
        height="381"
        viewBox="0 0 884 381"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="uae-map">
          <path
            id="abu-dhabi"
            loc="abd"
            className={classes["map-loc"]}
            onMouseOver={onMouseOverHandler.bind(null, "Abu Dhabi")}
            onMouseOut={onMouseOutHandler}
            d="M0.859863 178.825V207.538L170.535 328.878L268.557 341.536L619.95 379.828L668.675 368.4V331.657L723.895 265.38L726.954 258.586L739.182 254.056L742.618 241.086L720.45 228.942L722.357 225.031L740.319 227.504L757.519 221.432L774.999 226.215L788.757 222.515L815.986 220.973L820.286 215.873L811.11 211.552L807.96 198.582L796.109 197.86L789.23 201.569L774.138 198.069L784.648 185.821L773.848 164.156L778.722 157.362L785.022 155.201L781.872 146.246L770.692 150.105L755.792 148.405L752.356 149.179L741.605 149.641L691.448 160.913L683.281 158.674L678.693 158.908L666.373 161.915L654.047 157.515L651.177 147.942L623.186 126.023L613.248 124.578L595.293 126.641L586.26 132.121L574.227 133.121L565.91 137.214L567.778 148.173L562.617 157.05L556.884 158.514L551.294 171.484L542.768 175.727L521.058 173.332L519.984 166.932L504.584 170.238L506.445 179.902L526.008 182.987L519.435 191.682L497.653 198.476L486.381 195.183L474.153 187.465L464.453 190.628L478.65 204.991L429.496 218.573L376.326 216.796L345.37 210.011L312.98 211.241L276.58 202.748L269.701 208.774L264.54 207.074L205.786 207.998L196.903 203.364L182.003 205.993L181.235 211.037L127.258 224.365L81.9689 223.05L73.9449 224.827L67.9249 222.354L54.0249 220.506L47.8679 214.714L50.0159 210.158L45.2849 205.297L44.2849 202.44L48.1499 193.871L43.4189 191.021L34.4839 192.101L27.8909 190.301L20.4419 193.491L12.5159 188.491L11.8159 179.36L0.859863 178.825Z"
            fill="#252525"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="dubai"
            loc="dxb"
            className={classes["map-loc"]}
            onMouseOver={onMouseOverHandler.bind(null, "Dubai")}
            onMouseOut={onMouseOutHandler}
            d="M651.184 147.945L654.054 157.518L666.38 161.918L678.7 158.911L683.288 158.677L691.456 160.916L741.612 149.644L752.363 149.182L753.58 148.909L745.914 121.088L742.328 118.849L751.647 114.912V113.212L743.336 109.893L741.325 102.559L742.325 100.086L722.411 92.9861L716.678 86.6601L711.803 85.2671L692.884 87.3501L682.998 86.4261L669.813 92.0621L659.113 105.442L648.798 106.47L631.786 117.07L613.251 124.58L623.189 126.025L651.184 147.945Z"
            fill="#252525"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="sharjah"
            loc="shj"
            className={classes["map-loc"]}
            onMouseOver={onMouseOverHandler.bind(null, "Sharjah")}
            onMouseOut={onMouseOutHandler}
            d="M806.892 82.7201L813.192 79.3621L811.402 75.3081L805.024 74.4621L797.885 78.7621L794.208 78.3521L793.395 75.1521L789.529 74.3841L786.129 76.7271L793.392 81.4841L787.711 84.9071L775.476 84.4451L753.576 69.9841L736.883 66.4311L726.438 58.6671L724.199 58.3671L714.521 60.5201L708.026 68.0301L721.026 70.5031L729.909 68.0301L740.709 75.8531L732.873 82.3411L728.194 80.2781L716.154 80.0241L694.945 77.3491L683.003 86.4281L692.889 87.3521L711.808 85.2691L716.682 86.6621L722.416 92.9881L742.33 100.088L741.33 102.561L743.341 109.895L751.652 113.214V114.914L742.333 118.851L745.919 121.09L753.585 148.911L755.804 148.411L770.704 150.111L782.004 146.577L778.737 133.49L784.275 126.904L785.707 122.479L802.999 118.106L802.335 109.717L805.745 101.79L803.096 96.7401L809.402 88.7481L806.892 82.7201Z"
            fill="#252525"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="ajman"
            d="M694.944 77.3461L708.031 68.0271L721.031 70.5001L729.914 68.0271L740.714 75.8501L732.879 82.3381L728.2 80.2751L716.16 80.0211L694.944 77.3461Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="umm-al-quwain"
            d="M726.442 58.671L737.031 59.071L747.684 53.904L753.034 48.06L765.165 46.16L774.719 51.405L778.734 57.633L777.966 66.64L788.001 70.291L789.53 74.385L786.13 76.728L793.393 81.485L787.712 84.908L775.477 84.446L753.577 69.985L736.884 66.432L726.442 58.671Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="ras-al-khaimah"
            d="M765.164 46.161L774.672 39.961L785.612 38.803L797.359 29.172L812.259 20.372L822.294 1.48605L838.538 0.868042L847.707 8.48904L839.872 23.509L841.206 37.82L839.106 45.643L824.58 49.216L812.469 55.316L803.729 55.856L810.107 64.8111L813.621 63.965L817.702 66.815L833.249 67.127L829.214 74.95L834.804 75.334L833.945 78.834L813.185 79.361L811.395 75.307L805.017 74.461L797.878 78.761L794.201 78.351L793.388 75.151L789.522 74.383L787.992 70.29L777.957 66.639L778.725 57.632L774.71 51.404L765.164 46.161Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="ras-al-khaymah"
            d="M826.976 139.56L839.976 139.15L844.276 140.95L852.255 138.262L863.136 138.119L863.689 137.904L853.355 127.517H843.891L839.973 123.97L844.273 120.983L837.635 110.766L839.135 103.314L837.918 96.3051L848.304 93.0251L848.74 88.2031L837.774 81.5911L830.895 82.2611V85.7821L837.631 87.4821L837.531 90.1311L827.405 94.1981L806.591 92.3021L803.091 96.7341L805.74 101.784L802.33 109.711L802.994 118.1L813.194 119.955L828.123 133.999L826.976 139.56Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="dubai_2"
            d="M829.318 148.176L838.846 147.942L844.267 140.942L839.967 139.142L826.967 139.552L824.301 144.976L829.318 148.176Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="fujairah"
            d="M839.113 45.647L851.628 50.02L864.045 49.656L878.376 55.578L877.23 70.553L864.859 75.232L857.408 81.746L848.616 82.338L842.642 84.525L837.774 81.59L830.895 82.26V85.781L837.631 87.481L837.531 90.13L827.405 94.197L806.593 92.303L809.393 88.743L806.888 82.723L813.188 79.365L833.948 78.838L834.807 75.338L829.217 74.954L833.252 67.131L817.705 66.819L813.625 63.969L810.111 64.815L803.733 55.86L812.473 55.32L824.584 49.22L839.113 45.647Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="khawr-fakkan"
            d="M876.899 79.3651L881.767 83.9991L862.204 89.9411L855.117 93.9171L848.303 93.0251L848.739 88.2031L842.639 84.5261L848.613 82.3391L857.405 81.7471L864.857 75.2331L877.229 70.5541L876.899 79.3651Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="al-fyjayreh"
            d="M880.96 110.277L881.025 110.101L882.225 84.356L881.77 83.998L862.207 89.94L855.12 93.9161L848.306 93.024L837.919 96.304L839.136 103.313L837.636 110.765L845.771 111.592L853.639 117.202L860.277 117.716L864.722 115.757L864.052 110.121L869.213 107.96L880.96 110.277Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="al=ayan"
            d="M863.681 137.903L864.468 137.617L866.791 132.124L858.791 125.512L865.143 118.282L877.183 123.065L877.547 122.74L880.957 110.277L869.204 107.96L864.043 110.121L864.713 115.757L860.268 117.716L853.63 117.202L845.762 111.592L837.627 110.766L844.265 120.983L839.965 123.97L843.883 127.517H853.339L863.681 137.903Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="kalba"
            d="M866.793 132.124L877.186 123.065L865.146 118.282L858.794 125.512L866.793 132.124Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="Path 1198"
            d="M374.89 201.053L408.998 197.038L419.983 193.231L425.528 194.773L426.765 199.042L440.334 201.053L439.475 206.812L418.454 207.124L414.254 206.35L406.711 209.955L387.695 207.02L374.895 207.176L374.89 201.053Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="Path 1199"
            d="M193.033 181.988L205.073 182.45V191.95L190.599 196.506L183.004 194.111V186.011L193.033 181.988Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
          <path
            id="Path 1200"
            d="M138.861 162.998L127.114 166.011L128.259 173.573L136.14 174.191L140.299 178.363L149.755 177.972V172.336L153.77 169.791L150.757 164.155L145.024 165.391L138.861 162.998Z"
            stroke="white"
            strokeWidth="1.72"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
});

export default AreaMapUae;

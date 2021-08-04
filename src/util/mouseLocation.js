import { mouseLocationAction } from "../store/mouseLocation";
const useMouseLocation = (config, refs, dispatch) => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        if (config.default) {
          dispatch(
            mouseLocationAction.setRestLocation({
              x: config.RestCoords.x + 6,
              y: config.RestCoords.y + 11,
            })
          );
        } else {
          const bounding = refs.bounding;

          dispatch(
            mouseLocationAction.setRestLocation({
              x: bounding.left + 6,
              y: bounding.top + 11,
            })
          );
        }
      }
    });
  }

  let options = {
    threshold: [0.5],
  };

  let observer = new IntersectionObserver(onEntry, options);
  observer.observe(refs.el);
};
export default useMouseLocation;

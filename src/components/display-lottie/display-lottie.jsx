import { Suspense } from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

export default function DisplayLottie({ animationData }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Suspense fallback={<Loading />}>
      {/* To override default onClick pause by Lottie */}
      <div onClick={() => null}>
        <Lottie options={defaultOptions} />
      </div>
    </Suspense>
  );
}

// PropTypes validation
DisplayLottie.propTypes = {
  animationData: PropTypes.object.isRequired,
};

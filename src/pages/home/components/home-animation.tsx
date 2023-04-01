import Lottie from "react-lottie-player"
import developerAnimation from "assets/animation/developer-animation.json"

export const HomeAnimation = () => {
    return (
        <div>
            <Lottie loop animationData={developerAnimation} play style={{width: "40vw", height: 500}}/>
        </div>
    )
}
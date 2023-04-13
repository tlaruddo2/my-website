import Lottie from "react-lottie-player"
import developerAnimation from "assets/animation/developer-animation.json"
import { AnimationContainer } from "../styled/animation-container"

export const HomeAnimation = () => {
    return (
        <AnimationContainer>
            <Lottie loop animationData={developerAnimation} play style={{height: "100%", width: "100%"}}/>
        </AnimationContainer>
    )
}
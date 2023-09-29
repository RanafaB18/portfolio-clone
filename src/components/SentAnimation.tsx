import { Player } from "@lottiefiles/react-lottie-player"
const SentAnimation = () => {
  return (
    <article className="absolute -top-2 left-10 right-0 ">
      <Player autoplay loop src={"/envelope.json"} className="h-10"/>
    </article>
  )
}

export default SentAnimation

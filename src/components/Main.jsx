import StarSections from './StarSections'
import MainPoster from './MainPoster'
import MainPosterDesc from './MainPosterDesc'
import UseoServices from './UseoServices'
import PosterTwo from './PosterTwo'
import Slider from './Slider'

const Main = () => {
  return (
    <main className="w-full bg-gradient-to-t from-white">
        <StarSections />

        {/* the first main poster and its descriptions */}
        <div className="md:flex md:flex-row-reverse">
          <MainPoster />
          <MainPosterDesc />
        </div>
        <UseoServices />
        <PosterTwo />
        <Slider />
      </main>
  )
}

export default Main
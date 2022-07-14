import Navbar from '../components/navbar';
import FrontCover from '../components/front_cover';
import style from '../styles/index.module.scss'
import Link from 'next/link';

export default function Index() {

  return(
    <div className={style.container}>

      <Navbar/>
      <FrontCover/>

      <div class="container gym-class mb-5">
          <div class="row px-3">
            <div class="col-md-6 p-0">
                <div class="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i class="flaticon-six-pack"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div class="col-md-6 p-0">
                <div class="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <i class="flaticon-bodybuilding"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
          </div>
      </div>

    </div>
  )
}
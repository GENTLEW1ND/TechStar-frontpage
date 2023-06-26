import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>tachyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>


      <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and only solution to the tech problem you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            eligendi accusantium architecto placeat eveniet laudantium facere
            dicta ullam pariatur, soluta aspernatur a minima vero laborum! Totam
            autem eligendi amet officiis dignissimos fuga quos numquam, adipisci
            commodi architecto maiores dolor? Soluta expedita deserunt ex vel
            ad? Cupiditate ad ipsa nesciunt blanditiis amet, inventore
            voluptatibus at, enim quam doloremque magnam eum animi laudantium
            necessitatibus ex sequi praesentium ea dolor tenetur dolorum, vel
            reprehenderit nemo quidem ducimus. Placeat harum eos magni odio ex
            nobis, voluptate expedita facilis ipsa quia{" "}
          </p>
        </div>
      </div>


      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
                animationDelay:"0.3s"
            }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s"
            }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:"0.7s"
            }}>
                <AiFillYoutube />
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:"1s"
            }}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

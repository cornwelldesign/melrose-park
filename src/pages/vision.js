import React from "react";
import Image from "../components/Image.js";
import ParaTitle from "../components/ParaTitle.js";
import Team from "../components/Team.js";
import Hero from "../components/Hero.js";
import { LargeP, P } from "../components/Text.js";

class VisionPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Vision | Melrose Park ",
      "Melrose Park is the new Australian dream, a welcoming neighbourhood with a sense of place. Beautiful residences, public spaces, vibrant shopping and dining"
    );
  }

  render() {
    return (
      <div>

			

        <Hero
          image="/images/melrose-park-sydney-property-007-PARK.jpg"
          alt="Melrose Park Property, Sydney - Play Park (Artists Impression)"
          vidButton="Teaser Video"
          video="https://s3-ap-southeast-2.amazonaws.com/cornwell-misc/melrose-park/melrose-park-sydney-property.mp4"
        />
								<section>

        <ParaTitle title="A Transformation" />

        <div className="row">
          <div className="col padd col-03">
            <LargeP type="green" icon={true}>
              Celebrating a multi-faceted and multi-cultural lifestyle, Melrose
              Park Residences will excite, inspire and connect.
            </LargeP>
          </div>
          <div className="col padd col-09">
            <Image
              src="/images/melrose-park-sydney-property-008-SUBURB.jpg"
              alt="Melrose Park Property, Sydney - View of Suburb (Artists Impression)"
            />
          </div>
        </div>
        <div className="row padd">
          <div className="col padd col-03" />
          <div className="col padd col-05">
            <P>
              Melrose Park is the new Australian dream, a welcoming
              neighbourhood with a sense of place. Beautiful residences, public
              spaces, vibrant shopping and dining precincts set the stage for
              new friendships and possibilities, reflecting the values that make
              Sydney a cosmopolitan city.
            </P>
          </div>
        </div>

        <div className="row ">
          <div className="col padd col-09">
            <Image
              src="/images/melrose-park-sydney-property-009-RETAIL.jpg"
              alt="Melrose Park Property, Sydney - Retail Section (Artists Impression)"
            />
          </div>
        </div>
        <div className="row padd">
          <div className="col col-06 " ></div>
          <div className="col padd col-05">
            <P>
              Melrose Park has been imagined for the Modern Australian, people
              who are citizens of the world. Wherever they’re from or wherever
              they’ve been, Modern Australians appreciate change and adventure,
              seeking new experiences every day. A development of impressive
              scale, the masterplan has been thoughtfully envisioned for a
              robust social fabric, harmonious living and the long-term future.
            </P>
          </div>
        </div>
				</section>

        <Team />
      </div>
    );
  }
}

export default VisionPage;

import React from "react";
import Hero from "../components/Hero.js";
import Image from "../components/Image.js";
import Transport from "../components/Transport.js";
import ParaTitle from "../components/ParaTitle.js";
import Team from "../components/Team.js";
import { LargeP, P, H4, H3 } from "../components/Text.js";

class LifestylePage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Green Space | Melrose Park ",
      "The sprawling 13,000m2 Central Park will be the heart of the new Melrose Park community."
    );
  }

  render() {
    return (
      <section>
        <div className="row">
				<div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-027-RESIDENTS.jpg"
              alt="Melrose Park Property, Sydney - Residents (Young Family)"
            />
            <H4 icon={true}>People I Love, In A Place We Love.</H4>
          </div>
          <div className="col  col-10">
            <Image
              src="/images/melrose-park-sydney-property-028-PARK-v3.jpg"
              alt="Melrose Park Property, Sydney - Gardens (Artists Impression)"
            />
          </div>
        </div>
        <div className="row">
          <div className="col padd col-02" />
          <div className="col  col-03">
            <Image
              src="/images/melrose-park-sydney-property-029-DOG.jpg"
              alt="Melrose Park Property, Sydney - Dog Park"
            />
          </div>
          <div className="col padd col-06">
            <LargeP type="green">
              The sprawling 13,000m<sup>2</sup> Central Park will be the heart
              of the new Melrose Park community.
            </LargeP>
            <P>
              Inspired by the best parks around the world, abundant open spaces
              combine sweeping lawns, terraced gardens and vantage points. Bask
              in the expanses of green at the sprawling Central Park, which will
              feature cafes, al fresco dining, playgrounds and pop-up markets.{" "}
            </P>
            <P>
              Enjoy lush landscapes along the boulevard, with planted edges and
              avenues of trees, or discover floral and pocket gardens throughout
              Melrose Park.
            </P>
          </div>
        </div>

        <div className="row">
          <div className="col col-02" > </div>
					
          <div className="col col-03 padd">
            <H3 icon={true}>Playgrounds To Laugh And Play.</H3>
          </div>
          <div className="col col-06 padd">
            <img
              src="/images/melrose-park-sydney-property-032-KIDS-v2.jpg"
              alt="Melrose Park Property, Sydney - Play Park "
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-02" ></div>
          <div className="col col-03 padd">
            <Image
              src="/images/melrose-park-sydney-property-048-LAKE.jpg"
              alt="Melrose Park Property, Sydney - Lake"
            />
          </div>
					<div className="col col-02" ></div>

          <div className="col col-04 padd">
            <Image
              src="/images/melrose-park-sydney-property-047-GOLF.jpg"
              alt="Melrose Park Property, Sydney - Golf Course"
            />
          </div>
        </div>
        <ParaTitle title="Plenty of Room To Grow." />

        <div className="row">
          <div className="col col-02" />
          <div className="col col-10 ">
            <Image
              src="/images/melrose-park-sydney-property-033-RIVER.jpg"
              alt="Melrose Park Property, Sydney - River and Play Park(Artists Impression)"
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-04" ></div>

          <div className="col col-04">
            <LargeP type="green">
              A versatile neighbourhood 
							park, The Common is a 
							generous everyday
              retreat of over 5,000m2.
            </LargeP>

            <P>
						Enjoy lush landscapes along Boulevard Park, with planted edges and avenues of trees, play a round of golf in the leading Ryde-Parramatta Golf Club or discover floral and pocket gardens throughout Melrose Park. 

            </P>
          </div>
        </div>
        <div className="row">
          <div className="col col-02" />
          <div className="col col-02 padd">
            <Image
              src="/images/melrose-park-sydney-property-034-RUNNING.jpg"
              alt="Melrose Park Property, Sydney - Running"
            />
            <H4 icon={true}>
              Running Paths And Bike Trails For My Active Lifestyle.
            </H4>
          </div>
          <div className="col col-08">
            <Image
              src="/images/melrose-park-sydney-property-035-BIKE.jpg"
              alt="Melrose Park Property, Sydney - Cycling Track"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default LifestylePage;

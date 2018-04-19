import React from "react";
import Image from "../components/Image.js";
import Transport from "../components/Transport.js";
import ParaTitle from "../components/ParaTitle.js";
import Team from "../components/Team.js";
import { LargeP, P, H4, H3 } from "../components/Text.js";
import Hero from "../components/Hero.js";

class ResidencesPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Residences | Melrose Park ",
      " At Melrose Park, it is really about defining a different way to live. Your sanctuary in vibrant Melrose Park, escape into your tranquil domain, where every detail has been considered for quality of life."
    );
  }

  render() {
    return (
      <div>
        <Hero
          image="/images/melrose-park-sydney-property-036-BUILDING.jpg"
          alt="Melrose Park Property, Sydney - Residences Building (Artists Impression)"
          title="Melrose Park Residences"
        />
				<section>
        <div className="row">
          <div className="col padd col-02" ></div>
          <div className="col padd col-04">
            <LargeP type="green">
              At Melrose Park, it is really about defining a different way to
              live. Your sanctuary in vibrant Melrose Park, escape into your
              tranquil domain, where every detail has been considered for
              quality of life.
            </LargeP>
          </div>
          <div className="col  col-06">
					<H3 icon={true}>More Space <br/>To Live, Love, <br/>And Grow.</H3>

            <Image
              src="/images/melrose-park-sydney-property-037-BUILDING.jpg"
              alt="Melrose Park Property, Sydney - Residence Building (Artists Impression)"
            />

          </div>
        </div>
        <div className="row">
				<div className="col padd col-02" ></div>
          <div className="col col-08">
            <Image
              src="/images/melrose-park-sydney-property-037-BALCONY.jpg"
              alt="Melrose Park Property, Sydney - Balcony Area (Artists Impression)"
            />
          </div>
        </div>
				<div className="row" >
					<div className="col padd col-01"></div>
					<div className="col col-02" >
</div>


				</div>
				<div className="row" >
				<div className="col padd col-06"></div>
				<div className="col padd col-05"><P>The heart of your home. Generously sized and light-filled, seamless kitchen and living areas offer ample space for precious moments, perfect for a growing family or effortless entertaining. Beautiful interiors have been imagined for modern living, featuring quality materials, finishes and accessories in a neutral palette.</P></div>
				<div className="col col-02" >
</div>
				</div>
				</section>
      </div>
    );
  }
}

export default ResidencesPage;

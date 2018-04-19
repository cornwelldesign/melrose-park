import React from "react";
import Image from "../components/Image.js";
import Transport from "../components/Transport.js";
import ParaTitle from "../components/ParaTitle.js";
import Team from "../components/Team.js";
import { LargeP, P, H4, H3 } from "../components/Text.js";

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
          <div className="col padd col-02" />
          <div className="col padd col-05">
            <LargeP type="green">
              At Melrose Park, it is really about defining a different way to
              live. Your sanctuary in vibrant Melrose Park, escape into your
              tranquil domain, where every detail has been considered for
              quality of life.
            </LargeP>
            <H3 icon={true}>More Space To Live, Love, And Grow.</H3>
          </div>
          <div className="col padd col-05">
            <Image
              src="/images/melrose-park-sydney-property-037-BUILDING.jpg"
              alt="Melrose Park Property, Sydney - Residence Building (Artists Impression)"
            />

          </div>
        </div>
        <div className="row">
          <div className="col padd col-01" />
          <div className="col padd col-05">
            <Image
              src="/images/melrose-park-sydney-property-037-BALCONY.jpg"
              alt="Melrose Park Property, Sydney - Balcony Area (Artists Impression)"
            />
          </div>
        </div>
				</section>
      </div>
    );
  }
}

export default ResidencesPage;

import React from "react";
import Image from "../components/Image.js";
import Transport from "../components/Transport.js";
import ParaTitle from "../components/ParaTitle.js";
import Team from "../components/Team.js";
import {LargeP, P, H4, H3} from "../components/Text.js";
class SmartCity extends React.Component {
  componentDidMount() {
    this
      .props
      .updateMeta("Smart City | Melrose Park ", "With the future in mind, Melrose Park takes an astute approach to sustainable ur" +
          "ban design with Smart City technology.");
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-024-RESIDENCE.jpg"
              alt="Melrose Park Property, Sydney - Resident (Downsizer)"/>
            <H4 icon={true}>My Life Made Simply Wonderful.</H4>
          </div>
        </div>
        <div className="row">
          <div className="col padd col-02"/>
          <div className="col  col-10">
            <Image
              src="/images/melrose-park-sydney-property-025-GARDENS.jpg"
              alt="Melrose Park Property, Sydney - Gardens (Artists Impression)"/>
          </div>
        </div>
        <ParaTitle title="A Smarter Tomorrow."/>

        <div className="row">
          <div className="col col-04"/>
          <div className="col col-05 padd">
            <LargeP type="green">
              With the future in mind, Melrose Park takes an astute approach to sustainable
              urban design with Smart City technology.
            </LargeP>
          </div>
        </div>
        <div className="row">
          <div className="col col-04"/>
          <div className="col col-08">
            <Image
              src="/images/melrose-park-sydney-property-026-MAC.jpg"
              alt="Melrose Park Property, Sydney - Apple Mac"/>
          </div>

        </div>
        <div className="row">
          <div className="col col-04"/>
          <div className="col col-05 padd">
            <P >
              Melrose Park will be Sydney’s leading development that incorporates Smart City
              initiatives from day one. They include advanced technologies to monitor
              environmental conditions, clever rainwater collection to sustain the precinct’s
              parklands, new generation street lighting, smart wayﬁnding poles and electric
              car charging stations.

            </P>
            <P >
              At home, you will benefit from NBN node-to-home rapid connectivity, while
              proposed WiFi throughout the neighbourhood offers connectivity on the move via
              hotspots and device charging stations. Many of these technologies will be
              powered by renewable energy sources, enriching the environment you live in. As
              technologies continue to evolve, Melrose Park will continue to improve and
              implement the latest initiatives as they become available.

            </P>
          </div>
        </div>
      </section>
    );
  }
}

export default SmartCity;

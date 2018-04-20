import React from "react";
import Hero from "../components/Hero.js";
import Image from "../components/Image.js";
import Transport from "../components/Transport.js";
import ParaTitle from "../components/ParaTitle.js";
import Team from "../components/Team.js";
import { LargeP, P, H4, H3 } from "../components/Text.js";

class LocationPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Location | Melrose Park ",
      "A number of new commuter initiatives proposed will make Melrose Park one of Sydney’s most connected places."
    );
  }

  render() {
    return (
      <section>
			
        <div className="row">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-010-RESIDENTS.jpg"
              alt="Melrose Park Property, Sydney - Residents (Young Couple)"
            />
            <H4 icon={true}>My World Connected Like Never Before</H4>
          </div>
          <div className="col  col-10">
            <Image
              src="/images/melrose-park-sydney-property-008-SUBURB.jpg"
              alt="Melrose Park Property, Sydney - View of Suburb (Artists Impression)"
            />
          </div>
        </div>

        <div className="row">
          <div className="col col-02" ></div>
          <div className="col col-04 ">
            <LargeP type="green">
              A number of new commuter initiatives proposed will make Melrose
              Park one of Sydney’s most connected places.
            </LargeP>
          </div>
        </div>
        <div className="row">
          <div className="col col-02" />
          <div className="col col-05">
            <Image
              src="/images/melrose-park-sydney-property-012-TRAIN.jpg"
              alt="Melrose Park Property, Sydney - Meadowbank Train Station"
            />
          </div>
          <div className="col col-02 top padd">
            <H3 icon={true}>Minutes to Meadowbank station.</H3>
            <P>
              Melrose Park residents have access to the Melrose Park Rider, a
              free shuttle service to the nearby Meadowbank train station.
            </P>
          </div>
        </div>
        <div className="row">
          <div className="col col-02 " ></div>
          <div className="col col-02 top ">
            <H3 icon={true}>Western Sydney Fast Ferry.</H3>
            <P>
              Working with Government we are planning to launch a fleet of
              exclusive private ferries to Parramatta via Sydney Olympic Park,
              Ermington, Rydalmere and Western Sydney University.
            </P>
          </div>
					<div className="col col-01 " ></div>
          <div className="col col-05">
            <Image
              src="/images/melrose-park-sydney-property-013-FERRY.jpg"
              alt="Melrose Park Property, Sydney - Western Sydnery Fast Ferry"
            />
          </div>
        </div>

        <div className="row">
          <div className="col col-02" />
          <div className="col col-03">
            <Image
              src="/images/melrose-park-sydney-property-014-RAIL.jpg"
              alt="Melrose Park Property, Sydney - Light Rail"
            />
          </div>
          <div className="col col-03 padd">
            <H3 icon={true}>Future Light Rail.</H3>
            <P>
              The NSW Government has announced the proposed extension of the
              Parramatta Light Rail, which will see light rail services connect
              Melrose Park and Olympic Park and Parramatta CBD and future West
              Metro Rail.
            </P>
          </div>
        </div>
        <div className="row">
          <div className="col col-02" />
          <div className="col col-06">
            <Image
              src="/images/melrose-park-sydney-property-015-BUS.jpg"
              alt="Melrose Park Property, Sydney - Bus Service"
            />
          </div>
          <div className="col col-03 top padd">
            <H3 icon={true}>
              Easy Connections To The Highway And Rapid Bus Services To Sydney &
              Parramatta.
            </H3>
            <P>
              More than 2,000 express busses service Melrose Park Residences.
              Buses departing every 5 minutes.
            </P>
          </div>
        </div>

				        <div className="row">
          <div className="col col-02" />
          <div className="col col-03 padd">
            <H3 icon={true}>Future Sydney Metro West</H3>
            <P>
              23 mins to Sydney CBD.
            </P>
          </div>
					<div className="col col-05 padd">
            <Image
              src="/images/melrose-park-sydney-property-041-TRAIN.jpg"
              alt="Melrose Park Property, Sydney - Sydney Metro West"
            />
          </div>
        </div>
				<ParaTitle title="Every Journey Made Easy." />

        <div className="row">
				<div className="col col-02" ></div>
          <div className="col col-03">
            <H3 icon={true}>
              The future internal street car will connect residents to a new
              world of possibilities.
            </H3>
          </div>

          <div className="col col-06 padd">
            <Image
              src="/images/melrose-park-sydney-property-016-TRAM.jpg"
              alt="Melrose Park Property, Sydney - Future Light Rail System"
            />
          </div>
        </div>

        <div className="row">
          <div className="col padd col-02" />
          <div className="col col-10">
            <Transport />
          </div>
        </div>
      </section>
    );
  }
}

export default LocationPage;

import React from "react";
import Hero from "../components/Hero.js";
import Image from "../components/Image.js";
import Transport from "../components/Transport.js";
import ParaTitle from "../components/ParaTitle.js";
import Team from "../components/Team.js";
import {LargeP, P, H4, H3} from "../components/Text.js";

class LifestylePage extends React.Component {
  componentDidMount() {
    this
      .props
      .updateMeta("Lifestyle | Melrose Park ", "The pulse of your new neighbourhood, Melrose Park will have everything you need " +
          "for the life you want to live.");
  }

  render() {
    return (
      <section>
        <div className="row tab-hide">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-018-RESIDENT.jpg"
              alt="Melrose Park Property, Sydney - Resident (First Time Buy)"/>
            <H4 icon={true}>Somewhere To Call My Own</H4>
          </div>
        </div>
        <div className="row">
          <div className="col padd col-02"/>
          <div className="col  col-10">
            <Image
              src="/images/melrose-park-sydney-property-019-TOWN-v3.jpg"
              alt="Melrose Park Property, Sydney - Town Center (Artists Impression)"/>
          </div>
        </div>
        <div className="row tab-show">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-018-RESIDENT.jpg"
              alt="Melrose Park Property, Sydney - Resident (First Time Buy)"/>
            <H4 icon={true}>Somewhere To Call My Own</H4>
          </div>
        </div>
        <div className="row">
          <div className="col col-02"></div>
          <div className="col col-05 ">
            <LargeP type="green">
              The pulse of your new neighbourhood, Melrose Park will have everything you need
              for the life you want to live.
            </LargeP>
          </div>
        </div>

        <div className="row">
          <div className="col col-03"></div>
          <div className="col col-03 padd">
            <H3 icon={true}>Amazing Cafés To Hang Out With Friends.</H3>
          </div>
          <div className="col col-06">
            <Image
              src="/images/melrose-park-sydney-property-020-CAFE.jpg"
              alt="Melrose Park Property, Sydney - Local Cafe"/>
            <P>
              A vibrant destination for residents and visitors alike, it will deliver a
              full-line supermarket, specialty grocers, cafés, restaurants, delis, bakery,
              gym, dry cleaner, newsagent, pharmacy, a variety of entertainment and personal
              services.
            </P>
          </div>
        </div>
        <ParaTitle title="Eat Quarter."/>

        <div className="row">
          <div className="col col-02"/>
          <div className="col col-07">
            <Image
              src="/images/melrose-park-sydney-property-021-FOOD.jpg"
              alt="Melrose Park Property, Sydney - Food"/>
          </div>
          <div className="col col-03 padd">
            <Image
              src="/images/melrose-park-sydney-property-022-WINE.jpg"
              alt="Melrose Park Property, Sydney - Drinks"/>
            <H4 icon={true}>
              Taste Something New Every Day.
            </H4>
          </div>
        </div>

        <div className="row">
          <div className="col col-02"/>
          <div className="col col-04">
            <P>At Melrose Park, employment opportunities need not be far from home, with
              15,000m2 of new commercial space bringing in over 1,500 full-time jobs. Young
              families with children will also have access to several childcare centres within
              Melrose Park.</P>

          </div>
        </div>

        <div className="row">
          <div className="col col-04"/>
          <div className="col col-05">
            <Image
              src="/images/melrose-park-sydney-property-022-COFFEE.jpg"
              alt="Melrose Park Property, Sydney - Coffee"/>
          </div>
        </div>
        <div className="row">
          <div className="col col-02"/>
          <div className="col col-10">
            <Image
              src="/images/melrose-park-sydney-property-023-RETAIL-v3.jpg"
              alt="Melrose Park Property, Sydney - Retail (Artists Impression)"/>
          </div>
        </div>

      </section>
    );
  }
}

export default LifestylePage;

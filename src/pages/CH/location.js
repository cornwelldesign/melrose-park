import React from "react";
import Hero from "../../components/Hero.js";
import Image from "../../components/Image.js";
import Transport from "../../components/Transport.js";
import ParaTitle from "../../components/ParaTitle.js";
import Team from "../../components/Team.js";
import {LargeP, P, H4, H3} from "../../components/Text.js";

class LocationPage extends React.Component {
  componentDidMount() {
    this
      .props
      .updateMeta("Location | Melrose Park ", "一系列新的通勤计划提议将使Melrose Park成为悉尼最四通八达的地区之一。");
  }

  render() {
    return (
      <section>

        <div className="row tab-hide">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-010-RESIDENTS.jpg"
              alt="Melrose Park Property, Sydney - Residents (Young Couple)"/>
            <H4 icon={true}>我的世界从未如此的四通八达</H4>
          </div>
        </div>
        <div className="row">
          <div className="col padd col-02"/>
          <div className="col  col-10">
            <Image
              src="/images/melrose-park-sydney-property-008-SUBURB.jpg"
              alt="Melrose Park Property, Sydney - View of Suburb (Artists Impression)"/>
          </div>
        </div>

        <div className="row tab-show">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-010-RESIDENTS.jpg"
              alt="Melrose Park Property, Sydney - Residents (Young Couple)"/>
            <H4 icon={true}>我的世界从未如此的四通八达</H4>
          </div>
        </div>
        <div className="row">
          <div className="col col-02"></div>
          <div className="col col-04 ">
            <LargeP type="green">
              一系列新的通勤计划提议将使Melrose Park成为悉尼最四通八达的地区之一。
            </LargeP>
          </div>
        </div>
        <div className="row">
          <div className="col col-02"/>
          <div className="col col-05">
            <Image
              src="/images/melrose-park-sydney-property-012-TRAIN.jpg"
              alt="Melrose Park Property, Sydney - Meadowbank Train Station"/>
          </div>
          <div className="col col-02 top padd">
            <H3 icon={true}>数分钟即达Meadowbank火车站</H3>
            <P>
            Melrose Park居民可以使用免费班车Melrose Park Rider，前往附近的Meadowbank 火车站。
            </P>
          </div>
        </div>
        <div className="row">
          <div className="col col-02 "></div>
          <div className="col col-02 top ">
            <H3 icon={true}>西悉尼快速渡轮</H3>
            <P>
            我们计划与政府合作，开通经悉尼奥林匹克公园，Ermington，Rydalmere和西悉尼大学等各个站点，终点站设在Parramatta的私人专用渡轮。
            </P>
          </div>
          <div className="col col-01 "></div>
          <div className="col col-05">
            <Image
              src="/images/melrose-park-sydney-property-013-FERRY.jpg"
              alt="Melrose Park Property, Sydney - Western Sydnery Fast Ferry"/>
          </div>
        </div>

        <div className="row">
          <div className="col col-02"/>
          <div className="col col-03">
            <Image
              src="/images/melrose-park-sydney-property-014-RAIL.jpg"
              alt="Melrose Park Property, Sydney - Light Rail"/>
          </div>
          <div className="col col-03 padd">
            <H3 icon={true}>未来的轻轨</H3>
            <P>
            新南威尔士州政府已经宣布将扩建Parramatta轻轨，届时轻轨服务将连接Melrose Park，奥林匹克公园，Parramatta中央商务区和未来的西部城铁。
            </P>
          </div>
        </div>
        <div className="row">
          <div className="col col-02"/>
          <div className="col col-06">
            <Image
              src="/images/melrose-park-sydney-property-015-BUS.jpg"
              alt="Melrose Park Property, Sydney - Bus Service"/>
          </div>
          <div className="col col-03 top padd">
            <H3 icon={true}>
              轻松抵达高速公路，特快巴士直通悉尼和Parramatta
            </H3>
            <P>
            途经Melrose Park Residences的特快巴士有超过2000班次，每5分钟一趟。
            </P>
          </div>
        </div>

        <div className="row">
          <div className="col col-02"/>
          <div className="col col-03 padd">
            <H3 icon={true}>未来的悉尼西部城铁</H3>
            <P>
            23分钟到达悉尼中央商务区。
            </P>
          </div>
          <div className="col col-05 padd">
            <Image
              src="/images/melrose-park-sydney-property-041-TRAIN.jpg"
              alt="Melrose Park Property, Sydney - Sydney Metro West"/>
          </div>
        </div>
        <ParaTitle title="每天的出行都很便利"/>

        <div className="row">
          <div className="col col-02"></div>
          <div className="col col-03">
            <H3 icon={true}>
              未来的区内街车将把居民连接到一个充满无限可能的新世界。
            </H3>
          </div>

          <div className="col col-06 padd">
            <Image
              src="/images/melrose-park-sydney-property-016-TRAM.jpg"
              alt="Melrose Park Property, Sydney - Future Light Rail System"/>
          </div>
        </div>

        <div className="row">
          <div className="col padd col-02"/>
          <div className="col col-10">
            <Transport lang="ch" />
          </div>
        </div>
      </section>
    );
  }
}

export default LocationPage;

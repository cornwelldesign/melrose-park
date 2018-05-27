import React from "react";
import Image from "../../components/Image.js";
import Transport from "../../components/Transport.js";
import ParaTitle from "../../components/ParaTitle.js";
import Team from "../../components/Team.js";
import {LargeP, P, H4, H3} from "../../components/Text.js";
class SmartCity extends React.Component {
  componentDidMount() {
    this
      .props
      .updateMeta("Smart City | Melrose Park ", "立足未来，Melrose Park采用智能城市技术对可持续城市设计进行了精辟的研究。");
  }

  render() {
    return (
      <section>
        <div className="row tab-hide">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-024-RESIDENCE.jpg"
              alt="Melrose Park Property, Sydney - Resident (Downsizer)"/>
            <H4 icon={true}>我的生活可以如此多彩</H4>
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
				<div className="row tab-show">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-024-RESIDENCE.jpg"
              alt="Melrose Park Property, Sydney - Resident (Downsizer)"/>
            <H4 icon={true}>我的生活可以如此多彩</H4>
          </div>
        </div>
        <ParaTitle title="更智慧的明天"/>

        <div className="row">
          <div className="col col-04"/>
          <div className="col col-05 padd">
            <LargeP type="green">
              立足未来，Melrose Park采用智能城市技术对可持续城市设计进行了精辟的研究。
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
            Melrose Park在建造一开始就采取了智慧城市的理念，它将成为悉尼领先的发展项目。这些理念包括采用先进技术监测周边环境条件，采用智能雨水收集系统维持园区绿地，新一代街道照明系统，智能路标和电动汽车充电站。

            </P>
            <P >
            在家里，您将受益于NBN的高速上网服务，整个社区提供WiFi，通过热点和设备充电站提供移动网络。这些技术大部分采用可再生能源为动力，丰富您的生活环境。随着技术的不断发展，Melrose Park将继续改进并实施最新理念。
            </P>
          </div>
        </div>
      </section>
    );
  }
}

export default SmartCity;

import React from "react";
import Hero from "../../components/Hero.js";
import Image from "../../components/Image.js";
import Transport from "../../components/Transport.js";
import ParaTitle from "../../components/ParaTitle.js";
import Team from "../../components/Team.js";
import {LargeP, P, H4, H3} from "../../components/Text.js";

class LifestylePage extends React.Component {
  componentDidMount() {
    this
      .props
      .updateMeta("绿色空间 | Melrose Park ", "13,000平米的中央公园将成为Melrose Park新社区的中心。");
  }

  render() {
    return (
      <section>
        <div className="row tab-hide">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-027-RESIDENTS.jpg"
              alt="Melrose Park Property, Sydney - Residents (Young Family)"/>
            <H4 icon={true}>我所珍爱的人，我们所珍爱的社区</H4>
          </div>
        </div>
        <div className="row">
          <div className="col padd col-02"/>
          <div className="col  col-10">
            <Image
              src="/images/melrose-park-sydney-property-028-PARK-v3.jpg"
              alt="Melrose Park Property, Sydney - Gardens (Artists Impression)"/>
          </div>
        </div>
				<div className="row tab-show">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-027-RESIDENTS.jpg"
              alt="Melrose Park Property, Sydney - Residents (Young Family)"/>
            <H4 icon={true}>我所珍爱的人，我们所珍爱的社区</H4>
          </div>
        </div>
        <div className="row">
          <div className="col padd col-02"/>
          <div className="col  col-03">
            <Image
              src="/images/melrose-park-sydney-property-029-DOG.jpg"
              alt="Melrose Park Property, Sydney - Dog Park"/>
          </div>
          <div className="col padd col-06">
            <LargeP type="green">
            13,000平米的中央公园将成为Melrose Park新社区的中心。
            </LargeP>
            <P>
            受到世界上最佳公园的启发，Melrose Park广大的公共空间融合了草坪，梯田花园和观景台。在广阔的中央公园的绿色海洋内散步，园内还有咖啡厅，户外用餐区，游乐场和临时摊档。{" "}
            </P>
            <P>
            沿着林荫大道欣赏郁郁葱葱的树林景观，或者在Melrose Park内探索花卉和小花园。
            </P>
          </div>
        </div>

        <div className="row">
          <div className="col col-02"></div>

          <div className="col col-03 padd">
            <H3 icon={true}>尽情欢笑和玩耍的乐园</H3>
          </div>
          <div className="col col-06 padd">
            <img
              src="/images/melrose-park-sydney-property-032-KIDS-v2.jpg"
              alt="Melrose Park Property, Sydney - Play Park "/>
          </div>
        </div>
        <div className="row">
          <div className="col col-02"></div>
          <div className="col col-03 padd">
            <Image
              src="/images/melrose-park-sydney-property-048-LAKE.jpg"
              alt="Melrose Park Property, Sydney - Lake"/>
          </div>
          <div className="col col-02"></div>

          <div className="col col-04 padd">
            <Image
              src="/images/melrose-park-sydney-property-047-GOLF.jpg"
              alt="Melrose Park Property, Sydney - Golf Course"/>
          </div>
        </div>
        <ParaTitle title="充足的成长空间"/>

        <div className="row">
          <div className="col col-02"/>
          <div className="col col-10 ">
            <Image
              src="/images/melrose-park-sydney-property-033-RIVER.jpg"
              alt="Melrose Park Property, Sydney - River and Play Park(Artists Impression)"/>
          </div>
        </div>
        <div className="row">
          <div className="col col-04"></div>

          <div className="col col-04">
            <LargeP type="green">
              The Common是一个多功能社区公园，占地超过5000平米。
            </LargeP>

            <P>
              沿着林荫大道公园欣赏郁郁葱葱的景观，在著名的Ryde-Parramatta高尔夫俱乐部打高尔夫球，或在Melrose Park探索花卉和小花园。
            </P>
          </div>
        </div>
        <div className="row">
          <div className="col col-02"/>
          <div className="col col-02 padd">
            <Image
              src="/images/melrose-park-sydney-property-034-RUNNING.jpg"
              alt="Melrose Park Property, Sydney - Running"/>
            <H4 icon={true}>
              为积极生活方式而设的自行车道和步行径。
            </H4>
          </div>
          <div className="col col-08">
            <Image
              src="/images/melrose-park-sydney-property-035-BIKE.jpg"
              alt="Melrose Park Property, Sydney - Cycling Track"/>
          </div>
        </div>
      </section>
    );
  }
}

export default LifestylePage;

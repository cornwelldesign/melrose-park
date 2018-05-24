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
            <H4 icon={true}>一个可以称为家的地方</H4>
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
            <H4 icon={true}>一个可以称为家的地方</H4>
          </div>
        </div>
        <div className="row">
          <div className="col col-02"></div>
          <div className="col col-05 ">
            <LargeP type="green">
            一个破茧而出的新邻里社区，Melrose Park 将满足您所有的日常生活所需。
            </LargeP>
          </div>
        </div>

        <div className="row">
          <div className="col col-03"></div>
          <div className="col col-03 padd">
            <H3 icon={true}>和朋友一起聚会的咖啡馆</H3>
          </div>
          <div className="col col-06">
            <Image
              src="/images/melrose-park-sydney-property-020-CAFE.jpg"
              alt="Melrose Park Property, Sydney - Local Cafe"/>
            <P>
              这是一个充满活力的社区，它将包括一个全品类超市，各种杂货店，咖啡馆，餐厅，熟食店，面包店，健身房，干洗店，报摊，药房，各种娱乐和个人服务。
            </P>
          </div>
        </div>
        <ParaTitle title="美食中心"/>

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
              每一天都能品尝新美味。
            </H4>
          </div>
        </div>

        <div className="row">
          <div className="col col-02"/>
          <div className="col col-04">
            <P>住在Melrose Park，就业就在家边。15,000平方米的新商业空间将给社区带来1500多个全职工作机会。有孩子的年轻家庭也可以使用设在Melrose Park内的多个托儿中心。</P>

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

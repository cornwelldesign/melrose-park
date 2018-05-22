import React from "react";
import Image from "../../components/Image.js";
import Transport from "../../components/Transport.js";
import ParaTitle from "../../components/ParaTitle.js";
import Team from "../../components/Team.js";
import { LargeP, P, H4, H3 } from "../../components/Text.js";
import Hero from "../../components/Hero.js";
import Carousel from "../../components/Carousel.js";

class ResidencesPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Residences | Melrose Park ",
      "Melrose Park的确是在定义一种不同的生活方式。在充满活力的Melrose Park中，您可以逃离城市的喧嚣，进入宁静港湾，在这里，每个细节都被考虑到了。"
    );
  }

  render() {
    return (
      <div>
        <Hero
          image="/images/melrose-park-sydney-property-036-BUILDING.jpg"
          alt="Melrose Park Property, Sydney - Residences Building (Artists Impression)"
          title="MELROSE PARK精品住宅"
        />
				<section>
        <div className="row">
          <div className="col padd col-02" ></div>
          <div className="col padd col-04">
            <LargeP type="green">
            Melrose Park的确是在定义一种不同的生活方式。在充满活力的Melrose Park中，您可以逃离城市的喧嚣，进入宁静港湾，在这里，每个细节都被考虑到了。
            </LargeP>
          </div>
          <div className="col  col-06">
					<H3 icon={true}>更多空间去生活、<br/>去爱、去成长。</H3>

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
				<div className="col padd col-06"></div>
				<div className="col padd col-05">
        <P>
        一个家的核心部位。宽敞而明亮的厨房和起居室为您提供充足的空间享受美好时光，适合家庭成员不断增加的家庭，或轻松宴客娱乐。适合现代生活的精美室内设计，以中性色调，辅以优质材料，饰面和配饰。
        </P></div>
				<div className="col col-02" >
</div>
				</div>
				<div className="row">
				<div className="col padd col-02" ></div>
          <div className="col col-10">
				<Carousel
          slides={[
          {
            img: "/images/melrose-park-sydney-property-042-SOFA.jpg",
            alt: "Melrose Park Property, Sydney - Sofa (Artists Impression)"
          },
					{
            img: "/images/melrose-park-sydney-property-044-LOOKINGIN.jpg",
            alt: "Melrose Park Property, Sydney - Sofa (Artists Impression)"
          },
					{
            img: "/images/melrose-park-sydney-property-046-LOOKINGIN.jpg",
            alt: "Melrose Park Property, Sydney - kitchen Area (Artists Impression)"
          },
					{
            img: "/images/melrose-park-sydney-property-045-Kitchen.jpg",
            alt: "Melrose Park Property, Sydney - kitchen Area (Artists Impression)"
          },
					{
            img: "/images/melrose-park-sydney-property-045-BATH.jpg",
            alt: "Melrose Park Property, Sydney - Bath (Artists Impression)"
          }
        ]}/>
				      </div>
							</div>

				</section>
				</div>
    );
  }
}

export default ResidencesPage;

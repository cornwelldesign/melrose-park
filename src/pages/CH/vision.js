import React from "react";
import Image from "../../components/Image.js";
import ParaTitle from "../../components/ParaTitle.js";
import Team from "../../components/Team.js";
import Hero from "../../components/Hero.js";
import { LargeP, P } from "../../components/Text.js";

class VisionPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Vision | Melrose Park ",
      "Melrose Park is the new Australian dream, a welcoming neighbourhood with a sense of place. Beautiful residences, public spaces, vibrant shopping and dining"
    );
  }

  render() {
    return (
      <div>

			

        <Hero
          image="/images/melrose-park-sydney-property-007-PARK.jpg"
          alt="Melrose Park Property, Sydney - Play Park (Artists Impression)"
          vidButton=" "
          video="https://s3-ap-southeast-2.amazonaws.com/cornwell-misc/melrose-park/melrose-park-sydney-property-teaser.mp4"
        />
								<section>

        <ParaTitle title="一次伟大的转型" />

        <div className="row">
          <div className="col padd col-03">
            <LargeP type="green" icon={true}>
            拥抱多方位，多元化的生活方式，Melrose Park Residences让您尽情享受，尽情欢舞，尽情连接。
            </LargeP>
          </div>
          <div className="col padd col-09">
            <Image
              src="/images/melrose-park-sydney-property-008-SUBURB.jpg"
              alt="Melrose Park Property, Sydney - View of Suburb (Artists Impression)"
            />
          </div>
        </div>
        <div className="row padd">
          <div className="col padd col-03" />
          <div className="col padd col-05">
            <P>
            Melrose Park，一个新澳洲梦开启的地方，一个遍布美丽住宅，宽广绿地，商场美食的大型社区，这里充满了友好的氛围和无数的可能性，充分诠释了新悉尼大都会的城市精神。
            </P>
          </div>
        </div>

        <div className="row ">
          <div className="col padd col-09">
            <Image
              src="/images/melrose-park-sydney-property-009-RETAIL.jpg"
              alt="Melrose Park Property, Sydney - Retail Section (Artists Impression)"
            />
          </div>
        </div>
        <div className="row padd">
          <div className="col col-06 " ></div>
          <div className="col padd col-05">
            <P>
            无论您来自于世界上哪一个角落，来到澳洲，您就是新澳洲人。Melrose Park就是为这些新澳洲人所建，它很好的诠释了新澳洲人的那种不畏改变，热衷探险，每天追求新体验的精神。Melrose Park的精心整体规划和开发将为您建造一个充满活力和多元化的永久和谐温馨家园。
            </P>
          </div>
        </div>
				</section>

        <Team />
      </div>
    );
  }
}

export default VisionPage;

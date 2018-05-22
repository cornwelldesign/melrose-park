import React from "react";
import Hero from "../../components/Hero.js";
import FocusImg from "../../components/FocusImg.js";
import FocusTxt from "../../components/FocusTxt.js";
import MultiGroup from "../../components/MultiGroup.js";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Melrose Park | 悉尼未来的城市中心 ",
      "一个破茧而出的新邻里社区，Melrose Park 将满足您所有的日常生活所需。距离Parramatta中央商务区仅7公里，悉尼中央商务区仅17公里，Melrose Park是大悉尼地区最四通八达的社区之一。"
    );
  }

  render() {
		if (typeof window !== `undefined`) {

		if(window.innerWidth < 640) {
			return (
				<div><Hero image="/images/melrose-park-sydney-property-001-GARDENS.jpg" alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)"  title={`悉尼未来的城市中心`}  half="left"/><FocusImg
								link="/lifestyle/"
								image="/images/melrose-park-sydney-property-002-RESIDENT.jpg"
								title={`一个可以称为家的地方`}
								alt="Melrose Park Property, Sydney - First Time Buyer Resident"
								button="点击浏览生活方式"
							/><FocusTxt
								link="/lifestyle/"
								text={`一个破茧而出的新邻里社区，Melrose Park 将满足您所有的日常生活所需。`}
								button="点击浏览生活方式"
							/><FocusImg
								link="/location/"
								title={`我的世界从未如此的四通八达`}
								image="/images/melrose-park-sydney-property-003-RESIDENTS.jpg"
								alt="Melrose Park Property, Sydney - Young Couple Residents"
							/><FocusTxt
								link="/location/"
								text={`距离Parramatta中央商务区仅7公里，悉尼中央商务区仅17公里，Melrose Park是大悉尼地区最四通八达的社区之一。`}
								button="点击查看地点"
							/><FocusImg
								link="/green-space/"
								image="/images/melrose-park-sydney-property-004-RESIDENTS.jpg"
								alt="Melrose Park Property, Sydney - Young Family Residents"
								title={`我所珍爱的人，我们所珍爱的社区 `}
							/><FocusTxt
								link="/green-space/"
								text={`绿地宽广，任孩子尽情玩耍，公园密布，休闲漫步好去处，胜似自家后院。`}
								button="点击浏览绿色空间"
							/><FocusImg
								link="/smart-city/"
								title={`我的生活可以如此多彩`}
								image="/images/melrose-park-sydney-property-005-RESIDENT.jpg"
								alt="Melrose Park Property, Sydney - Downsizer Residents"
								button="点击查看智慧城市"
							/><FocusTxt
								link="/smart-city/"
								text={`超前思维，智慧城市设计精巧，丰富您的生活方式。`}
								button="点击查看智慧城市"
							/><FocusImg
								link="/residences/"
								image="/images/melrose-park-sydney-property-006-BUILDING.jpg"
								title={`Melrose 精品住宅`}
								alt="Melrose Park Property, Sydney - Outside View of Building (Artists Impression)"
								button="点击浏览生活方式"
							/><FocusTxt
								link="/residences/"
								text={`更多空间去生活、去爱、去成长。单间、一居室、二居室及三居室精品住宅热销中。`}
								button="点击浏览生活方式"
							/>

				</div>
			);		} else {
			return (
				<MultiGroup animTime={1.5} paddingTop="4rem">
								<multiScroll>
								<leftSide>
								        <Hero image="/images/melrose-park-sydney-property-001-GARDENS.jpg" alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)"  title={`悉尼未来的城市中心`}  half="left"/>
								</leftSide>
						<rightSide>
						        <Hero image="/images/melrose-park-sydney-property-001-GARDENS.jpg" alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)" title={`悉尼未来的城市中心`} half="right"/>
						</rightSide>

	</multiScroll>
					<multiScroll><leftSide><FocusImg
								link="/lifestyle/"
								image="/images/melrose-park-sydney-property-002-RESIDENT.jpg"
								title={`一个可以称为家的地方`}
								alt="Melrose Park Property, Sydney - First Time Buyer Resident"
								button="点击浏览生活方式"
							/>
						</leftSide>
						<rightSide>
							 <FocusTxt
								link="/lifestyle/"
								text={`一个破茧而出的新邻里社区，Melrose Park 将满足您所有的日常生活所需。`}
								button="点击浏览生活方式"
							/>
						</rightSide>
					</multiScroll>
					<multiScroll>
						<leftSide>
							<FocusTxt
								link="/location/"
								text={`距离Parramatta中央商务区仅7公里，悉尼中央商务区仅17公里，Melrose Park是大悉尼地区最四通八达的社区之一。`}
								button="点击查看地点"
							/>
						</leftSide>
						<rightSide>
							<FocusImg
								link="/location/"
								title={`我的世界从未如此的四通八达`}
								image="/images/melrose-park-sydney-property-003-RESIDENTS.jpg"
								alt="Melrose Park Property, Sydney - Young Couple Residents"
							/>
						</rightSide>
					</multiScroll>

					<multiScroll>
						<leftSide>
							 <FocusImg
								link="/green-space/"
								image="/images/melrose-park-sydney-property-004-RESIDENTS.jpg"
								alt="Melrose Park Property, Sydney - Young Family Residents"
								title={`我所珍爱的人，我们所珍爱的社区 `}
							/>
						</leftSide>
						<rightSide>
							          <FocusTxt
								link="/green-space/"
								text={`绿地宽广，任孩子尽情玩耍，公园密布，休闲漫步好去处，胜似自家后院。`}
								button="点击浏览绿色空间"
							/>
						</rightSide>
					</multiScroll>
					<multiScroll>
						<leftSide>
							 <FocusTxt
								link="/smart-city/"
								text={`超前思维，智慧城市设计精巧，丰富您的生活方式。`}
								button="点击查看智慧城市"
							/>
						</leftSide>
						<rightSide>
							          <FocusImg
								link="/smart-city/"
								title={`我的生活可以如此多彩`}
								image="/images/melrose-park-sydney-property-005-RESIDENT.jpg"
								alt="Melrose Park Property, Sydney - Downsizer Residents"
								button="点击查看智慧城市"
							/>
						</rightSide>
					</multiScroll>
					<multiScroll>
						<leftSide>
							          <FocusImg
								link="/residences/"
								image="/images/melrose-park-sydney-property-006-BUILDING.jpg"
								title={`Melrose 精品住宅`}
								alt="Melrose Park Property, Sydney - Outside View of Building (Artists Impression)"
								button="点击浏览生活方式"
							/>
						</leftSide>
						<rightSide>
							          <FocusTxt
								link="/residences/"
								text={`更多空间去生活、去爱、去成长。单间、一居室、二居室及三居室精品住宅热销中。`}
								button="点击浏览生活方式"
							/>
						</rightSide>
					</multiScroll>
				</MultiGroup>
			);
		}
} else {
	return(
		<div>build</div>
	)
}
	}
}

export default HomePage;

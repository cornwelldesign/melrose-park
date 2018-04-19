import React from "react";
import Hero from "../components/Hero.js";
import FocusImg from "../components/FocusImg.js";
import FocusTxt from "../components/FocusTxt.js";
import MultiGroup from "../components/MultiGroup.js";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Melrose Park | The New Heart of Sydney ",
      "The pulse of your new neighbourhood, Melrose Park Residences will have everything you could need for the life you want to live. Located only 8km from Parramatta and 17km from Sydney CBD, Melrose Park one of Sydney’s most connected places."
    );
  }

  render() {
    return (
      <MultiGroup animTime={1.5} paddingTop="4rem">
			        <multiScroll>
							<leftSide>
							        <Hero image="/images/melrose-park-sydney-property-001-GARDENS.jpg" alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)"  title={`The New Heart
					of Sydney`}  half="left"/>
							</leftSide>
          <rightSide>
					        <Hero image="/images/melrose-park-sydney-property-001-GARDENS.jpg" alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)" title={`The New Heart
					of Sydney`} half="right"/>
					</rightSide>

</multiScroll>
        <multiScroll><leftSide><FocusImg
              link="/lifestyle/"
              image="/images/melrose-park-sydney-property-002-RESIDENT.jpg"
              title={`Somewhere 
	to Call 
	My Own`}
              alt="Melrose Park Property, Sydney - First Time Buyer Resident"
              button="Explore the Lifestyle"
            />
          </leftSide>
          <rightSide>
             <FocusTxt
              link="/lifestyle/"
              text={`The pulse of your new 
							neighbourhood, Melrose Park 
							Residences will have everything 
							you could need for the life you 
							want to live.`}
              button="Explore the Lifestyle"
            />
          </rightSide>
        </multiScroll>
        <multiScroll>
          <leftSide>
            <FocusTxt
              link="/location/"
              text={`Located only 8km from 
							Parramatta and 17km from 
							Sydney CBD, Melrose Park 
							one of Sydney’s most 
							connected places. `}
              button="Explore the Location"
            />
          </leftSide>
          <rightSide>
            <FocusImg
              link="/location/"
              title={`My World 
							Connected Like 
							Never Before`}
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
              title={`People I Love, 
							In a Place 
							We Love.`}
            />
          </leftSide>
          <rightSide>
                      <FocusTxt
              link="/green-space/"
              text={`There are vast open 
							spaces for kids to be kids, 
							and parks to explore or 
							relax in. It is like having your 
							own backyard. `}
              button="Explore the Green Space"
            />
          </rightSide>
        </multiScroll>
        <multiScroll>
          <leftSide>
             <FocusTxt
              link="/lifestyle/"
              text={`With the future in mind, Smart 
							City technology is designed to 
							enrich your lifestyle.`}
              button="Explore the Lifestyle"
            />
          </leftSide>
          <rightSide>
                      <FocusImg
              link="/lifestyle/"
              title={`My Life
							Made Simply
							Wonderful`}
              image="/images/melrose-park-sydney-property-005-RESIDENT.jpg"
              alt="Melrose Park Property, Sydney - Downsizer Residents"
              button="Explore the Lifestyle"
            />
          </rightSide>
        </multiScroll>
        <multiScroll>
          <leftSide>
                      <FocusImg
              link="/residences/"
              image="/images/melrose-park-sydney-property-006-BUILDING.jpg"
              title={`Melrose 
							Residences`}
              alt="Melrose Park Property, Sydney - Outside View of Building (Artists Impression)"
              button="Explore the Lifestyle"
            />
          </leftSide>
          <rightSide>
                      <FocusTxt
              link="/residences/"
              text={`More space to live, love and grow. 
							Studio, 1, 2 and 3-bedroom residences 
							launching soon.`}
              button="Explore the Lifestyle"
            />
          </rightSide>
        </multiScroll>
      </MultiGroup>
    );
  }
}

export default HomePage;

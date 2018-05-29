import React from "react";
import Image from "../components/Image.js";
import Transport from "../components/Transport.js";
import ParaTitle from "../components/ParaTitle.js";
import Team from "../components/Team.js";
import {LargeP, P, H4, H3} from "../components/Text.js";
class SmartCity extends React.Component {
  componentDidMount() {
    this
      .props
      .updateMeta("Smart City | Melrose Park ", "With the future in mind, Melrose Park takes an astute approach to sustainable ur" +
          "ban design with Smart City technology.");
  }

  render() {
    console.log(this.props.data.wordpressPage);
    return (
      <section>
        <div className="row tab-hide">
          <div className="col padd col-02 static">
            <Image
              src="/images/melrose-park-sydney-property-024-RESIDENCE.jpg"
              alt="Melrose Park Property, Sydney - Resident (Downsizer)"/>
            <H4 icon={true}>My Life Made Simply Wonderful.</H4>
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
            <H4 icon={true}>My Life Made Simply Wonderful.</H4>
          </div>
        </div>
        <ParaTitle title="A Smarter Tomorrow."/>

        <div className="row">
          <div className="col col-04"/>
          <div className="col col-05 padd">
            <LargeP type="green">
              With the future in mind, Melrose Park takes an astute approach to sustainable
              urban design with Smart City technology.
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
              Melrose Park will be Sydney’s leading development that incorporates Smart City
              initiatives from day one. They include advanced technologies to monitor
              environmental conditions, clever rainwater collection to sustain the precinct’s
              parklands, new generation street lighting, smart wayﬁnding poles and electric
              car charging stations.

            </P>
            <P >
              At home, you will benefit from NBN node-to-home rapid connectivity, while
              proposed WiFi throughout the neighbourhood offers connectivity on the move via
              hotspots and device charging stations. Many of these technologies will be
              powered by renewable energy sources, enriching the environment you live in. As
              technologies continue to evolve, Melrose Park will continue to improve and
              implement the latest initiatives as they become available.

            </P>
          </div>
        </div>
      </section>
    );
  }
}

export default SmartCity;


export const pageQuery = graphql`
  query Contact($slug: String) {
		wordpressPage(slug: { eq: $slug }) {
      id
                  slug
                  template
                  parent_element {
                    id
                    slug
                  }
                      acf {
                        meta_title
                        meta_description
                        headline_1
                        paragraph_1
                        sub_title_1
                        moving_text
                        headline_2
                        paragraph_2
                        sub_title_2
                        side_text
                        header_1
                        sub_header_1
                        text_1
                        sub_header_2
                        text_2
                        sub_header_3
                        text_3
                        header_2
                        header_2_sub_text
                        hero_text
                        header
                        main_paragraph
                        sub_paragraph
                        header_3
                        paragraph_3
                        header_4
                        paragraph_4
                        header_5
                        paragraph_5
                        header_6
                        sub_title
                        paragraph
                        team_header
                        team_1_name
                        team_1_description
                        team_2_name
                        team_2_description
                        team_3_name
                        team_3_description
                        slide_2_main_text
                        slide_2_paragraph
                        slide_2_link_text
                        slide_3_main_text
                        slide_3_paragraph
                        slide_3_link_text
                        slide_4_main_text
                        slide_4_paragraph
                        slide_4_link_text
                        slide_5_main_text
                        slide_5_paragraph
                        slide_5_link_text
                        slide_6_main_text
                        slide_6_paragraph
                        slide_6_link_text
                        wordpress_
                      }
                  
                }
 		
    allWordpressPage {
      edges {
        node {
          slug
          title
          id
        }
      }
    }
  }
`
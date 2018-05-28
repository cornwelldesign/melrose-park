import React from "react"
import styled, { keyframes } from "styled-components"
import * as vars from "../../style/vars"
import { above, below } from "../../style/functions"

import Image from "../../components/Image.js"
import ParaTitle from "../../components/ParaTitle.js"
import Team from "../../components/Team.js"
import Hero from "../../components/Hero.js"
import { LargeP, P, H1, H4 } from "../../components/Text.js"

class VisionPage extends React.Component {
   componentDidMount() {
      this.props.updateMeta(
         "理念 | Melrose Park ",
         "Melrose Park，一个新澳洲梦开启的地方，一个遍布美丽住宅，宽广绿地，商场美食的大型社区，这里充满了友好的氛围和无数的可能性，充分诠释了新悉尼大都会的城市精神。"
      )
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
                        拥抱多方位，多元化的生活方式，Melrose Park
                        Residences让您尽情享受，尽情欢舞，尽情连接。
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
                  <div className="col col-06 " />
                  <div className="col padd col-05">
                     <P>
                        无论您来自于世界上哪一个角落，来到澳洲，您就是新澳洲人。Melrose
                        Park就是为这些新澳洲人所建，它很好的诠释了新澳洲人的那种不畏改变，热衷探险，每天追求新体验的精神。Melrose Park的精心整体规划和开发将为您建造一个充满活力和多元化的永久和谐温馨家园。
                     </P>
                  </div>
               </div>
            </section>

            <Container>
               <div className="row ">
                  <div className="padd col">
                     <H1 type="green">项目团队</H1>
                  </div>
               </div>
               <div className="row">
                  <div className="col padd col-04">
                     <a href="http://payce.com.au/" target="_blank" title="Payce Website">
                        <H4>PAYCE</H4>
                     </a>
                     <P>
                      PAYCE成立于1978年，是一家领先的房地产开发和投资公司。其地标式的综合性开发项目在刷新国际标准方面成绩卓著。
                     </P>
                     <P>
                     PAYCE不仅能够建造出卓越和智能化设计的现代住宅，而且还能同时创造出具有活力和凝聚力的社区环境。 PAYCE总体规划设计的核心是社区环境，以反映当地社区的最佳生活状态。 PAYCE因为意识到每个人都需要连接和融入，所以特别擅长创建充满活力和凝聚力的社区环境。
                     </P>
                     <P>
                      PAYCE的成功建立于一个庄严承诺：致力引导社区实现其自身潜力，这就是为什么创新型城市设计是其每个项目的核心特征。作为城市改造专家，PAYCE团队利用最佳实践设计原则，批判性思维和实质创新，打造出一批优质，富有灵感的住宅、商业和零售综合社区。
                     </P>
                  </div>
                  <div className="col padd col-04">
                     <a href="http://architectsajc.com/" target="_blank" title="AJC Website">
                        <H4>AJ+C</H4>
                     </a>

                     <P>
                     Allen Jack+Cottier (AJ+C)认为成功的住宅开发项目应该能够做到丰富居民生活，增加社区基础设施，并且为新社区的发展提供整体框架。
                     </P>
                     <P>
                     AJ + C是国际知名的建筑事务所，悉尼和澳大利亚住宅市场的领军人物，他们承诺高标准服务，卓越设计和环境的可持续性。
                     </P>
                     <P>
                     我们的设计师不会拘泥于教科书上“家居风格”的条条框框，他们总是在不断寻求完美解决方案，以解决在实际情况中因出现特殊需求和特定位置而产生的复杂问题。尽管如此，我们建造的建筑物依然质量上乘并且为普通大众所接受。
                     </P>
                     <P>
                     我们建造的地标项目已经改变了人们日常生活和工作方式，并且已经影响到人们，包括业界对建筑设计的看法。
                     </P>
                  </div>
                  <div className="col padd col-04">
                     <a href="http://turfdesign.com/" target="_blank" title="TURF Website">
                        <H4>TURF</H4>
                     </a>
                     <P>
                     Turf了解主要城市项目的本质并且知道如何来付诸实践。他们在城市设计，景观建筑，环境，社区和基础设施方面的综合知识使得他们在融合人类与周边环境方面上做到独树一帜。
                     </P>
                     <P>
                     他们建造出既美观又富内涵的社区，这既是一项具有创造性的挑战，也是他们做项目的责任。是什么让一个社区感觉正确？它是如何制造惊喜，激发和舒缓感官的？它要达到什么目的？它告诉我们背后有什么故事？
                     </P>
                     <P>
                     Turf鼓励批判性思维，从而产生完整的理念和令人兴奋的创意。他们的合作遍及全球，他们从专业人士，社区和利益相关者那里汲取灵感和想法，进而形成最佳设计解决方案。 
                     </P>
                  </div>
               </div>
            </Container>
         </div>
      )
   }
}

export default VisionPage

const Container = styled.div`
   background: ${vars.colors.offBlank};
   padding: ${vars.genPadd * 2}rem 0;
   .col {
      vertical-align: top;
   }
   h1 {
      font-size: 9rem;
      padding: 2rem 0;
      ${below.mid`
        font-size: 8rem;
      `};
   }
   p {
      font-size: 1.4rem;
   }
   a {
      color: ${vars.colors.body};
      text-decoration: none;
   }
`

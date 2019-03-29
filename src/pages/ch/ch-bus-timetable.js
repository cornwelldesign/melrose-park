import React from 'react'
import styled, { keyframes } from "styled-components"
import { LargeP, P, H4, H3 } from '../../components/Text.js'
import { below } from '../../style/functions'
import bus from '../../../static/images/MP-BUS-TIMETABLE-v5-Chinese.png'

class BusTimetable extends React.Component {
   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <BusWrapper>
            <Blurb>
               <H3>Melrose Park Community Shuttle Timetable</H3>
               <p>
                  <em>
                  PAYCE很高兴宣布推出新的免费Melrose Park社区穿梭巴士服务。

                  </em>
               </p>
               <p>
               虽然Melrose Park开发项目的首批公寓要到明年才能完工，但PAYCE将提前推出这项服务，为社区提供新的交通设施。
               往返Wharf Road 至 Meadowbank 火车站的<em>免费</em>穿梭巴士，将在沿途七个主要地点停靠，为Melrose Park的居民提供一个完整的交通网络。穿梭巴士现已全面投入服务，欢迎所有公众人士使用。
               </p>
            </Blurb>
         <a href={bus} target="_blank">
            <img src={bus} alt="Bus timetable" />
         </a>
      </BusWrapper>)
   }
}

const BusWrapper = styled.div`
   margin-top: 5rem;
   font-family: "Plantin",serif;

   h3 {
      color: #9B9B9B;
      text-align: center;
   }
`


const Blurb = styled.div`
   width: 65%;
   margin: 6rem auto 3rem;
   text-align: center;

   h3 {
      color: #00b398;
      margin-bottom: 2rem;
   }

   p {
      font-family: 'Founders Grotesk', sans-serif;
      font-size: 1.8rem;
      padding-bottom: 1rem;
   }

   em {
      font-weight: bold;
   }

   ${below.mobile`
      width: 92%;
   `}
`

export default BusTimetable


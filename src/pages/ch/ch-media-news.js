import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H4, H3 } from '../../components/Text.js'
import { below } from "../../style/functions"

class BusTimetable extends React.Component {
   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <NewsWrapper>
            <H3>媒体及新闻</H3>
            <CardsWrapper>
               <Card>
                  <a href="/">
                     <H4>Library and community hub opens at Washington Park</H4>
                     <summary>
                        12 December 2018 – Local residents joined special guests to
                        celebrate the official opening of the new Riverwood Library and
                        Community Hub at Washington Park. The new library and community
                        hub are located in one of [...]
                     </summary>
                     <p className="read-more">Read more</p>
                     <img
                        src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                        alt="Library and community hub opens at Washington Park"
                     />
                  </a>
               </Card>
               <Card>
                  <a href="/">
                     <H4>Library and community hub opens at Washington Park</H4>
                     <summary>
                        12 December 2018 – Local residents joined special guests to
                        celebrate the official opening of the new Riverwood Library and
                        Community Hub at Washington Park. The new library and community
                        hub are located in one of [...]
                     </summary>
                     <p className="read-more">Read more</p>
                     <img
                        src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                        alt="Library and community hub opens at Washington Park"
                     />
                  </a>
               </Card>
               <Card>
                  <a href="/">
                     <H4>Library and community hub opens at Washington Park</H4>
                     <summary>
                        12 December 2018 – Local residents joined special guests to
                        celebrate the official opening of the new Riverwood Library and
                        Community Hub at Washington Park. The new library and community
                        hub are located in one of [...]
                     </summary>
                     <p className="read-more">Read more</p>
                     <img
                        src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                        alt="Library and community hub opens at Washington Park"
                     />
                  </a>
               </Card>
               <Card>
                  <a href="/">
                     <H4>Library and community hub opens at Washington Park</H4>
                     <summary>
                        12 December 2018 – Local residents joined special guests to
                        celebrate the official opening of the new Riverwood Library and
                        Community Hub at Washington Park. The new library and community
                        hub are located in one of [...]
                     </summary>
                     <p className="read-more">Read more</p>
                     <img
                        src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                        alt="Library and community hub opens at Washington Park"
                     />
                  </a>
               </Card>
               <Card>
                  <a href="/">
                     <H4>Library and community hub opens at Washington Park</H4>
                     <summary>
                        12 December 2018 – Local residents joined special guests to
                        celebrate the official opening of the new Riverwood Library and
                        Community Hub at Washington Park. The new library and community
                        hub are located in one of [...]
                     </summary>
                     <p className="read-more">Read more</p>
                     <img
                        src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                        alt="Library and community hub opens at Washington Park"
                     />
                  </a>
               </Card>
               <Card>
                  <a href="/">
                     <H4>Library and community hub opens at Washington Park</H4>
                     <summary>
                        12 December 2018 – Local residents joined special guests to
                        celebrate the official opening of the new Riverwood Library and
                        Community Hub at Washington Park. The new library and community
                        hub are located in one of [...]
                     </summary>
                     <p className="read-more">Read more</p>
                     <img
                        src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                        alt="Library and community hub opens at Washington Park"
                     />
                  </a>
               </Card>
               <Card>
                  <a href="/">
                     <H4>Library and community hub opens at Washington Park</H4>
                     <summary>
                        12 December 2018 – Local residents joined special guests to
                        celebrate the official opening of the new Riverwood Library and
                        Community Hub at Washington Park. The new library and community
                        hub are located in one of [...]
                     </summary>
                     <p className="read-more">Read more</p>
                     <img
                        src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                        alt="Library and community hub opens at Washington Park"
                     />
                  </a>
               </Card>
               <Card>
                  <a href="/">
                     <H4>Library and community hub opens at Washington Park</H4>
                     <summary>
                        12 December 2018 – Local residents joined special guests to
                        celebrate the official opening of the new Riverwood Library and
                        Community Hub at Washington Park. The new library and community
                        hub are located in one of [...]
                     </summary>
                     <p className="read-more">Read more</p>
                     <img
                        src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                        alt="Library and community hub opens at Washington Park"
                     />
                  </a>
               </Card>
            </CardsWrapper>
         </NewsWrapper>
      )
   }
}

const NewsWrapper = styled.div`
   width: 68%;
   margin: 7rem auto 0rem;
   font-family: 'Plantin', serif;

   h3 {
      color: #9b9b9b;
   }

   ${below.mid`
      width: 94%;
   `}
`

const CardsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-top: 4rem;
`

const Card = styled.div`
   flex: 0 0 22%;
   border: 1px solid #d4d4d4;
   margin-bottom: 5rem;
   font-family: 'Founders Grotesk', sans-serif;
   font-size: 1.5rem;
   padding: 1rem;

   a {
      display: block;
      text-decoration: none;
      color: inherit;
   }

   p.read-more {
      line-height: 3;

      :after {
         transition: all .5s ease;
         content: " →";
      }

      :hover:after {
         padding-left: 1rem;
      }
   }

   ${below.tablet`
      width: 100%;
      flex: 0 0 auto;
   `}
`
export default BusTimetable

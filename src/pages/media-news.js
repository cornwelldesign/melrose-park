import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H4, H3 } from '../components/Text.js'
import { below } from '../style/functions'
import sampleImage from '../../static/images/melrose-park-sydney-property-008-SUBURB.jpg'

class BusTimetable extends React.Component {
   componentDidMount() {
      this.props.updateMeta()
   }

   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <NewsWrapper>
            <H4>Media & News</H4>
            <CardsWrapper>
               <Card>
                  <H4>
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Library and community hub opens at Washington Park
                     </a>
                  </H4>
                  <p className="date">12 December 2018</p>
                  <summary>
                     Local residents joined special guests to celebrate the official
                     opening of the new Riverwood Library and Community Hub at Washington
                     Park. The new library and community hub are located in one of{' '}
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Read more
                     </a>
                  </p>
                  <img
                     src={sampleImage}
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  <H4>
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Library and community hub opens at Washington Park
                     </a>
                  </H4>
                  <p className="date">12 December 2018</p>
                  <summary>
                     Local residents joined special guests to celebrate the official
                     opening of the new Riverwood Library and Community Hub at Washington
                     Park. The new library and community hub are located in one of{' '}
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Read more
                     </a>
                  </p>
                  <img
                     src={sampleImage}
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  <H4>
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Library and community hub opens at Washington Park
                     </a>
                  </H4>
                  <p className="date">12 December 2018</p>
                  <summary>
                     Local residents joined special guests to celebrate the official
                     opening of the new Riverwood Library and Community Hub at Washington
                     Park. The new library and community hub are located in one of{' '}
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Read more
                     </a>
                  </p>
                  <img
                     src={sampleImage}
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  <H4>
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Library and community hub opens at Washington Park
                     </a>
                  </H4>
                  <p className="date">12 December 2018</p>
                  <summary>
                     Local residents joined special guests to celebrate the official
                     opening of the new Riverwood Library and Community Hub at Washington
                     Park. The new library and community hub are located in one of{' '}
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Read more
                     </a>
                  </p>
                  <img
                     src={sampleImage}
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  <H4>
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Library and community hub opens at Washington Park
                     </a>
                  </H4>
                  <p className="date">12 December 2018</p>
                  <summary>
                     Local residents joined special guests to celebrate the official
                     opening of the new Riverwood Library and Community Hub at Washington
                     Park. The new library and community hub are located in one of{' '}
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Read more
                     </a>
                  </p>
                  <img
                     src={sampleImage}
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  <H4>
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Library and community hub opens at Washington Park
                     </a>
                  </H4>
                  <p className="date">12 December 2018</p>
                  <summary>
                     Local residents joined special guests to celebrate the official
                     opening of the new Riverwood Library and Community Hub at Washington
                     Park. The new library and community hub are located in one of{' '}
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Read more
                     </a>
                  </p>
                  <img
                     src={sampleImage}
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  <H4>
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Library and community hub opens at Washington Park
                     </a>
                  </H4>
                  <p className="date">12 December 2018</p>
                  <summary>
                     Local residents joined special guests to celebrate the official
                     opening of the new Riverwood Library and Community Hub at Washington
                     Park. The new library and community hub are located in one of{' '}
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Read more
                     </a>
                  </p>
                  <img
                     src={sampleImage}
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  <H4>
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Library and community hub opens at Washington Park
                     </a>
                  </H4>
                  <p className="date">12 December 2018</p>
                  <summary>
                     Local residents joined special guests to celebrate the official
                     opening of the new Riverwood Library and Community Hub at Washington
                     Park. The new library and community hub are located in one of{' '}
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/media-news/library-and-community-hub-opens-at-washington-park/">
                        Read more
                     </a>
                  </p>
                  <img
                     src={sampleImage}
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
            </CardsWrapper>
         </NewsWrapper>
      )
   }
}

const NewsWrapper = styled.div`
   width: 68%;
   margin: 6rem auto 0rem;
   font-family: 'Plantin', serif;

   h4 {
      color: #00b398;
   }

   ${below.mid`
      width: 94%;
      `};
`

const CardsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Card = styled.div`
   flex: 0 0 23%;
   border: 1px solid #d4d4d4;
   margin: 1% 1% 1% 0;
   font-family: 'Founders Grotesk', sans-serif;
   font-size: 1.5rem;
   padding: 1rem;

   a {
      text-decoration: none;
      color: inherit;
      transition: opacity 0.3s;
      :hover {
         opacity: 0.7;
      }
   }

   p.date {
      font-family: 'Plantin', serif;
      color: #00b398;
      padding-bottom: 2rem;
   }

   p.read-more {
      line-height: 3;

      :after {
         transition: all 0.5s ease;
         content: ' →';
      }

      :hover:after {
         color: #9b9b9b;
         padding-left: 1rem;
      }
   }

   ${below.tablet`
      width: 100%;
      flex: 0 0 auto;
   `};
`
export default BusTimetable

import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H4, H3 } from '../../components/Text.js'
import { below } from '../../style/functions'

class BusTimetable extends React.Component {
   componentDidMount() {
      this.props.updateMeta(
         "sample text",
         "sample text",
         "sample text",
         "sample text",
         "sample text",
         "sample text",
	 )
   }
   
   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <NewsWrapper>
            <H3>媒体及新闻</H3>
            <CardsWrapper>
               <Card>
                  
                  <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">
                     <H4>Library and community hub opens at Washington Park</H4>
                  </a>
                  
                  <summary>
                     12 December 2018 – Local residents joined special guests to celebrate
                     the official opening of the new Riverwood Library and Community Hub
                     at Washington Park. The new library and community hub are located in
                     one of <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">[...]</a>
                  </summary>
                  <p className="read-more">
                     <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">Read more</a>
                     
                  </p>
                  <img
                     src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  
                  <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">
                     <H4>Library and community hub opens at Washington Park</H4>
                  </a>
                  
                  <summary>
                     12 December 2018 – Local residents joined special guests to celebrate
                     the official opening of the new Riverwood Library and Community Hub
                     at Washington Park. The new library and community hub are located in
                     one of <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">[...]</a>
                  </summary>
                  <p className="read-more">
                     <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">Read more</a>
                     
                  </p>
                  <img
                     src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  
                  <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">
                     <H4>Library and community hub opens at Washington Park</H4>
                  </a>
                  
                  <summary>
                     12 December 2018 – Local residents joined special guests to celebrate
                     the official opening of the new Riverwood Library and Community Hub
                     at Washington Park. The new library and community hub are located in
                     one of <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">[...]</a>
                  </summary>
                  <p className="read-more">
                     <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">Read more</a>
                     
                  </p>
                  <img
                     src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  
                  <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">
                     <H4>Library and community hub opens at Washington Park</H4>
                  </a>
                  
                  <summary>
                     12 December 2018 – Local residents joined special guests to celebrate
                     the official opening of the new Riverwood Library and Community Hub
                     at Washington Park. The new library and community hub are located in
                     one of <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">[...]</a>
                  </summary>
                  <p className="read-more">
                     <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">Read more</a>
                     
                  </p>
                  <img
                     src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  
                  <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">
                     <H4>Library and community hub opens at Washington Park</H4>
                  </a>
                  
                  <summary>
                     12 December 2018 – Local residents joined special guests to celebrate
                     the official opening of the new Riverwood Library and Community Hub
                     at Washington Park. The new library and community hub are located in
                     one of <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">[...]</a>
                  </summary>
                  <p className="read-more">
                     <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">Read more</a>
                     
                  </p>
                  <img
                     src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  
                  <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">
                     <H4>Library and community hub opens at Washington Park</H4>
                  </a>
                  
                  <summary>
                     12 December 2018 – Local residents joined special guests to celebrate
                     the official opening of the new Riverwood Library and Community Hub
                     at Washington Park. The new library and community hub are located in
                     one of <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">[...]</a>
                  </summary>
                  <p className="read-more">
                     <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">Read more</a>
                     
                  </p>
                  <img
                     src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  
                  <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">
                     <H4>Library and community hub opens at Washington Park</H4>
                  </a>
                  
                  <summary>
                     12 December 2018 – Local residents joined special guests to celebrate
                     the official opening of the new Riverwood Library and Community Hub
                     at Washington Park. The new library and community hub are located in
                     one of <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">[...]</a>
                  </summary>
                  <p className="read-more">
                     <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">Read more</a>
                     
                  </p>
                  <img
                     src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
               <Card>
                  
                  <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">
                     <H4>Library and community hub opens at Washington Park</H4>
                  </a>
                  
                  <summary>
                     12 December 2018 – Local residents joined special guests to celebrate
                     the official opening of the new Riverwood Library and Community Hub
                     at Washington Park. The new library and community hub are located in
                     one of <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">[...]</a>
                  </summary>
                  <p className="read-more">
                     <a href="/ch/ch-media-news/library-and-community-hub-opens-at-washington-park/">Read more</a>
                  </p>
                  <img
                     src="http://13.211.165.10/wp-content/uploads/2018/05/melrose-park-sydney-property-013-FERRY.jpg"
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
   margin: 7rem auto 0rem;
   font-family: 'Plantin', serif;

   h3 {
      color: #9b9b9b;
   }

   ${below.mid`
      width: 94%;
   `};
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
      text-decoration: none;
      color: inherit;
      transition: color .3s;
      :hover {
         color: #9b9b9b;
      }
   }

   p.read-more {
      line-height: 3;

      :after {
         transition: all 0.5s ease;
         content: ' →';
      }

      :hover:after {
         padding-left: 1rem;
      }
   }

   ${below.tablet`
      width: 100%;
      flex: 0 0 auto;
   `};
`
export default BusTimetable

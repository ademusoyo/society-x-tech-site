import React from 'react'

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import HomeNav from "../components/navbar/home"
import styled from 'styled-components' 
import { Container } from '../components/global'
import Contact from '../components/sections/contact/contact'
import Footer from '../components/sections/footer'

const RelatedIndexPage = () => (
    <Layout>
    <SEO title={`Resources`} />
    <HomeNav />
    <StyledContainer>
      <Subtitle>Mindful Tech</Subtitle>
      <ResourceItem><a href="https://thriveglobal.com/stories/technology-might-be-the-answer-to-mental-health-crisis/" className="related-link">
                        Technology Might Be the Answer to Mental Health Crisis
      </a></ResourceItem>
      <ResourceItem>
      <a href="https://greatergood.berkeley.edu/article/item/do_mindfulness_apps_work" className="related-link">
                        Do Mindfulness Apps Work?
                    </a>
      </ResourceItem>
      <ResourceItem>
      <a href="http://theconversation.com/can-an-app-help-us-find-mindfulness-in-todays-busy-high-tech-world-65341" className="related-link">
                        Can an app help us in this busy high-tech world?
                    </a>
      </ResourceItem>
      <ResourceItem>
      <a href="https://mashable.com/feature/best-meditation-apps-mindfulness/#wbX0Fw6VDmqc" className="related-link">
                        My complicated quest to find the perfect meditation app
                    </a>
      </ResourceItem>



      <Subtitle>Online Communities</Subtitle>
      <ResourceItem><a href="https://twitter.com/blackdisability/status/1087824325401546752?s=12" className="related-link">
          Can we talk about how ableist it feels when people treat social media as an inherently evil...
      </a></ResourceItem>
      <ResourceItem>                      <a href="https://makermag.com/2018/12/08/friendship-maker-online-communities/" className="related-link">
                            Friendship as a maker: the role of online communities
                        </a></ResourceItem>
      <ResourceItem>                      <a href="https://medium.com/desk-of-van-schneider/the-impending-death-of-open-online-communities-b75f8f7e3b2d" className="related-link">
                        The Impending Death of open online communities.
                        </a></ResourceItem>
      <ResourceItem>                        <a href="https://gregorynewell.com/2019/01/22/can-the-problems-with-social-media-be-fixed/" className="related-link">
                        Can the problems with social media be fixed?
                        </a></ResourceItem>

                        <Subtitle>
                    Ed Tech
                    </Subtitle>
                  
                    <ResourceItem> <a href="https://medium.com/@ginidietrich/online-learning-will-make-you-richer-healthier-and-more-popular-202e109fbe1a" className="related-link">
                        Online Learning Will Make You Richer, Healthier, and More Popular
                        </a></ResourceItem>
                        <ResourceItem>   <a href="https://threader.app/thread/1087661843030659072" className="related-link">
                        Ed Tech has so many opportunities ahead... 
                        </a></ResourceItem>

                       <ResourceItem>  <a href="https://anchor.fm/makermag" className="related-link">
                        Solo Entrepreneurship with Paul Jarvis
                        </a></ResourceItem>

                        <ResourceItem>  <a href="https://medium.com/world-economic-forum/is-online-learning-the-future-of-education-82b5b01cb6ea" className="related-link">
                        Is online learning the future of education?
                        </a></ResourceItem>

                        <ResourceItem>  <a href="https://medium.com/s/story/you-cant-build-an-iphone-with-python-ad690e5b2164" className="related-link">
                        You can't build an iPhone with Python
                        </a></ResourceItem>

                        <ResourceItem>  <a href="https://uxdesign.cc/your-ux-bootcamp-will-not-get-you-a-job-unless-you-do-these-critically-important-steps-18d84e71dde5" className="related-link">
                        Your UX Bootcamp Will NOT Get You A Job: Unless You Do These Critically Important Steps
                        </a></ResourceItem>

                        <ResourceItem>   <a href="https://www.podbean.com/media/share/dir-45uuf-5c42466" className="related-link">
                        engineering vs software engineering vs computer science vs software programming 2019
                        </a></ResourceItem>
                      

           
                    <Subtitle>
                   No Code 
                    </Subtitle>
      

                <ResourceItem> <a href="https://medium.com/crowdbotics/the-best-low-and-no-code-mobile-app-development-platforms-53bc0b4f3558" className="related-link">
                    The Best Low- and No-Code Mobile App Development Platforms
                    </a></ResourceItem>
                  
                    <ResourceItem>  <a href="https://podcasts.apple.com/us/podcast/2-no-code-products-with-ben-tossell/id1454843356?i=1000433881585" className="related-link">
                    No Code Products with Ben Tossell
                    </a></ResourceItem>
            
                    <ResourceItem>  <a href="https://medium.com/@Abadesi/hustle-crew-how-i-built-a-global-tech-community-and-training-company-with-no-code-2fd45baa0725" className="related-link">
                    Hustle Crew: How I built a global tech community and training company with no code
                    </a></ResourceItem>
                  
                    <ResourceItem>  <a href="https://devopsagenda.techtarget.com/opinion/Why-the-promise-of-low-code-software-platforms-is-deceiving" className="related-link">
                    Why the promise of low-code software platforms is deceiving
                    </a></ResourceItem>
                  
                    <ResourceItem>   <a href="https://www.forbes.com/sites/jasonbloomberg/2017/07/20/the-low-codeno-code-movement-more-disruptive-than-you-realize/#9342651722a3" className="related-link">
                    The Low-Code/No-Code Movement: More Disruptive Than You Realize
                    </a></ResourceItem>
              
                    <Subtitle>
                    Biases in Tech 
                    </Subtitle>
                  
                   
              
                
                <ResourceItem>  <a href="https://www.amazon.com/Technically-Wrong-Sexist-Algorithms-Threats/dp/0393634639/ref=sr_1_1?keywords=Technically+Wrong&qid=1559299932&s=gateway&sr=8-1" className="related-link">
                        Technically Wrong: Sexist Apps, Biased Algorithms and Other Threats of Toxic Tech
                    </a></ResourceItem>
                  
             
              
                <Subtitle>
                   Mobile  First vs. Web App First
                   </Subtitle>
              
                <ResourceItem>  <a href="https://clearbridgemobile.com/mobile-app-vs-mobile-website-which-is-the-better-option/" className="related-link">
                    Mobile App Vs. Mobile Website: A UX Comparison – Which Is The Better Option?
                    </a></ResourceItem>
                    
                    <ResourceItem>   <a href="https://www.allbusiness.com/7-reasons-business-needs-mobile-app-19179-1.html" className="related-link">
                    7 Reasons Why Your Business Needs a Mobile App
                    </a></ResourceItem>
       
                    <ResourceItem>  <a href="https://twitter.com/MichaelBerhane_/status/1059809337638612993" className="related-link">
                    People really don't want to download any more new apps...
                    </a></ResourceItem>
                    
                    <ResourceItem>   <a href="https://blog.bitsrc.io/4-ways-to-build-your-mobile-app-make-the-right-choice-efe079c7c817" className="related-link">
                    PWA vs Hybrid App vs Native: Choosing the Right Mobile App
                    </a></ResourceItem>
                
                    <Subtitle>                
                   Internet Identity
                    </Subtitle>

            
                <ResourceItem> <a href="https://blog.openzeppelin.com/smart-contracts-you-already-signed-2930aee9dacc/?source=search_post" className="related-link">
                    Smart Contracts You Already Signed 
                    </a></ResourceItem>
                  
                    <ResourceItem>  <a href="https://medium.com/the-new-york-times/why-you-shouldnt-use-facebook-to-log-in-to-other-sites-b6827fdb1f21" className="related-link">
                    Why You Shouldn’t Use Facebook to Log In to Other Sites
                    </a></ResourceItem>
            
                    <ResourceItem> <a href="https://www.cbsnews.com/news/what-are-you-sharing-when-you-sign-in-with-facebook-or-google/" className="related-link">
                    What are you sharing when you sign in with Facebook or Google?
                    </a></ResourceItem>
               
        <Contact />

    </StyledContainer>
    <Footer />
    </Layout>
)
export default RelatedIndexPage

const Subtitle = styled.h5`
  font-size: 30px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
`

const StyledContainer = styled(Container)`
  margin: 10em 5em;
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin: 10em 2em;
  }
`

export const ResourceItem = styled.p`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.medium};
  width: 80%;
  ${props => props.theme.font_size.xsmall};

  a {
    text-decoration: none;
    opacity: 0.9;
    color: ${props =>props.theme.color.secondary}
  }
`




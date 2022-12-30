import Particles from 'react-tsparticles';
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import img from '../images/picture.png';
const Header = styled.h2`
    text-align: center;
    color: white;
`
const ChangeCol = styled.span`    
    color: orange;
`
const Intro = styled.p`
    text-align:center;
`
const Wrapper = styled.div`
    background-color:grey;
    width:100%;
    height: 100%;
    display:flex;
`
const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:50px;
    margin-left:250px;
    margin-right:250px;
`
const ContentList = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:250px;
    margin-right:200px;
    
`
const ImgDiv = styled.div`
    flex:1;
`
const Writting = styled.div`
    flex:3;
`
const Listing =styled.ul`
    flex:1;
`
const Container = styled.div`
   
`
const About = () => {
  return (
    <div>
                  <Particles
    id="tsparticles"
    options={{
      background: {
       
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 300,
            duration: 2,
            opacity: 0.8,
            size: 20,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffa500",
        },
        links: {
          color: "#ffa500",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }
  }
   

  />
        <Navbar/>

        <Wrapper>
        <Container>
        <Header>About <ChangeCol>Me</ChangeCol></Header>
        <Intro>Allow Me to Introduce MySelf</Intro>
        <Content>
            <ImgDiv>
            <img src={img} alt=""/>
            </ImgDiv>
            <Writting>
            I am a full stack developer with about 2 years experience in developing mobile and web application.
           My main focus has been web application where i have developed a fair number of websites;
           I am a full stack developer with about 2 years experience in <ChangeCol>developing mobile and web application.</ChangeCol>
           My main focus has been web application where i have developed a fair number of websites;
           <br/>
           <br/>
            </Writting>           
        </Content>
        <Header>Look What I Can Do</Header>
        <ContentList>
        <Listing>
            <li>Mobile Apps</li>
            <li>State management With Redux</li>
            <li>Building Machine Learning Models</li>
            <li>Building Ecommerce Website</li>
            <li>Web Designing</li>
            <li>Building Restful api's</li>
        </Listing>
        <Listing>
            <li> Good Writing Skills</li>
            <li>Problem Solving Ability</li>
            <li>OpencV</li>
            <li>Computer Vision</li>
        </Listing>
        </ContentList>      
        </Container>
        </Wrapper>       
    </div>
  )
}

export default About;

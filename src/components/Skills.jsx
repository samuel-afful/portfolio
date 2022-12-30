
import styled from 'styled-components'
import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

const Container = styled.div`
   color:grey;
   display:flex;
  
`
const Desc = styled.div`
    flex:1;
    align-items: center;
  justify-content: center;
  margin-left:150px;
  margin-top:100px;
  margin-right:50px;
`
const Header = styled.h1`
 text-decoration: underline;
`
const Skill = styled.div`
    flex:1;

`
const Wrapper = styled.div`
     background-color:#181E1E;
    width:100%;
    padding:50px;
    
`
const Progress = styled.div`
    width:40%;
    flex:3;
    padding-top:10px;
`
const Listing = styled.div`
    display:flex;
    padding-top:10px;
`
const Item = styled.h6`
 flex:1;
`
const Deskills = styled.p`
    padding-bottom:20px;
`
const Skills = () => {
  return (
    <Wrapper>
       <Container>
       <Desc>
        <Header>
            Skills
        </Header>
        I am a full stack developer with about 2 years experience in developing mobile and web application.
        My main focus has been web application where i have developed a fair number of websites;
       </Desc>
       <Skill>
        <Deskills>
            Developer Skills
            <Listing>             
                <Item>Html</Item>
                <Progress>
            <LinearProgress variant="determinate" value={70} />
           </Progress> 
            </Listing>
            <Listing>             
                <Item>Boostrap</Item>
                <Progress>
            <LinearProgress variant="determinate" value={60} />
           </Progress> 
            </Listing>
            <Listing>             
                <Item>Styled-Components</Item>
                <Progress>
            <LinearProgress variant="determinate" value={80} />
           </Progress> 
            </Listing>
            <Listing>             
                <Item>REACT</Item>
                <Progress>
            <LinearProgress variant="determinate" value={80} />
           </Progress> 
            </Listing>
            <Listing>             
                <Item>CSS</Item>
                <Progress>
            <LinearProgress variant="determinate" value={50} />
           </Progress> 
            </Listing>
        </Deskills>
        <Deskills>
            Backend Skills
           
            <Listing>             
                <Item>Nodejs(Expressjs)</Item>
                <Progress>
            <LinearProgress variant="determinate" value={75} />
           </Progress> 
            </Listing>
            <Listing>             
                <Item>MongoDB</Item>
                <Progress>
            <LinearProgress variant="determinate" value={70} />
           </Progress> 
            </Listing>
        </Deskills>
       </Skill>
       </Container>
    </Wrapper>
  )
}

export default Skills
import emailjs from 'emailjs-com';
import {useState} from 'react'
import Particles from 'react-tsparticles';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import img from '../images/picture.png';
import { FacebookOutlined,Instagram,Twitter,GitHub } from '@mui/icons-material';
import {SERVICE_ID,TEMPLATE_ID,USER_ID} from '../data.js';

const Wrapper = styled.div`
    width:100%;
    height:100vh;
    background-color:grey;
    display:flex;
    align-items:center;
    justify-content:center;
   overflow:hidden;
   padding-top:50px;
`
const Img = styled.div`
 flex:1;
 width:100%;
 height:100%;
 
`
const ContactDiv = styled.div`
    flex:1;
    height:100%;
    /* background-color:green; */
    width:100%;
    
`
const InputText = styled.h6`
    
`
const Header = styled.h1`

`
const InputCon = styled.div`
    border-bottom: solid 5px black;
    width:70%;
    margin-bottom:30px;
`
const Input = styled.input`
border:none;
outline:none;
width:100%;
background-color:#808080;
opacity:1;
cursor:pointer;
`
const Form = styled.div`
    margin-top:50px;
    border-top: solid 3px black;
    border-left: solid 3px black;
    height:100%;
    padding:50px;
    
`
const Button = styled.div`
    width:70%;
    background-color:black;
    border-radius:30px;
    text-align:center;
    color:white;
    padding:10px;
    cursor:pointer;
`
const ButtonSucess = styled.div`
    width:70%;
    background-color:green;
    border-radius:30px;
    text-align:center;
    color:white;
    padding:10px;
    cursor:pointer;
`
const ButtonFail = styled.div`
    width:70%;
    background-color:red;
    border-radius:30px;
    text-align:center;
    color:white;
    padding:10px;
    cursor:pointer;
`
const FormFlex = styled.div`
    display:flex;
`
const FormDetail = styled.div`
    flex:8;
`
const AuthorDetail = styled.div`
    flex:1;
    text-align:center;
    padding-top:50px;

`
const Icons = styled.span`
    margin:10px;
    cursor:pointer;
`

const Contact = () => {

  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [message,setMessage] = useState("")
  const [phone,setPhone] = useState("")
  const [sent,setSent] = useState(false)
  const [error,setError] = useState(false)
  const templateParams = {
    name: name,
    email: email,
    phone:phone,
    message:message
};

  const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.send(SERVICE_ID,TEMPLATE_ID,templateParams,USER_ID)
        .then(function(response) {
          setSent(true)
          console.log('SUCCESS!', response.status, response.text);
       }, function(err) {
          setError(true)
          console.log('FAILED...', err);
       });
  }
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
        <Img>
        <img src={img} alt=""/>
        </Img>
        <ContactDiv>
            <Header>Contact Us</Header>
            <Form>
                <FormFlex> 
                    <FormDetail>           
                <InputText>FullName</InputText>
                <InputCon>
                <Input  onChange={(e)=>setName(e.target.value)}></Input>
                </InputCon>
                
                <InputText>Email</InputText>
                <InputCon>
                <Input onChange={(e)=>setEmail(e.target.value)}></Input>
                </InputCon>

                <InputText>Phone</InputText>
                <InputCon>
                <Input onChange={(e)=>setPhone(e.target.value)}></Input>
                </InputCon>
                
                <InputText >Message</InputText>
                <InputCon>
                <Input  onChange={(e)=>setMessage(e.target.value)}></Input>
                </InputCon>
            {sent?<ButtonSucess>Sent Successfully</ButtonSucess>
            :error?<ButtonFail >Failed To Send</ButtonFail>
            :<Button onClick={handleSubmit}>Contact Us</Button>}
            </FormDetail>
            <AuthorDetail>
             <Header>Contact</Header>
             <InputText>info@sam.com</InputText>
             <Header>Base In</Header>
             <InputText>Accra, Ghana</InputText>
             <br/>
            <br/>          
             <Icons>           
                <FacebookOutlined/>           
             </Icons>
             <Icons>           
                <Instagram/>               
             </Icons>
             <Icons>          
          <Twitter/>          
           </Icons>
           <Icons> 
            <a href='https://github.com/samuel-afful' style={{color:'black'}}>         
          <GitHub/>
           </a>          
          </Icons>
             </AuthorDetail>
            </FormFlex>
            </Form>
        </ContactDiv>    
      </Wrapper>
        
        </div>
  )
}

export default Contact
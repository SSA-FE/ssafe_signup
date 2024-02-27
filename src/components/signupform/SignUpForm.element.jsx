import styled,{css} from "styled-components";
import palette from "../../styles/palette";
import openEye from "../../assets/openeye.svg";
import closeEye from "../../assets/closeeye.svg";

export const SignUpFormBlock = styled.form`
    height:100%;
    width:30rem;
    
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    gap: 1.8rem;
`

export const InputGroup = styled.div`
    display:flex;
    flex-direction: column;
    width:85%;

    label{
        padding-left:0.8rem;
        margin-bottom: 0.5rem;

        font-weight: 600;
    }

    input{
        padding: 0.8rem 1rem;
        line-height: 1.2rem;
        position: relative;
        
        border: solid 1px grey;
        border-radius: 2rem;

        background-image: ${closeEye};
        &:focus{
            outline:none;
            border: solid 1px ${palette.skyblue};
        }
    }
    img{
        cursor: pointer;
        width: 2rem;
        height:2rem;
        position:absolute;
        margin-left: 22.5rem;
        margin-top: 2.2rem;
    }

    span{
        height: 0.5rem;
        padding-left:0.8rem;
        margin-top: 0.3rem;

        color:red;
    }
`

export const Button = styled.button`
    width:85%;
    height: 3 rem;
    padding: 0.8rem 0.8rem;
    margin-top: 3rem;

    border-radius: 2rem;     
    border:none;

    background-color:${(props)=>props.active?palette.btnBlue:palette.backGray};
    color:white;
    
    font-weight:700;
    font-size:1.4rem;

    cursor:pointer;
`
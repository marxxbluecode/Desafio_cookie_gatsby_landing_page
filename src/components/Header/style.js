import styled from 'styled-components';


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
`
export const HeaderLine1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .6vw 5vw .6vw 6vw;
    color: #707070;
`
export const Line1Left = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const Line1Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`
export const img = styled.img`
    margin-right: 1vw;
    cursor: pointer;
`
export const p = styled.p`
    margin-right: 3vw;
`
export const HeaderLine2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 8.7vw 1vw 6vw;
    background-color: #F2DBF0;
`
export const logo = styled.img`
  width: 20vw;
`
export const searchbar = styled.div`
    display: flex;
    align-items: center;
    
`
export const searchicon = styled.img`
    width: 1.8vw;
    position: relative;
    left: 2.2vw;
    cursor: pointer;
`
export const input = styled.input`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 3vw/3vw;
    width: 88%;
    height: 2.5vw;
    border: none;
    padding-left: 2.6vw;
`
export const HeaderLine3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 8.7vw 1vw 6vw;
    color: #707070;
`
export const p2 = styled.p`
    margin-right: 2vw;
    font-size: 1.2vw;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`
export const img2 = styled.img`
    width: 13vw;
    margin-right: 1vw;
`
export const Middle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0vw 8vw 0vw 8vw;
    color: #fff;
`
export const background = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: center;;
`
export const backgroundimg = styled.img`
    width: 100%;
`
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: -20vw;
    left: 8vw;
    font-family: 'Fredoka One', cursive;
`
export const Title = styled.h1`
    font-size: 3vw;
    font-weight: bolder;
    padding-bottom: .5vw;
    color: #000000;
`
export const SubTitle = styled.h2`
    font-size: 2vw;
    font-weight: 100;
    opacity: .7;
    padding-bottom: 1vw;
    color: #000000;
`
export const BuyBtn = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const Btn = styled.button`
    background-color: #fff;
    width: 10%;
    ooutline: none;
    border: none;
    border-radius: 3vw/3vw;
    padding: .5vw .5vw .5vw 1vw;
    position: relative;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        background-color: #F2DBF0;
          transition: all 0.3s ease 0s;
          animation: 5s ease 0s 1 normal none running fdBcwW;
          font-weight: bold;
    }
`
export const carticon = styled.img`
    width: 1.5vw;
    margin-right: 1vw;
    position: absolute;
    z-index: 1;
    left: .4vw;
    cursor: pointer;
   
`
export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 1vw 10vw 1vw 12vw;
    position: relative;
    bottom: 6vw;
`
export const div = styled.div`
    display: flex;
    justify-content: space-between;
`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 2vw;
    left: 1vw;
    
`
export const BottomImg = styled.div`
    display: flex;
    flex-direction: row;
`
export const Img = styled.img`
    width: 7vw; 
`
export const Img2 = styled.img`
    width: 13vw; 
`
export const Img3 = styled.img`
    width: 9vw; 
`
export const Caps = styled.p`
    width: 90%;
    font-size: 1.2vw;
    color: #707070;
`
export const paragraph = styled.p`
    font-weight: bolder;
    font-size: .9vw;
    color: #000000;
`
export const barra = styled.div`
    width: .5vw;
    height: 13vh;
    border-radius: 1vw;
    background-color: #707070;
    margin: 0vw 5vw 0vw 5vw;
`



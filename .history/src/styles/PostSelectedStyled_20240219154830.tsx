import styled from 'styled-components'

export const BoxPicture = styled.div`
    width: 60% !important;
    height: 450px;
    background: black !important;
   @media only screen and (max-width: 750px) {
        display: none;
   }
`

export const BoxComments = styled.div`
    width: 40%;
    height: 450px;
    @media only screen and (max-width: 750px) {
        width: 100%;
   }
`

export const ContainerListComments = styled.div`
    height : 300px;
    overflow-y: auto;
`

export const ImgPost = styled.img`
        object-fit: 'contain' !important;
        height: 450px !important;
        margin: auto;
        display: flex;
        
`

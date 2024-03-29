import styled from 'styled-components'

type CategoryBgImageProps = {
  imageUrl: string;
}

export const CategoryBgImage = styled.div<CategoryBgImageProps>`
    background-image: url(${({imageUrl}) => imageUrl});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
`

export const CategoryBody = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`

export const CategoryBodyHeading = styled.h2`
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
`

export const CategoryBodyText = styled.p`
    font-weight: lighter;
    font-size: 16px;
`

export const CategoryStyled = styled.div`
    min-width: 28rem;
    height: 20rem;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    @media (max-width: 600px) {
      min-width: 20rem;
      height: 15rem;
    }
   
    @media (max-width: 1500px) {
      min-width: 25rem;
      height: 17rem;
    }
  
    @media (max-width: 1350px) {
      min-width: 20rem;
      height: 15rem;
    }

    @media (max-width: 900px) {
      min-width: 18rem;
      height: 13rem;
    }
 
    &:hover {
      cursor: pointer;
  
      ${CategoryBgImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
  
      ${CategoryBody} {
        opacity: 0.9;
      }
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
`
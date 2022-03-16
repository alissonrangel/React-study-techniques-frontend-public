import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
`;

export const Item = styled.div`
  font-size: 20px;
  color: #ddd;
  margin: 40px 0;
  fieldset{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    
    fieldset{
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin: 5px;
      padding: 5px;
      border-radius: 10px;

      .comment{
        text-align: center;
        background-color: #666;
        display: block;
        height: 100%;
        width: 100%;        
        color: #fff;
        font-weight: normal;
        margin: 5px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;
      }

      hr:first-of-type{
        display: none;        
        padding: 0;
        margin: 0;
      }
      hr{
        width: 100%;
        padding: 0;
        margin: 5px;
      }
    }
  }
  p{
    font-weight: bold;
    color: #999;
    font-size: 1em;
  }
  pre{    
    text-indent: 1em;
    text-overflow: hidden;
    white-space: pre-wrap;
    font-family: Arial;
    line-height: 1.5em;
    text-align: justify;  
  }
  img{    
    width: 300px;
    height: 300px;
  }
  a{
    text-decoration: none;
    color: #ddd;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 300px;
`;

import styled from 'styled-components';

export const Error = styled.div`
  background-color: #ccc;
  color: red;
  border: red;
  padding: 10px;
  outline: none;  
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  background-color: #484c54;
  color: #ccc;
  border: 1px solid #ccc;
  display: inline-block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  /* background-color: #F6e7e3; */
  /* color: #e47068; */
  /* border: 1px solid #e47068; */
  /* outline: none; */
  border-radius: 10px;
  h4{
    padding: 0;
    margin: 0 0 10px 0;
  }
`;

export const Input = styled.input`
  background-color: #ccc;
  color: #484c54;
  border: #ccc;  
  padding: 10px;
  /* background-color: #F6e7e3;
  color: #e47068;
  border: 1px solid #e47068; */
  outline: none;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  background-color: #ccc;
  color: #484c54;
  border: #ccc;
  padding: 10px;
  height: 40px;
  font-family: Helvetica;
  /* background-color: #F6e7e3;
  color: #e47068;
  border: 1px solid #e47068; */
  outline: none;  
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

export const InputFile = styled.input`
  background-color: #ccc;
  color: #484c54;
  border: #ccc;
  padding: 10px;
  outline: none;  
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  background-color: #ccc;
  color: #484c54;
  border: 1px solid #ccc;

  padding: 10px;
  background-color: #F6e7e3;
  color: #e47068;
  border: 1px solid #e47068;
  outline: none;  
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  
  padding: 10px;
  border-radius: 10px;

  &:hover{
    background-color: #484c54;
    color: #ccc;
    border: 1px solid #ccc;
  }
`;

import styled from "styled-components";

export default function CriaHabito() {
    return (
          <Container>
            <PopCriaHabito>
                <Campo type="text" name="nome-do-habito" placeholder="nome do hábito"/>
                
                <Salvar>Salvar</Salvar>
            </PopCriaHabito>
          </Container>
    );
  }

  const Container = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  `

  const PopCriaHabito = styled.div`
  background-color: white;
  width: 80wv;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  `

  const Campo = styled.input`
  border-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  width: 303px;
  height: 45px;
  margin-bottom: 6px;
  padding-left: 10px;
  ::placeholder {
    color: #DBDBDB;
    padding-left: 10px;
  }
  `

  const Salvar = styled.button`
  
  `
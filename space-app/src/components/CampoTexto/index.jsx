import styled from "styled-components"

const InputEstilizado = styled.div`
    color: #D9D9D9;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    width: 602px;
    max-height: 56px;
    align-items: center;
    
    input{
        background: transparent;
        border: none;
        font-size: 20px;
        padding: 0 18px;
        color: #D9D9D9;
        width: 100%
    }

    input:focus {
        outline: none;
    }

    input::placeholder {
        color: #D9D9D9;
    }

    img {
        width: 32px;
        height: 32px;
        padding: 0 10px;
        cursor: pointer;
    }

`


const CampoTexto = ({ placeholder }) => {
    return(
        <InputEstilizado>
            <input type="text" placeholder={placeholder} />
            <img src="/src/assets/search.png" alt="Foto de uma lupa" />
        </InputEstilizado>
    )
}

export default CampoTexto;
import styled from "styled-components";
import tags from "./tags.json";

const TagsEstilizada = styled.div`
    display: flex;
    margin-top: 56px;
    gap: 24px;
    align-items: center;

    p {
        color: #D9D9D9;
        font-size: 24px;
        line-height: 29px;
        margin-right: 20px;
    }
`

const ButtonTagEstilizado = styled.button`
    background: #D9D9D94D;
    color: #FFF;
    border: none;
    padding: 10px 8px;
    font-size: 24px;
    line-height: 29px;
    border-radius: 10px;
    max-height: 49px;
    cursor: pointer;
    
    &:active {
        border: 2px solid #C98CF1;
        padding: 8px 6px;
    }
`

const Tags = () => {
    return (
        <TagsEstilizada>
            <p>Busque por tags:</p>
            {tags.map(tag => <ButtonTagEstilizado key={tag.id}>{tag.titulo}</ButtonTagEstilizado>)}
        </TagsEstilizada>
    )
}

export default Tags;
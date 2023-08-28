import React from 'react';
import styled from 'styled-components';

const CorpoInput = styled.input`
    font-size: 18px;
    width: 15%;
`

function Input({ tipo, valor, funcao, onBlur }) {
    return (
        <CorpoInput
            type={tipo}
            value={valor}
            onChange={funcao}
            onBlur={onBlur}
        />
    )
}

export default Input;

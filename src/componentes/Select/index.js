import styled from 'styled-components';

const CorpoSelect = styled.select`
    font-size: 18px;
    width: 15%;
`

function Select({opcoes, valor, funcao}) {
    return (
        <CorpoSelect value={valor} onChange={funcao}>
            
            {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                    {opcao.label}
                </option>        
            ))}
        </CorpoSelect>
    )
}

export default Select
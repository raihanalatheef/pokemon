import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const FlexRowCentered = styled(Flex)`
    flex-direction: row;
    justify-content: center;
    gap: ${props => props.gap || 0}
`

export const FlexRowSpaceBetween = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
`

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`
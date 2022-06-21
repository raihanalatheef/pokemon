import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
`

export const FlexRowCentered = styled(Flex)`
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${props => props.gap || 0}
`

export const FlexRowSpaceBetween = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`
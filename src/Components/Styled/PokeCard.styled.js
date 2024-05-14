import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledPokeCard = styled(motion.div)`
  -webkit-box-shadow: 4px 3px 13px -6px #1a2226;
  -moz-box-shadow: 4px 3px 13px -6px #1a2226;
  box-shadow: 3px 2px 13px -6px #1a2226;
  border-radius: 10px;
  cursor: pointer;
  flex: 0 0 24%;
  width: 24%;
  transition: all 0.5s ease;
  img {
    height: 130px;
    width: 130px;
    transition: all 0.3s ease;
  }
  figure {
    text-align: center;
    border-radius: 100%;
    background: linear-gradient(45deg, #5696cbdb, transparent);
    width: 130px;
    margin: 15px auto;
    height: 130px;
  }
  &:hover {
    background: #b2d7f6;
  }
  @media (max-width: ${({ theme }) => theme.medium}) {
    flex: 0 0 48%;
  }
  @media (max-width: ${({ theme }) => theme.small}) {
    flex: 0 0 100%;
  }
`

export const PokeCardInfo = styled.div`
  padding: 10px 15px;
  span {
    font-weight: 800;
    color: #898888;
    font-size: 14px;
  }
  h4 {
    font-weight: 800;
    font-size: 18px;
    color: #2c2c2c;
    text-transform: capitalize;
    padding-top: 5px;
  }
`

export const PokeCardTypes = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-block-start: 0;
  padding-inline-start: 0;
  padding: 10px 0;

  li {
    padding: 5px 10px;
    border-radius: 25px;
    color: #fff;
    text-transform: Capitalize;
    min-width: 80px;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.medium}) {
      width: 100%;
    }
  }
`

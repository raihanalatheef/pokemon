import { FlexColumn } from "./Styled/Flex.styled"
import {
  StyledPokeCard,
  PokeCardInfo,
  PokeCardTypes,
} from "./Styled/PokeCard.styled"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

// Rotate figure on hover using motion
const rotateMotion = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotateY: 180,
    scale: 1.1,
  },
}

export default function PokeCard(props) {
  let pokeTypes = props.types
  const pokeTypeForEach = pokeTypes.map((pokeType) => (
    <li key={pokeType.type.name} className={`type-${pokeType.type.name}`}>
      {pokeType.type.name}
    </li>
  ))

  let navigate = useNavigate()
  return (
    <StyledPokeCard initial="rest" whileHover="hover" animate="rest">
      <FlexColumn>
        <PokeCardInfo
          onClick={() => {
            navigate(`/pokemon/${props.name}`, { state: props })
          }}
        >
          <motion.figure variants={rotateMotion}>
            <img
              src={props.sprites.other.dream_world.front_default}
              alt={props.name}
            />
          </motion.figure>
          <span>#{String(props.id).padStart(3, "0")}</span>
          <h4>{props.name}</h4>
          <p>{props.url}</p>
          <PokeCardTypes>{pokeTypeForEach}</PokeCardTypes>
        </PokeCardInfo>
      </FlexColumn>
    </StyledPokeCard>
  )
}

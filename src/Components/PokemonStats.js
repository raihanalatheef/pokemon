import { StatBar, StatBarProgress, Stats } from "./Styled/PokemonStats.styled"

export default function PokemonStats(props) {
  const stats = props.stats.map((s) => (
    <div key={s.stat.name}>
      <span>{s.stat.name}</span>
      <StatBar>
        <StatBarProgress
          initial={{ width: 0 }}
          animate={{ width: `${s.base_stat}px` }}
          transition={{ duration: 1 }}
        ></StatBarProgress>
      </StatBar>
    </div>
  ))
  return (
    <Stats>
      <h2>Stats</h2>
      {stats}
    </Stats>
  )
}

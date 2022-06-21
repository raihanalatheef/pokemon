import { StatBar, StatBarProgress , Stats} from './Styled/PokemonStats.styled'

export default function PokemonStats(props) {

    const stats = props.stats.map((s) => (
        <div key={s.stat.name}>
        <span>{s.stat.name}</span>
        <StatBar>
                <StatBarProgress width={s.base_stat}></StatBarProgress>
        </StatBar>
        </div>
    ))
    console.log(stats,"stats")
     return (
        <Stats>
            <h2>Stats</h2>
            {stats}
        </Stats>
     )
}
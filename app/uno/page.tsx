import Link from 'next/link';
import Props from './props'

export default function Uno(){
    return(
        <div>
          <h1>Uno</h1>
          <Props nombre="Este es un props"></Props>
        </div>
    )
}
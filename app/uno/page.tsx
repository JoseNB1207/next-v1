"use-client"
import { useAppContext } from "../contexto/Appcontext";
import Link from 'next/link';
import Props from './props'

export default function Uno(){
    const{ nombre } = useAppContext();

    return(
        <div>
          <h1>Uno XD</h1>
          <Props nombre ="Este es un props"></Props>
        </div>
    )
}
import { ReactNode } from 'react';

export default function Hijo ({children}: {children: ReactNode}) {
    return(
        <div>
            Este es mi hijo {children}
        </div>
    )
}
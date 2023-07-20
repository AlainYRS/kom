import React, { useState } from 'react'
import GlobalContext from '@/complements/components/GlobalContextComp/GlobalContextComp'
import { Environment } from './JSONEnvironment'

const UserContext = (props: any) => {
    const [UsrCookie,setUsrCookie] = useState(null)

    return (
        <GlobalContext.Provider
            value={{
                Environment,
                UsrCookie,
                setUsrCookie,
            }}
        >
                {props.children}
        </GlobalContext.Provider>
    )
}

export default React.memo(UserContext);
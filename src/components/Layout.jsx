import { CacheProvider } from "@emotion/react"
import { Outlet } from "react-router-dom"

const Layout = () => {

    // const myCache = createCache({
    //     key: 'my-prefix-key',
    //     stylisPlugins: [
         
    //     ]
    //   })

    return (
        <>
            {/* <CacheProvider value={myCache}> */}
                <header>asd123</header>
                <section>
                    <Outlet />
                </section>
            {/* </CacheProvider> */}
        </>
    )
}

export default Layout
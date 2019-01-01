import Head from './Head' 
import Nav from './Nav' 

export default ({ children }) => {
    return (
        <div>
            <Head title="Layout Home" />
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
} 
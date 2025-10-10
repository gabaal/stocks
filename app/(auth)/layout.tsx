


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth-layout">
           
            <div className="container py-10">
                {children}
            </div>
        </main>
    )
}
export default Layout
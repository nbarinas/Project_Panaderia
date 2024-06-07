const Layout = ({ children }) => {
    return(
        <div className="flex flex-col mt-20 items-center" style={{ backgroundColor: "rgb(234, 210, 172)" }}>
            {children}
        </div>

    )
}

export default Layout
import Social from "../ui/Social"


function Footer(){
    return(
        <footer className="my-20 flex justify-between flex-wrap gap-1">
            <div>© {new Date().getFullYear()} rabindra-thapa.com.np | privacy?</div>
            <Social/>

        </footer>
    )

}

export default Footer
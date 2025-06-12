import Social from "../ui/Social"


function Footer(){
    return(
        <footer className="my-20 flex justify-between flex-wrap gap-1">
            <div>© {new Date().getFullYear()} &nbsp;
                <a href="www.rabindra-thapa.com.np">rabindra-thapa.com.np </a>
                | privacy?</div>
            <Social/>

        </footer>
    )

}

export default Footer
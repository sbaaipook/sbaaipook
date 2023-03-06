import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import cv from '../assets/docs/cv-abdo.pdf'

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    )
}


const Narbar = ({ setSelectedPage, selectedPage, isTopOfPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navBarBackground = isTopOfPage ? '' : "bg-blue";
    const navBarColor = isTopOfPage ? '': "text-white";

    return (
        <nav className={`${navBarBackground} ${navBarColor} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">SA.</h4>
                {isAboveSmallScreens ? (
                    <div className="flex justify-between items-center gap-16 font-opensans text-sm font-semibold">
                        <Link page='Home'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link page='Skills'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link page='Projects'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link page='Contact'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />

                        <a
                            className="bg-gradient-rainblue text-deep-blue block rounded-sm py-3 px-7 font-semibold
                                        hover:bg-blue hover:text-white transition duration-500"
                            onClick={() => setSelectedPage("contact")}
                            href={cv}
                            download={true}>
                            Download Cv
                        </a>

                    </div>
                ) : (<button className="rounded-full bg-blue"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}> <img src="./assets/menu-icon.svg" alt="menu-icon" /></button>)}

                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        <div className="flex justify-end  p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img src="./assets/close-icon.svg" alt="close-icon" />
                            </button>

                        </div>
                        <div className="flex flex-col items-center gap-10  text-2xl text-deep-blue">
                            <Link page='Home'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            <Link page='Skills'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            <Link page='Projects'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            <Link page='Contact'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />

                            <a
                                className="bg-gradient-rainblue text-deep-blue block rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                                onClick={() => setSelectedPage("contact")}
                                href={cv}
                                download={true}
                            >
                                Download Cv
                            </a>
                        </div>
                    </div>
                )}

            </div>

        </nav>
    )
}

export default Narbar
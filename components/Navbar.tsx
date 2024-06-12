import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
    return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <h1 className="font-bold text-2xl">
                Voya<span className="text-green-50">geur.</span>
            </h1>
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link key={link.key} href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>
        
        <div className="lg:flexCenter hidden">
            <Button title="Log in" icon={"/user.svg"} variant="btn_dark_green" type="button" />
        </div>

        <Image src="menu.svg" alt="Menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />
    </nav>
    )
}

export default Navbar
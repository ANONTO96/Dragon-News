import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";

const Home = () => {
    return (
        <div className="font-Poppins">
            <header>
                <Header></Header>
                <section className="w-[90%] lg:w-[80%] mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-[90%] lg:w-[80%] mx-auto">
            <Navbar></Navbar>
            </nav>
            <main className="w-[90%] lg:w-[80%] mx-auto my-5 md:grid md:grid-cols-12">
            <aside className="left md:col-span-3 md:pr-2"><LeftNavbar></LeftNavbar></aside>
            <section className="col-span-6"><Outlet></Outlet></section>
            <aside className="right md:col-span-3 md:pl-2"><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default Home;
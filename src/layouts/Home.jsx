import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";

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
            <main className="w-[90%] lg:w-[80%] mx-auto my-5 grid md:grid-cols-12">
            <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
            <section className="col-span-6">Dragon News Home</section>
            <aside className="right col-span-3">Login With</aside>
            </main>
        </div>
    );
};

export default Home;
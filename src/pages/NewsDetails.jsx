import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);

    const { image_url , title ,details, }= news;
    
    
    return (
        <div>
           <header>
            <Header></Header>
           </header>
           <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
            <section className="col-span-9">
                <h2 className="font-semibold mb-3">Dragon News</h2>
                <div className="p-3 border-[1px]">
                    <img className="" src={image_url} alt="" />
                    <h2 className="text-4xl font-bold py-5">{title}</h2>
                    <p  className="text-base py-5" >{details}</p>
                    <Link to={`/category/${news.category_id}`}  className="btn bg-[#D72050]  text-white text-2xl"><FaArrowLeft />All news in this category</Link>
                </div>
            </section>
            <aside className="col-span-3">
                <RightNav></RightNav>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;
import { information } from "../informations";

const Blog = () => {
  const articles = information.articles;
  return (
    <div className="w-screen max-w-[1536px] mt-16 flex flex-col justify-center items-center">
      {/* header */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-10 h-10 rounded-2xl bg-blue-500 bg-opacity-40 flex justify-center items-center">
          <i className="fa-solid fa-blog text-blue-500 text-2xl"></i>
        </div>
        <h2 className="font-morabba text-xl tracking-wide font-bold opacity-90 mt-2 lg:text-2xl">
          وبلاگ
        </h2>
      </div>
      <div className="w-full p-5 flex flex-col justify-center items-center gap-5">
        {articles.map((article, index) => {
          return (
            <div key={index} className="h-96 w-10/12 flex flex-col items-center border-2 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-1/3 overflow-hidden">
                <img src={require("../assets/article.png")} alt="USEO" className="hover:scale-125 transition-all duration-500" />
              </div>

              <div className="pt-3 flex flex-col justify-center items-center bg-[#f4e9ff] bg-opacity-40">
                <div className="w-8/12 rounded-3xl flex justify-center items-center p-4 py-3 h-3 bg-opacity-80 bg-[#F4E9FF] border">
                  <p className="font-iranYekan text-[10px] opacity-70">{article.date} / {article.subject}</p>
                </div>

                {/* title */}
                <h3 className="p-4 tracking-wide opacity-90 text-center font-morabba font-bold text-sm">{article.title}</h3>

                {/* description */}
                <p className="font-iranYekan text-xs px-2 opacity-60 text-center">{article.description}</p>

                {/* view more */}
                <div className="w-full h-10 mt-14 flex justify-between px-5">
                  <span className="font-bold text-lg text-[#B094CA]">&lt;</span>
                  <p className="font-morabba text-sm tracking-wider font-bold text-[#B094CA]">مشاهده بیشتر</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

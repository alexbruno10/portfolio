import Apresentation from "./Banner";
import Header from "./Header";
import Skills from "./Skills";

export default function Home() {
    return(
        <div className="w-auto ml-[8.625rem] mr-[8.625rem] mt-6">
            <Header />
            <Apresentation />
            <Skills/>
        </div>
    )
};

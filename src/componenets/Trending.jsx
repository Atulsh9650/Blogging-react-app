import { useContext } from "react";
import Blog from "./BLog";
import { Bloglist as Bloglistdata } from "../store/Blog-list-store";
import Messageshow from "./Messageshow";
import Loader from "./Loader";

function Trending() {
    const {bloglist,fetched}=useContext(Bloglistdata);
    return  ( 
        <div className="main-blogcontainer">
        {fetched && <Loader />}
        {!fetched && bloglist.length === 0 && <Messageshow/>}
        {!fetched && bloglist.map((blog)=>(
            <Blog key={blog.id} blog={blog}/>
        ))}
        </div>
     );;
}

export default Trending;
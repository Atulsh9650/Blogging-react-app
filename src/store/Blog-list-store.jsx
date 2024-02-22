import { createContext, useReducer,useState ,useEffect} from "react";


export const Bloglist=createContext({
    bloglist :[],
    addblog: () =>{},
    fetched:false,
    deleteblog : ()=>{},
});

const bloglistreducer =(currbloglist,action)=>{
    let newbloglist = currbloglist;
    if(action.type === "DELETE_POST"){
       newbloglist =currbloglist.filter(
        (blog) => blog.id !==action.payload.blogid
       );  
    }
    else if(action.type =="ADD_POST"){
        newbloglist = [action.payload, ...currbloglist];
    }
    else if(action.type =="ADD_POSTS"){
        newbloglist =action.payload.newmultipleposts ;
    }

   return newbloglist;
};

const Bloglistprovider = ({children})=>{

 const [bloglist,dispatchbloglist] =useReducer(bloglistreducer,[]);
 const [fetched,setfetched] = useState(false);   

 const deleteblog =(blogid)=>{
    dispatchbloglist({
       type:"DELETE_POST",
       payload:{
       blogid,
       },
    });
 };

 const addblog =(bloguserid,blogtitle,blogbody,blogreactions,blogtags)=>{ 
    dispatchbloglist({
        type:"ADD_POST",
        payload:{
            id: Date.now(),
            title: blogtitle,
            body: blogbody,
            reactions: blogreactions,
            userId: bloguserid,
            tags: blogtags,
        }
    });
 };

 const addblogs =(blogposts)=>{ 
    dispatchbloglist({
        type:"ADD_POSTS",
        payload:{
            newmultipleposts : blogposts,
        }
    });
 };

 useEffect(() =>{
        setfetched(true);
        const controller = new AbortController();
        const signal=controller.signal;

        fetch('https://dummyjson.com/posts',{ signal })
        .then((res) => res.json())
        .then((data) => {
            addblogs(data.posts)
            setfetched(false);
        });
        
         return () =>{
            controller.abort();
         }
        },[]);
return <Bloglist.Provider value={{bloglist,addblog,deleteblog,addblogs,fetched}}>
{children}
</Bloglist.Provider>
};


export  default Bloglistprovider;
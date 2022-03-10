import './Header.css';

const BlogHeader = (props) => {
    const {blogs=[]}= props;
    

    return (  
        <section className="blog-container">

            <h2 className="blog-name">Blog<div className="underline"><span></span></div></h2>

                
            <div className="blog-frames">
                {blogs.map((blog)=> (
                <a href={blog.link}>
                    <div className="blog"> 
                        <div className="image-blog">
                            <img src={blog.image} alt="Blog" />
                            <div className="updated-blog">
                    {console.log(blog)}

                                <span>{blog.statusUpdate}</span>
                                <span>{blog.date}</span>
                            </div>
                        </div>
                            <h4 className= "title-blog">{blog.title} </h4>
                            <p className="content-blog">{blog.content}</p>
                    </div>
                </a>


))}
            </div>
        </section>
    );
}
 
export default BlogHeader;  
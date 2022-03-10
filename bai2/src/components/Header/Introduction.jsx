import './Header.css';

const IntroHeader = (props) => {
    const {contents=[]}=props;
    return (
         <section className="blog-container">
            <h2 className="blog-name">Giới Thiệu<div className="underline"><span></span></div></h2>
            <div className="blog-frames">
            {contents.map((content)=>(
                    <div className="intro-container">
                        <div className="intro-imageStaff"><img src={content.imageStaff} alt="" /></div>
                        <h3>1. Lịch sử hình thành</h3>
                        <span className="intro-history">{content.history}</span>
                        <h3>2. Các Thành tựu</h3>
                        <span className="intro-achievement">{content.achievement}</span>
                        <h3>3. Định hướng phát triển</h3>
                        <div className="intro-image"><img src={content.image} alt="" /></div>
                        <span className="intro-develop">{content.develop}</span>
                         <h3>4. Điện tử Seven Cam kết</h3>
                        <span className="intro-promise">{content.promise}</span>
                    </div>
            ))}
            </div>
        </section>
      );
}
 
export default IntroHeader;
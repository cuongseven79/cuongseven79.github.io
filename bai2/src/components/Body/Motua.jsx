import { useState,useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const BepGas = (props) => {
  const { bepgas = [],slides = [] } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();   // Products
  const [indexImageInner, setIndexImageInner] = useState(0);            // index Image Inner

  // ------------------- Auto Slide-----------------------------------

  const [indexImageSlide, setIndexImageSlide] =  useState(0);
            useEffect(()=>{                                       
            const time= setTimeout(() => {    //set thời gian chạy. ở đây là 3000ms = 3s

                    setIndexImageSlide(indexImageSlide + 1); 
                    if (indexImageSlide == 3) {               // chổ này phải gán giới hạn là ĐỘ DÀI mới tối ưu
                        setIndexImageSlide(0)
                    }
            }, 3000);
                return () =>{
                  clearTimeout(time)         // khi dùng setTimeout Phải có Clear index lại ban đầu ( indexImageSlide = 0)
                }
                },[indexImageSlide]           // nếu useEffect có giá trị là nó cứ lặp lại
          );    
// --------------------------------------------------------------------

          const handleClickOpen = (television) => {
                // Display && Hide gallery Modal //
                setIsOpenModal(true);
                setSelectedProduct(television);
                setIndexImageInner(0);
          };
                  // NEXT
          const handleClickNext = () => {
            if (indexImageInner == (selectedProduct.images.length - 1)) {
              setIndexImageInner(selectedProduct.images.length - 1);
            } 
            else {
              setIndexImageInner((indexImageInner + 1));
            }
          };
                  // PREV
          const handleClickPrev = () => {
            if (indexImageInner > 0) {
              setIndexImageInner((indexImageInner - 1));
            } 
            else{
              setIndexImageInner(0);
            }
          };
                  // CLOSE
          const handleCloseModal = () => {
            setIsOpenModal(false);
          };
                  // Direction slide ImageInner
          const handleClickImageInner =(index) =>{
              setIndexImageInner(index)

          }
          const handleClickPrevSlide =(slide)=>{
              if (indexImageSlide == 0) {
                  setIndexImageSlide(slide.image.length - 1)
              }
              else{
                setIndexImageSlide(indexImageSlide - 1)

              }
          }
          const handleClickNextSlide =(slide)=>{
            if (indexImageSlide == slide.image.length -1) {
              setIndexImageSlide(0)
            }
            else{
            setIndexImageSlide(indexImageSlide + 1)
            }
          }
// ------------------------------------ START -------------------------------------
          return (
            <section>
              {/* -------- Home Slide---------------- */}

            {slides.map( (slide)=> (
              
            <div className="slider">
                  <div className="slide-direction">
                        <div className="direction slide-prev" onClick={()=>{handleClickPrevSlide(slide)}} ><FaChevronLeft/></div>
                        <div className="direction slide-next" onClick={()=>{handleClickNextSlide(slide)}} ><FaChevronRight/></div> 
                 </div>
                  <div className="slide-image">
                      <a href={slide.link[indexImageSlide]}>
                          <img src={slide.image[indexImageSlide]} alt="hinh anh"/>
                      </a>
                 </div>
                 <div className="slide-radio">
                        <div className={`slide1 radio-btn ${indexImageSlide==0 ? "active-radio" : ""}`} onClick={()=> setIndexImageSlide(0)}></div>
                        <div className={`slide2 radio-btn ${indexImageSlide==1 ? "active-radio" : ""}`} onClick={()=> setIndexImageSlide(1)}></div>
                        <div className={`slide3 radio-btn ${indexImageSlide==2 ? "active-radio" : ""}`} onClick={()=> setIndexImageSlide(2)}></div>
                        <div className={`slide4 radio-btn ${indexImageSlide==3 ? "active-radio" : ""}`} onClick={()=> setIndexImageSlide(3)}></div>
                </div>

            
            </div>
          ))}

              {/* -------- Home Product ---------------- */}

              <span className="home-header">Sản phẩm mới </span>
              <div className="home-body">
                {bepgas.map((television) => (
                  <div className="item" onClick={() => handleClickOpen(television)}>
                      <div className="image-item">
                          <img src={television.images[0]} alt="hinh TV" />
                      </div>
                      <div className="logo-guarantee-item">
                          <img
                            src="https://www.eyewearus.com/images/satisfaction-guarantee-seal-icon.jpg"
                            alt="logo bảo hành"
                          />
                      </div>
                      <div className="service-item">
                          <img
                            src="https://quamienbac.com/wp-content/uploads/2020/07/van-chuyen.png"
                            alt="icon-shipping"
                          />
                          <span>{television.service}</span>
                      </div>
                      <div className="name-price-item">
                          <p> {television.name}</p>
                          <h3> {television.price} </h3>
                          <span>{television.name}</span>
                      </div>

                  </div>
                  
                ))}
              </div>


              {/* -------  Show - Hide Modal  ---------------- */}
              <div className={`gallery ${isOpenModal ? "show" : ""}`} >
                      <div className="control close" onClick={handleCloseModal}><FaTimes/></div>
                      <div className="gallery-background"> 
                          <img 
                          src={selectedProduct?.images[indexImageInner]} 
                          alt=" Ảnh nền" 
                          />
                      </div>

                      <div className= {`control prev ${indexImageInner ? "" : "hide-direction"}`} onClick={handleClickPrev}><FaChevronLeft/> </div>
                      <div className= {`control next ${indexImageInner == selectedProduct?.images.length - 1 ? "hide-direction" : ""}`} onClick={handleClickNext}><FaChevronRight/> </div>
                      
                      <section className="swapper-image">
                          {selectedProduct?.images.map((image,index) => (
                            <div className={`image ${indexImageInner == index ? "item-selected" : ""}`}>
                              <img 
                                src={image} onClick ={()=>handleClickImageInner(index)}
                                
                                alt=" Ảnh chi tiết sản phẩm "
                              />
                            </div>
                          ))}
                      </section>
              </div>
    </section>
  );
};

export default BepGas;

    
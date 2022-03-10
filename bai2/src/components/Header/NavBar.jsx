import { useState } from "react";
import { FaBars, FaCaretDown, FaEnvelope, FaHome, FaMapMarkerAlt, FaPhoneVolume, FaSearch } from "react-icons/fa";
import { FaAmazon, FaArrowAltCircleRight, FaFacebook, FaRegEnvelope, FaTelegram, FaTimes, FaTwitter, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Header.css";

const NavBar = () => {


  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);

  const [isOpenLoginFrames, setIsOpenLoginFrames] = useState(false);
  const [isOpenRegisterFrames, setIsOpenRegisterFrames] = useState(false);

const handleCloseModal = ()=>{
    if (isOpenLoginFrames == true || isOpenRegisterFrames == true ) {
        setIsOpenLoginFrames(false);
        setIsOpenRegisterFrames(false);
    }
};
const handleOpenModal = () => {
  if (isOpenLoginFrames == true) {
    setIsOpenLoginFrames(false);
    setIsOpenRegisterFrames(true);
  } else if(isOpenRegisterFrames == true){
    setIsOpenRegisterFrames(false);
    setIsOpenLoginFrames(true);
  }
}
  
const formik = useFormik({
  initialValues: {
    userName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  },
  validationSchema: Yup.object({
    userName: Yup.string().required("Vui lòng nhập Tên người dùng").min(4, "Độ dài Tên người dùng phải từ 4 ký tự trở lên"),  //required() : thông báo lỗi. - min(): Tối thiểu 4 kí tự, thông báo lỗi khi <4 
    email: Yup.string().required("Vui lòng nhập Email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Địa chỉ email không hợp lệ. VD:abc@gmail.com"), //regex email address
    password: Yup.string().required("Vui lòng nhập Mật Khẩu").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Mật khẩu phải gồm ký tự (in hoa, thường và số). Độ dài Password phải từ 8 kí tự thường trở lên"), //regex pattern for password , //matches(//): định dạng form password (in hoa, in thường, số).
    confirmedPassword: Yup.string().required("Vui lòng nhập Mật Khẩu").oneOf([Yup.ref("password"), null], "Mật khẩu của bạn chưa trùng khớp"),    //oneOf() : so sánh 2 password phải trùng với nhau. //[Yup.ref()] : so sánh với "password".
  }),
  onSubmit: (values) => {
    console.log(values)
  }

});

    return (
    <section>
      {/* ---------------------------------- Header Bar------------------------------------------------------------------------------ */}
      <div className="first-bar">
              <div className="address">
                     <a href="https://www.google.com/maps/place/C%E1%BB%ADa+H%C3%A0ng+%C4%90i%E1%BB%87n+T%E1%BB%AD+K%C3%ADa/@9.7137158,104.9885006,13.89z/data=!4m19!1m13!4m12!1m4!2m2!1d104.8576!2d9.1783168!4e1!1m6!1m2!1s0x31a72d5d0356a0cf:0x88bb99a8380da2a2!2sdien+tu+kia!2m2!1d104.9667612!2d9.7163082!3m4!1s0x31a72d5d0356a0cf:0x88bb99a8380da2a2!8m2!3d9.7163082!4d104.9667612"><FaMapMarkerAlt/> Địa Chỉ: 77 Đường số 7,khu đô thị Phú Cường</a> 
                     <p className="icon-email"><a href="mailto:trangiacuong2018@gmail.com"><FaEnvelope/>  Email: trangiacuong2018@gmail.com</a>  </p>
             </div> 
                <div className="bar-title-first">
                    <p className="icon-home"><FaHome/></p>
                    <Link to="/"> Trang chủ </Link>
                    <Link to="/intro"> Giới Thiệu </Link>
                    <Link to="/blog"> Blog </Link>
                    <Link to="/service"> Dịch Vụ </Link>
                    {/* <Link to="/contact"> Liên Hệ </Link> */}
                </div>    
                <div className="hotline">
                        <p className="icon-call"><FaPhoneVolume/></p>
                        <div className="bar-title-word-first">
                          <span> Hotline: <a href="tel:+18009191" style={{color:"red"}}><b>18009191</b></a><b>(Miễn Phí)</b></span>
                            <p>Mua hàng - Góp ý - Bảo hành</p>
                        </div>
                        <div className="login-swapper">
                            <button onClick ={()=> {setIsOpenLoginFrames(true)}} >Đăng nhập</button>
                            <button onClick ={()=> {setIsOpenRegisterFrames(true)}}>Đăng ký</button>   
                        </div>
                </div>
                
      </div>   
      <section className="register-login-container">
          {/* --------------------- Login ----------------------------------- */}

          <div className={`login-frames ${isOpenLoginFrames ? "active" : ""}`}  >

          <div className="icon-close-login" onClick={handleCloseModal}>  <FaTimes /></div>
            <form className={`login-modal ${isOpenModalLogin ? "active" : ""}`}>    
              <div className="icon-login"><FaUser /></div>
              <h2 className="header-login">ĐĂNG NHẬP</h2>
              <div className="email-login">
                <h4>Email</h4>
                <input type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email của bạn" />
              </div>
              <div className="password-login">
                <h4>Mật khẩu</h4>
                <input type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Mật khẩu của bạn" />
                {/* {formik.errors.password &&  */}
                {/* //  <p>{formik.errors.password}</p>} */}
              </div>
              <button className="submit-login"
                type="button"
                onClick={formik.handleSubmit}>Đăng nhập
              </button>
              <span>Tôi chưa có tài khoản?</span>

              <div className="register-login" onClick={handleOpenModal} >Đăng ký ngay</div>

            </form>
      </div>
            {/* --------------------- Register ----------------------------------- */}
            <div className={`register-frames ${isOpenRegisterFrames ? "active" : ""}`} >

            <div className="icon-close-login" onClick={handleCloseModal}>  <FaTimes /></div>
            <form className={`register-modal ${isOpenModalRegister ? "active" :""}`}>
              <div className="icon-login"><FaUser /></div>
              <h2 className="header-register">ĐĂNG KÝ</h2>

              <div className="username-register">
                <h4>Tên người dùng</h4>
                <input type="text"
                  id="userName"
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  placeholder="Tên của bạn" />
                {formik.errors.userName &&
                  <p className="errorMessage">{formik.errors.userName}</p>}

              </div>
              <div className="email-register">
                <h4>Email</h4>
                <input type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email của bạn" />
                {formik.errors.email &&
                  <p className="errorMessage">{formik.errors.email}</p>}
              </div>
              <div className="password-register">
                <h4>Mật khẩu</h4>
                <input type="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Mật khẩu của bạn" />
                {formik.errors.password &&
                  <p className="errorMessage">{formik.errors.password}</p>}
              </div>
              <div className="password-confirm-register">
                <h4>Xác nhận mật khẩu</h4>
                <input type="password"
                  id="confirmedPassword"
                  name="confirmedPassword"
                  value={formik.values.confirmedPassword}
                  onChange={formik.handleChange}
                  placeholder="Nhập lại mật khẩu" />
                {formik.errors.confirmedPassword &&
                  <p className="errorMessage">{formik.errors.confirmedPassword}</p>}
              </div>
              <button className="submit-register"
                type="submit"
                onClick={formik.handleSubmit}>Tạo tài khoản
              </button>
              <label>Tôi đã có tài khoản !</label>
              <div className="login-register" onClick ={handleOpenModal}>Đăng nhập ngay </div>

            </form>
          </div>
      </section> 
{/* -------------------------------------------------- Body-Bar ---------------------------------------------------------------------------------------------------------------------------------------------- */}
                            
                    <div className="bar-logo">
                          <a href="https://nshopvn.com/  "> <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062014/screen_shot_2014-06-05_at_4.07.06_pm.png?itok=h-WEdw9j" alt="Logo số 7" /> </a>
                    </div>                  
                    <div className="bar-logo-background">
                        <a href="https://nshopvn.com/  "> <img src="https://nshopvn.com/img/banner/021721-banner-hoa-toc.jpg" alt="Logo số 7" /> </a>
                    </div>
                
      {/* ------------------------------------ Final Bar --------------------------------------------------------------------------- */}
      <div className="bar-final">
                          <div className="bar-title-second"> 
                            <span><FaBars/></span>

                            <p className="list-products"> DANH MỤC SẢN PHẨM <div className="icon-down"><FaCaretDown/></div>
                                    <div className="products">
                                                <Link to="/ti-vi"> TI VI </Link>
                                                <Link to="/bep-gas"> BẾP GAS </Link>
                                                <Link to="/cam-bien"> CẢM BIẾN </Link>
                                                <Link to="/ac-qui"> BÌNH - ẮC QUI </Link>
                                                <Link to="/motua"> MÁY BƠM NƯỚC </Link>
                                                <Link to="/thiet-bi-ngoai-vi"> THIẾT BỊ NGOẠI VI </Link>
                                                <Link to="thiet-bi-am-thanh"> THIẾT BỊ ÂM THANH </Link>
                                                <Link to="thiet-bi-chieu-sang"> THIẾT BỊ CHIẾU SÁNG </Link>
                                                <Link to="/thiet-bi-dan-dung">THIẾT BỊ ĐIỆN DÂN DỤNG </Link>
                                                <Link to="/phu-kien-dung-cu-dien"> PHỤ KIỆN, DỤNG CỤ ĐIỆN </Link>           
                                        </div>
                            </p>            
                            <p>KHUYẾN MÃI</p>
                            <p>CHẾ ĐỘ BẢO HÀNH</p>
                            <p>KINH NGHIỆM MUA HÀNG</p>
                        </div>

                        
                        <div className="bar-search"><FaSearch/>
                            <input type="text" placeholder="         Nhập từ khóa tìm kiếm" />  
                        </div>
                </div>  
{/* ---------------------------------------------- LOGIN------------------------------------------------------------------ */}
     

    </section>
  );
};
export default NavBar;

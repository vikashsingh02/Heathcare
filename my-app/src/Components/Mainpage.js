import "../Styles/Hero.css";
import Doctor from "../Assets/doctor-picture.png";
function Mainpage(){
    return (
        <div className="section-container ">
          <div className="hero-section">
            <div className="container">
              <div className="hero-sec">
            <div className="text-section">
              <p className="text-headline">❤️ Health comes first</p>
              <h2 className="text-title">
                Find your Doctor and make an Appointments
              </h2>
              <p className="text-descritpion">
                Talk to online doctors and get medical advice, online prescriptions,
                refills and medical notes within minutes. On-demand healthcare
                services at your fingertips.
              </p>
              <button
                className="text-appointment-btn"
                type="button"
               
              >
                 Book Appointment
              </button>
              <div className="text-stats">
                <div className="text-stats-container">
                  <p>145k+</p>
                  <p>Receive Patients</p>
                </div>
    
                <div className="text-stats-container">
                  <p>50+</p>
                  <p>Expert Doctors</p>
                </div>
    
                <div className="text-stats-container">
                  <p>10+</p>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
    
            <div className="hero-image-section">
              <img className="hero-image1" src={Doctor} alt="Doctor" />
            </div>
          </div>
          </div>
          </div>
        </div>
      );
}
export default Mainpage

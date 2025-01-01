import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
        <h1>
          job <span>tracking</span> app
        </h1>
        <p>
        Our job tracking app is designed to streamline your job search and career management. Whether you're applying for your first job, exploring new opportunities, or managing multiple applications, our intuitive platform helps you stay organized and on top of every step. Track applications, schedule interviews, set reminders, and monitor your progress—all in one place. Empowering you to land your dream job with confidence and ease!
        </p>
        <Link to='/register' className="btn register-link">
          Register
        </Link>
        <Link to='/login' className="btn register-link">
          Login / Demo User
        </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

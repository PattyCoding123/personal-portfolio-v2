import ContainerWrapper from "@/components/wrapper/container-wrapper";
import MotionWrapper from "@/components/wrapper/motion-wrapper";
import { Icons } from "@/components/icons";
export default function Footer() {
  return (
    <ContainerWrapper id="contact">
      <MotionWrapper className="app__footer">
        <h2 className="head-text">If you would like to contact me...</h2>
        <div className="app__footer-cards">
          <div className="app__footer-cards">
            <a target="_blank" rel="noopener noreferrer">
              <div className="app__footer-card">
                <Icons.file />
                <p className="p-text">Click to view résumé</p>
              </div>
            </a>

            <a href="mailto:pducusin123@gmail.com">
              <div className="app__footer-card">
                <Icons.mail />
                <p className="p-text">pducusin123@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/patrick-ducusin-879b25208/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="app__footer-card">
                <Icons.linkedin />
                <p className="p-text">My LinkedIn page</p>
              </div>
            </a>
          </div>
        </div>
      </MotionWrapper>
    </ContainerWrapper>
  );
}

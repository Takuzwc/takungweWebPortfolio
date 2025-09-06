import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/components/comp_contents/comp_contents_css/main_footer.css";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer_bar() {
  return (
    <div class="social-section">
      <div class="social-icons mt-8 flex gap-4 text-xl">
        <a
          href="https://linkedin.com"
          class="social-icon linkedin"
          target="_blank"
          aria-label="Connect on LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="fontAwesome_icons" />
        </a>
        <a
          href="https://wa.me"
          class="social-icon whatsapp"
          target="_blank"
          aria-label="Message on WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="fontAwesome_icons" />
        </a>
        <a
          href="https://github.com"
          class="social-icon github"
          target="_blank"
          aria-label="Follow on GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="fontAwesome_icons" />
        </a>
        <a
          href="https://discord.com"
          class="social-icon discord"
          target="_blank"
          aria-label="Join our Discord"
        >
          <FontAwesomeIcon icon={faDiscord} className="fontAwesome_icons" />
        </a>
      </div>

      <div className="copyrights text-sm">
        {" "}
        <FontAwesomeIcon icon={faCopyright} /> Takunda Harmish Ngwenya
      </div>
    </div>
  );
}

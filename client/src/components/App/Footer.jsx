import styles from "../../../style";
import logo from "../../assets/svg/pixecol.svg";
import { footerLinks, socialMedia } from "../../constantes/index";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full mt-40 mx-auto`}>
      <div className="flex-[1] flex flex-col justify-start mx-auto md:mr-10">
        <img
          src={logo}
          alt="pixeled"
          className="w-full md:w-[266px] h-auto object-contain mt-5 md:mr-40 mx-auto"
        />
        <p className={`${styles.paragraph} mt-4 mr-36 max-w-[312px] mx-auto`}>
          Una nueva forma de hacer los pagos fáciles, confiables y seguros.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 mx-auto">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px] mx-auto`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mx-auto">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4 mx-auto">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  } mx-auto`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-row md:mt-20 mx-auto">
        {socialMedia.map((social, index) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-4 md:ml-6 lg:ml-8 xl:ml-12 ${
              index !== socialMedia.length - 1 ? 'mb-0 md:mb-0' : ''
            } mx-auto`}
          >
            <img
              src={social.icon}
              alt={social.name}
              className={`w-[21px] h-[21px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] xl:w-[22px] xl:h-[22px] object-contain cursor-pointer`}
            />
          </a>
        ))}
      </div>
      
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] mx-auto">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black mx-auto">
        Copyright Ⓒ 2023 Pixeled. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;

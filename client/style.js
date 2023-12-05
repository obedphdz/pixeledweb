const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold md:text-[22px] text-[52px] text-gradient xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3: "font-poppins font-semibold xs:text-[22px] text-[52px] text-gradient3 xs:leading-[76.8px] leading-[66.8px] w-full",

    paragraph: "font-poppins font-700 text-black text-[16px] leading-[30.8px]",
    paragraph2: "font-poppins font-normal text-white text-[18px] leading-[30.8px]",
  
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-20 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    custom27inchClass: {
      /* Estilos específicos para pantallas de 27 pulgadas */
  
      boxWidth: "xl:max-w-[2560px] w-full", 
      heading2: "font-poppins font-semibold lg:text-[5vw] text-[52px] text-gradient lg:leading-[6vw] leading-[66.8px] w-full", 
      heading3: "font-poppins font-semibold lg:text-[5vw] text-[52px] text-gradient3 lg:leading-[6vw] leading-[66.8px] w-full", 
      paragraph: "font-poppins font-bolder text-black text-[2vw] leading-[3.6vw]", 
      paragraph2: "font-poppins font-normal text-white text-[2.2vw] leading-[3.6vw]",
  
    }  
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
  
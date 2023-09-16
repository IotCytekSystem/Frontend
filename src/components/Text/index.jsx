import React from "react";

const sizeClasses = {
  txtAveriaSansLibreBold1408: "font-averiasanslibre font-bold",
  txtPoppinsBold27: "font-bold font-poppins",
  txtPoppinsMedium12Gray80001: "font-medium font-poppins",
  txtPoppinsBold28: "font-bold font-poppins",
  txtMontserratMedium12: "font-medium font-montserrat",
  txtPoppinsLight12: "font-light font-poppins",
  txtMontserratMedium13: "font-medium font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtPoppinsBold21: "font-bold font-poppins",
  txtMontserratMedium8: "font-medium font-montserrat",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsBold14: "font-bold font-poppins",
  txtPoppinsMedium13: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtAveriaSerifLibreBold1126: "font-averiaseriflibre font-bold",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsMedium17: "font-medium font-poppins",
  txtPoppinsMedium12Gray500: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

import React from "react";

interface Props {
  children: React.ReactNode;
}

function BenefitsButton({ children }: Props) {
  const styles = "flex grow items-center justify-center font-bold text-benefitButton-dark bg-benefitButton-light border-2 border-buttonBorder rounded-md py-2 mb-2";
  
  return <div className={styles}>{children}</div>;
}

export default BenefitsButton;

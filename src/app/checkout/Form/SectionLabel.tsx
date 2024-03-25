import React from "react";

const SectionLabel = ({ label }: { label: string }) => {
  return (
    <p className="text-sm text-[#D87D4A] mt-10 mb-5 font-semibold tracking-widest">
      {label}
    </p>
  );
};

export default SectionLabel;

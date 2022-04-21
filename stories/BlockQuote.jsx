import React from "react";
import { AlliumProvider } from "@telus-uds/ds-allium";

import { BlockQuote as AlliumBlockQuote } from "@telus-uds/ds-allium";

const BlockQuote = ({
  textStyle = "Large",
  text = "Default TEST FOR BLOQUATE",
  link = "",
  linkHref = "",
  additionalInfo = "",
}) => {
  return (
    <AlliumProvider>
      <AlliumBlockQuote
        textStyle={textStyle.toLowerCase()}
        additionalInfo={additionalInfo}
        link={link}
        linkHref={linkHref}
      >
        {text}
      </AlliumBlockQuote>
    </AlliumProvider>
  );
};

export default BlockQuote;

import React from "react";

import Gauge from "./Gauge";

const URL = "https://www.bokus.com/bok/9789179691448/bedragarens-anatomi/";

interface SurveyProps {
  gauge: number;
}

export default function Result({ gauge }: SurveyProps) {
  return (
    <React.Fragment>
      <Gauge gauge={gauge} />

      <p>
        Bogusmätaren uppskattar sannolikheten att du kommit i kontakt med en
        bedragare. För att vara på den säkra sidan och lära dig mer om vilka
        psykologiska knep en bedragare använder - köp Bedragarens Anatomi, en
        handbok i konsten att avslöja svindlare och bluffmakare. Boken är unik i
        sitt slag och författaren är en av världens främsta experter inom
        området. Men skynda dig att beställa, det finns endast ett fåtal
        exemplar kvar!
      </p>

      <a className="App-link" href={URL} rel="noreferrer" target="_blank">
        Läs Bogus Operandi
      </a>
    </React.Fragment>
  );
}

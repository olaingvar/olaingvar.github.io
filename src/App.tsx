import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./App.css";

import Result from "./components/Result";
import Survey from "./components/Survey";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="App">
      <Container>{children}</Container>
    </div>
  );
}

export default function App() {
  const [finalScore, setFinalScore] = React.useState<number>();
  const [gauge, setGauge] = React.useState<number>();

  if (gauge === undefined) {
    return (
      <Layout>
        <header className="App-header">
          <h1>Har du kommit i kontakt med en bedragare?</h1>
          <Button
            color="primary"
            onClick={() => setGauge(0)}
            variant="outlined"
          >
            Starta Bogusmätaren
          </Button>
        </header>
      </Layout>
    );
  }

  if (finalScore) {
    return (
      <Layout>
        <header className="App-header">
          <Result gauge={gauge} />
        </header>
      </Layout>
    );
  }

  return (
    <Layout>
      <header className="App-header">
        <Survey
          gauge={gauge}
          onComplete={() => {
            setFinalScore(1);
          }}
          setGauge={setGauge}
        />
      </header>
    </Layout>
  );
}

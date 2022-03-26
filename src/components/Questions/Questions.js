import React from "react";
import "./Questions.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Questions = () => {
  return (
    <div className="my-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="question-header">
                    How React Works?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="answers-panel">
                  Answers
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="question-header">
                    What is the difference between Props and State?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="answers-panel">
                  Answers
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

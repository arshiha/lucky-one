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
                  One of the qualities of React is its Simplicity. It is core
                  JavaScript It also uses a special syntax called JSX Allows us
                  to write 100% HTML inside JavaScript. React is not just a web
                  application, The funny thing is that it also makes all the
                  nice mobile applications Goes.UseState: First we have the
                  functional component which does not support state. In other
                  words a functional component is a stateless component Noe with
                  Hooks we have the functional component but stateful it is
                  achieved by using useState.
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="question-header">
                    Difference between props And State
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="answers-panel">
                  <h4 className="style-text">Props:</h4>
                  <br /> 1. Props are read-only. from <br />
                  2. Props allow you to pass data one component to other
                  components as an argument.
                  <br />
                  3. Props can be accessed by the child component.
                  <br />
                  4. Props are used to communicate between components.
                  <br />
                  5. Props are external and controlled by whatever renders the
                  component.
                  <br />
                  <h4 className="style-text">State</h4>
                  1. State changes can be asynchronous.
                  <br />
                  2. State holds information about the components.
                  <br />
                  3. State cannot be accessed by child components.
                  <br />
                  4. States can be used for rendering dynamic changes with the
                  component.
                  <br />
                  5. The State is internal and controlled by the React Component
                  itself.
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

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
                  <p>
                    While developing client-side apps for Facebook, a group of
                    developers found that the (DOM) is slow. To speed up
                    production, React uses a virtual DOM, a JavaScript
                    implementation of a DOM tree. When reading or writing to the
                    DOM, it will use the virtual representation. After that, the
                    virtual DOM attempts to update the actual DOM in the most
                    efficient manner possible. React elements are simple objects
                    that can be easily created, unlike browser DOM elements. Due
                    to the speed of JavaScript, it is worth keeping a DOM tree
                    in React DOM for speeding up its manipulation. Due to its
                    design, React can also be used on the server using Node.js,
                    even though React is designed to be used in the browser.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="question-header">
                    What is the difference between Props and State?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="answers-panel">
                  <div>
                    <h4>Props</h4>
                    <hr />
                    <ol>
                      <li>Props are immutable</li>
                      <li>Props are read-only.</li>
                      <li>The child component has access to props.</li>
                      <li>Props make components reusable.</li>
                      <li>Props are used to communicate between components.</li>
                    </ol>
                    <h4>State</h4>
                    <hr />
                    <ol>
                      <li>State is mutable.</li>
                      <li>State changes can be asynchronous.</li>
                      <li>State cannot be accessed by child components.</li>
                      <li>State cannot make components reusable.</li>
                      <li>
                        States can be used to render the component's dynamic
                        changes.
                      </li>
                    </ol>
                  </div>
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

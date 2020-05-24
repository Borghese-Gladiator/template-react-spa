/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Container, Collapse, Button, CardBody, Card } from 'reactstrap';

const Summary = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <section id={props.id}>
      <Container>
        <h1 style={{textAlign:"center"}}>Summary</h1>
        <Card>
          <CardBody>
            Bleach follows the adventures of the hotheaded teenager Ichigo Kurosaki, who inherits his parents' destiny after he obtains the powers of a Soul Reaper (死神, Shinigami, literally 'Death God')—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki.
            <Collapse isOpen={isOpen}>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred
            nesciunt sapiente ea proident.
          </Collapse>
          </CardBody>
        </Card>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
            { 
              toggle ? 'More Info' : 'Less Info'
            }
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Summary;
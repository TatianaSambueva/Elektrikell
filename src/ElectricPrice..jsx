import { useState, useEffect } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./Body";
import Head from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveHour } from "./services/stateService";
import { setErrorMessage } from "./services/stateService";

function ElectricPrice() {
  console.log('ElectricPrice');

  const params = useParams();
  const dispatch = useDispatch();

  const [showSideBar, setShowSideBar] = useState(false);
  const [bestUntil, setBestUntil] = useState(0);

  const handleCloseSideBar = () => setShowSideBar(false);
  const handleOpenSideBar = () => setShowSideBar(true);


  useEffect(() => {
    if (params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);


  return (
    <Container>
      <Head
        handleOpenSideBar={handleOpenSideBar}
      />
      <Body
        setBestUntil={setBestUntil}
      />
      <Footer
        bestUntil={bestUntil}
      />
      <LeftSideBar
        show={showSideBar}
        handleClose={handleCloseSideBar}

      />
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
    </Container>
  );
}

export default ElectricPrice;

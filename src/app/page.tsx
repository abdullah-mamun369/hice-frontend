import { Button, ButtonGroup } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl">This is Home page</h1>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default HomePage;

import TrainingHero from "@/components/Ui/Trainingpage/TrainingHero/TrainingHero";
import TrainingVideo from "@/components/Ui/Trainingpage/TrainingVideo/TrainingVideo";
import { Box } from "@mui/material";

const trainingPage = () => {
  return (
    <Box>
      <TrainingHero />
      <TrainingVideo />
    </Box>
  );
};

export default trainingPage;

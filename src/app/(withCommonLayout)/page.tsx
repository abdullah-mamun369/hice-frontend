import CustomTabComponent from "@/components/Tabs/CustomTabComponent";
import HeroSection from "@/components/Ui/Homepage/HeroSection/HeroSection";

const page = () => {
  const tabs = [
    {
      label: "Footing",
      content: (
        <>
          <h2>Footing Content</h2>
          <p>This is the content for the Footing tab.</p>
        </>
      ),
    },
    {
      label: "Drainage",
      content: (
        <>
          <h2>Drainage Content</h2>
          <p>This is the content for the Drainage tab.</p>
        </>
      ),
    },
    {
      label: "Framing",
      content: (
        <>
          <h2>Framing Content</h2>
          <p>This is the content for the Framing tab.</p>
        </>
      ),
    },
  ];

  return (
    <>
      <HeroSection />
      {/* <CustomTabComponent tabs={tabs} sx={{}} /> */}
    </>
  );
};

export default page;

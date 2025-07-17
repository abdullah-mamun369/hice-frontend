import CustomTabComponent from "@/components/Tabs/CustomTabComponent";

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
    <div>
      This is the main page with common layout
      <CustomTabComponent tabs={tabs} sx={{ marginTop: 2 }} />
    </div>
  );
};

export default page;

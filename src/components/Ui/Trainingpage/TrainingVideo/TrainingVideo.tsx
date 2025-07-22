"use client";

import { Box, Container, Typography } from "@mui/material";
import { useGetAllTrainingVideosQuery } from "@/redux/api/trainingApi";

const TrainingVideo = () => {
  const { data: TrainingVideosData, isLoading: isTrainingVideosLoading } =
    useGetAllTrainingVideosQuery({});
  const trainingVideos = TrainingVideosData?.trainingVideos;

  return (
    <Container sx={{ pb: 6 }}>
      <Box>
        {isTrainingVideosLoading ? (
          <Typography>Loading videos...</Typography>
        ) : !trainingVideos || trainingVideos.length === 0 ? (
          <Typography>No videos available</Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {trainingVideos.map(
              (video: { _id: string; title: string; videoUrl: string }) => (
                <Box
                  key={video._id}
                  sx={{
                    flex: "1 1 30%",
                    minWidth: "250px",
                    maxWidth: "380px",
                    aspectRatio: "16/9",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={getYouTubeEmbedUrl(video.videoUrl)}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Box>
              )
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

// Helper function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.match(/(?:v=)([^&]+)/)?.[1] || url.split("/").pop();
  return `https://www.youtube.com/embed/${videoId}`;
};

export default TrainingVideo;

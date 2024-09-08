/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

const publicRuntimeConfig = {
    VIDEOS: {
      video1: "/Videos/video_1.mp4",
      video2: "/Videos/video_2.mp4",
  },
};

export  {publicRuntimeConfig};
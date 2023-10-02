import styled, { keyframes } from "styled-components";

const LoadingSkeleton = () => {
  return <LoadingSkeletonCircle />;
};

const spins = keyframes`
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
`;

const LoadingSkeletonCircle = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border: 15px solid rgba(165, 165, 165, 0.1);
  border-top: 15px solid rgba(165, 165, 165, 0.5);
  border-radius: 50%;
  animation: ${spins} 2s linear infinite;
`;

export default LoadingSkeleton;

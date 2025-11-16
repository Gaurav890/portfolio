import { useState, useEffect } from 'react';

interface UseAttentionTimerOptions {
  minDelay?: number; // Minimum delay in ms
  maxDelay?: number; // Maximum delay in ms
}

export function useAttentionTimer({
  minDelay = 15000, // 15 seconds
  maxDelay = 20000, // 20 seconds
}: UseAttentionTimerOptions = {}) {
  const [shouldShowAttention, setShouldShowAttention] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Random delay between min and max
    const delay = minDelay + Math.random() * (maxDelay - minDelay);

    const timer = setTimeout(() => {
      setShouldShowAttention(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [minDelay, maxDelay]);

  const dismissAttention = () => {
    setShouldShowAttention(false);
  };

  return {
    shouldShowAttention,
    dismissAttention,
  };
}

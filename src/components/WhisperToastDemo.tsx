"use client";

import { WhisperProvider, useWhisper } from "./WhisperToast";
import DriftButton from "./DriftButton";

function DemoTriggers() {
  const whisper = useWhisper();

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <DriftButton
        variant="primary"
        onClick={() =>
          whisper({
            title: "memory saved",
            message: "the fog will remember this for you.",
          })
        }
      >
        Whisper a Memory
      </DriftButton>
      <DriftButton
        variant="secondary"
        onClick={() =>
          whisper({
            variant: "stable",
            title: "connection stable",
            message: "the dreamer is still here.",
          })
        }
      >
        Stable
      </DriftButton>
      <DriftButton
        variant="secondary"
        onClick={() =>
          whisper({
            variant: "fading",
            title: "memory fading",
            message: "save it before the sunset moves on.",
          })
        }
      >
        Fading
      </DriftButton>
    </div>
  );
}

export default function WhisperToastDemo() {
  return (
    <WhisperProvider>
      <DemoTriggers />
    </WhisperProvider>
  );
}

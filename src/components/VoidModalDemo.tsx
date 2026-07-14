"use client";

import { useState } from "react";
import VoidModal from "./VoidModal";
import DriftButton from "./DriftButton";

export default function VoidModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DriftButton variant="primary" onClick={() => setOpen(true)}>
        Open the Void
      </DriftButton>

      <VoidModal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow="waking protocol"
        title="Leave this dream?"
        footer={
          <>
            <DriftButton variant="secondary" onClick={() => setOpen(false)}>
              Stay a little longer
            </DriftButton>
            <DriftButton variant="action" onClick={() => setOpen(false)}>
              Drift away
            </DriftButton>
          </>
        }
      >
        <p>
          The sunset outside this window has been paused for you. If you leave
          now, the fog will keep your place — but the colors may not be exactly
          the same when you return.
        </p>
      </VoidModal>
    </>
  );
}

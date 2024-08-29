"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Aquí se eliminaría la llamada a Sentry
    // Sentry.captureException(error);
    console.error(error); // Opcional: Puedes usar console.error para seguir registrando el error en la consola
  }, [error]);

  return (
    <html>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}

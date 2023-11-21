"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";

export default function LogoUpload() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  return (
    <>
      <h1 className="text-lg font-bold mb-4">Upload Your Logo and Check Out</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          const response = await fetch(
            `/api/logoupload?filename=${file.name}`,
            {
              method: "POST",
              body: file,
            }
          );

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
        }}
      >
        <input
          id="logo-upload"
          type="file"
          className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700
           file:disabled:opacity-50 file:disabled:pointer-events-none dark:file:bg-blue-500 dark:hover:file:bg-blue-400"
          name="file"
          ref={inputFileRef}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-5"
        >
          Upload
        </button>
      </form>
      {blob && (
        <>
          <h1 className="text-md font-bold mb-4 mt-3">
            Congrats! Your logo has been successfully uploaded! Please do not
            submit it again, and we will soon add your logo to our game after
            you check out. Thank you!
          </h1>
          <h1 className="text-md font-bold mb-4 mt-3">
            You logo url: <a href={blob.url}>{blob.url}</a>
          </h1>
        </>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";

export default function ApologyButtons() {
  const [open, setOpen] = useState(false);

  const handleYesClick = async () => {
    // Insert YES into Supabase
    const { data, error } = await supabase
      .from("Answers")
      .insert({ choice: "YES" });

      
    if (error) {
      console.error("Failed to insert:", error.message);
      toast.error("Failed to record your response");
    } else {
      console.log("Response recorded:", data);
      
    }

    setOpen(true);
  };

  const handleNoClick = () => {
    toast.error("This option can't be selected");
  };

  return (
    <>
      <div className="flex justify-between mx-auto w-full max-w-[350px] select-none">
        <Button
          className="p-2 w-[150px] font-bold bg-green-500 hover:bg-green-800 rounded-md"
          onClick={handleYesClick}
        >
          YES
        </Button>

        <Button
          className="p-2 w-[150px] font-bold bg-red-500 hover:bg-red-800 rounded-md"
          onClick={handleNoClick}
        >
          NO
        </Button>
      </div>

      {/* Full-screen modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-2xl p-4">
            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-red-500 text-4xl font-bold hover:text-red-600"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>

            {/* GIF content */}
            <img
              src="/nailong-sad.gif"
              alt="Apology GIF"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div>
              <h3 className="text-white text-xl text-center mt-4">
                Thanks, I’m really sorry, my lovey 💌
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

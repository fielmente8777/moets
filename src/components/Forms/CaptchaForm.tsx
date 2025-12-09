import React, { useState, useEffect } from "react";

interface formProps {
  isOpen?: boolean;
  onSuccess?: () => void;
  onClose?: () => void;
}

const CustomCaptchaForm = ({ isOpen, onSuccess }: formProps) => {
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");

  // Generate new CAPTCHA
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1: n1, num2: n2 });
    setCaptchaInput("");
    setError("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const correctAnswer = captcha.num1 + captcha.num2;

    if (parseInt(captchaInput) !== correctAnswer) {
      setError("Captcha incorrect. Please try again.");
      //   generateCaptcha();
      return;
    }

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop:blur-xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto p-4 border rounded bg-white"
        >
          <div className="flex justify-end">
            <span
              className="font-bold cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </span>
          </div>
          {/* <div className="flex flex-col gap-1">
        <label>Your Name</label>
        <input type="text" className="border p-2 rounded" required />
      </div> */}

          {/* CAPTCHA SECTION */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">
              Solve to verify you are human:
            </label>

            <div className="flex items-center gap-2 text-lg font-bold">
              <span>{captcha.num1}</span>
              <span>+</span>
              <span>{captcha.num2}</span>
              <span>=</span>
              <input
                type="number"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="border p-2 rounded w-full outline-none"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    )
  );
};

export default CustomCaptchaForm;

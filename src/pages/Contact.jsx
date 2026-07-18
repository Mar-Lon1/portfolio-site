import { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "", captcha: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (parseInt(formState.captcha) !== num1 + num2) {
      alert("Incorrect captcha answer. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/marlonarmah@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Contact from ${formState.name}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: "", email: "", message: "", captcha: "" });
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        // Fallback to native form submit if AJAX is rejected (e.g. unverified origin like new Vercel deployment)
        e.target.submit();
      }
    } catch (error) {
      console.error(error);
      // Fallback on CORS error
      e.target.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 z-10 flex flex-col justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Connect</span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto">
          Have a project in mind or just want to chat? Send me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-3xl p-8 shadow-2xl">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center border border-green-500/30 mb-2">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
            <p className="text-neutral-400">Thank you for reaching out. I'll be in touch soon.</p>
          </div>
        ) : (
          <form action="https://formsubmit.co/marlonarmah@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value={`New Portfolio Contact from ${formState.name}`} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-300 ml-1">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-neutral-500" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder-neutral-600"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-300 ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-neutral-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder-neutral-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-300 ml-1">Your Message</label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-neutral-500" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none placeholder-neutral-600"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="captcha" className="text-sm font-medium text-neutral-300 ml-1">
                Security Question: What is {num1} + {num2}?
              </label>
              <input
                type="text"
                id="captcha"
                required
                value={formState.captcha}
                onChange={(e) => setFormState({ ...formState, captcha: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder-neutral-600"
                placeholder="Your answer"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3.5 px-4 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;

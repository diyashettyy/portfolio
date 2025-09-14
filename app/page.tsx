"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2, Palette, Server, Database } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Diya Shetty</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#skills" className="hover:text-primary">Skills</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Hi, I'm <span className="text-primary">Diya</span>
          </motion.h1>
          <p className="text-xl mb-8">Computer Science Engineering Student | Aspiring Developer</p>
          <div className="space-x-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://drive.google.com/your-resume-link", "_blank")}
            >
              View Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          I'm a Computer Science Engineering student passionate about building efficient, scalable, and user-friendly applications.  
          Skilled in C, Java, HTML, CSS, and JavaScript, I'm exploring both frontend and backend development.  
          Currently working on projects involving AI and web technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Code2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <p>HTML, CSS, JavaScript, React, Tailwind CSS</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Server className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <p>Node.js, Express.js, Django (learning)</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Database className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Databases</h3>
                <p>MySQL, Firebase</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Forensic Report Generator</h3>
                <p className="mb-4">AI-powered forensic report generator to assist in digital investigations.</p>
                <Button variant="outline" onClick={() => window.open("https://github.com/diyashettyy", "_blank")}>View on GitHub</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Summarization Comparison</h3>
                <p className="mb-4">Implemented multiple models (GPT-2, T5, BART, Pegasus) with ROUGE evaluation.</p>
                <Button variant="outline" onClick={() => window.open("https://github.com/diyashettyy", "_blank")}>View on GitHub</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Contact
          </motion.h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-border rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border border-border rounded-lg" />
              <textarea placeholder="Your Message" rows={5} className="w-full p-3 border border-border rounded-lg"></textarea>
              <Button className="w-full bg-black hover:bg-black/90 text-white transform hover:scale-105 transition-all duration-300">
                Send Message
              </Button>
            </form>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="mailto:diyashetty145@gmail.com" className="hover:text-primary"><Mail className="w-6 h-6" /></a>
              <a href="https://github.com/diyashettyy" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Github className="w-6 h-6" /></a>
              <a href="https://linkedin.com/in/shetty-diya" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-border text-center">
        <p>© {new Date().getFullYear()} Diya Shetty. All rights reserved.</p>
      </footer>
    </div>
  );
}

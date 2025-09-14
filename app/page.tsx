"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, MapPin } from "lucide-react"

const TypingEffect = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return <span>{displayText}</span>
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Diya Shetty</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20"></div>
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypingEffect text="Hi, I'm Diya Shetty" speed={80} />
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-secondary mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            Computer Science Engineering Student
          </motion.p>

          <motion.p
            className="text-lg text-foreground mb-12 max-w-3xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            Skilled in C, Java, HTML, CSS, React, and JavaScript, with a strong foundation in Artificial Intelligence
            and its applications. Passionate about building dynamic, efficient, and user-friendly applications while
            exploring AI-driven solutions for real-world challenges.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300"
            >
              <a href="https://drive.google.com/file/d/1BHfFdkordI0eS4BXb1_ng2hj9TuUi6Yj/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A dedicated Computer Science student with a passion for artificial intelligence, machine learning, and
              creating impactful web applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-foreground leading-relaxed">
                Computer Science Engineering student at Mangalore Institute of Technology and Engineering (2026),
                skilled in C, Java, HTML, CSS, React, and JavaScript, with a strong foundation in Artificial
                Intelligence and its applications. Passionate about building dynamic, efficient, and user-friendly
                applications.
              </p>
              <p className="text-foreground leading-relaxed">
                Enthusiastic about problem-solving, continuous learning, and creating seamless digital experiences, with
                an adaptable and detail-oriented approach to contributing to innovative projects in the tech industry.
              </p>
            </motion.div>

            <motion.div
              className="bg-accent/10 p-8 rounded-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
              <div className="space-y-2">
                <p className="font-medium text-foreground">B.E., Computer Science & Engineering</p>
                <p className="text-foreground">Mangalore Institute of Technology and Engineering</p>
                <p className="text-muted-foreground">Expected Graduation: 2026</p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">Relevant Coursework:</p>
                  <p className="text-sm text-muted-foreground">
                    Data Structures, Algorithms, Database Management, AI, Machine Learning, Computer Networking, Cloud
                    Computing, UI/UX Design
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 bg-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Some of my recent work and contributions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Image Forgery Detection System",
                description:
                  "An advanced machine learning–driven system for detecting, classifying, and localizing image forgeries using CNNs and Error Level Analysis (ELA). Built with TensorFlow, Keras and FastAPI, featuring React.js frontend with Grad-CAM visualization support.",
                tech: ["TensorFlow", "Keras", "FastAPI", "React.js", "Next.js", "CNN", "ELA"],
                category: "AI/ML",
              },
              {
                title: "Sports Buddy",
                description:
                  "A full-stack web application that intelligently connects users with compatible sports partners based on shared interests, location, and availability. Features responsive design with React.js/Next.js frontend and Node.js/Express.js backend with MySQL and Firebase integration.",
                tech: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL", "Firebase"],
                category: "Web App",
              },
              {
                title: "Meditation App",
                description:
                  "A cross-platform meditation app designed to enhance mental well-being through personalized meditation plans and OpenAI-powered music recommendations. Built with React Native, Python FastAPI backend, hosted on AWS with CI/CD pipeline using GitHub Actions.",
                tech: ["React Native", "Python", "FastAPI", "AWS", "GitHub Actions", "Figma"],
                category: "Mobile App",
              },
              {
                title: "AI Driven Forensic Investigation",
                description:
                  "An intelligent AI-powered system for transcribing and summarizing forensic audio evidence using Whisper (ASR) for speech-to-text and fine-tuned BART model for abstractive summarization. Performance validated using ROUGE, BLEU, WER, and CER metrics.",
                tech: ["PyTorch", "TensorFlow", "FastAPI", "Whisper", "BART", "NLP"],
                category: "AI/ML",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-border h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {project.category}
                      </Badge>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-primary group-hover:text-secondary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills & Technologies Section */}
      <motion.section
        id="skills"
        className="py-20 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary">Programming Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "C", "JavaScript", "Python", "HTML", "CSS"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Frontend & Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary">Frontend & Mobile</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "React Native", "Next.js", "Tailwind CSS", "Responsive Design", "UI/UX Design"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </Card>
              </motion.div>

              {/* Backend & APIs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary">Backend & APIs</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "Django", "FastAPI", "MySQL", "Firebase", "REST APIs"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* AI & Machine Learning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary">AI & Machine Learning</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "TensorFlow",
                      "PyTorch",
                      "Keras",
                      "Hugging Face",
                      "NLTK",
                      "OpenAI Whisper",
                      "BART",
                      "Speech Recognition",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Cloud & DevOps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary">Cloud & DevOps</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "GitHub Actions", "CI/CD Pipelines", "Cloud Deployment", "Scalable Architecture"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </Card>
              </motion.div>

              {/* Tools & Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary">Tools & Design</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "WordPress", "Git", "GitHub", "VS Code", "Model Fine-Tuning", "API Development"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-20 bg-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
              together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-primary text-xl">Send me a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input placeholder="Name" className="bg-input border-border" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="bg-input border-border" />
                  </div>
                  <div>
                    <Textarea placeholder="Message" rows={5} className="bg-input border-border" />
                  </div>
                  <Button className="w-full bg-black hover:bg-black/90 text-white transform hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right side - Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Contact Information Cards */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>

                <Card className="p-4 border-border hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-full">
                      <Mail className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">diyashetty145@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-border hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-full">
                      <Phone className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 8277870600</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-border hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Mangalore, Karnataka</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Follow Me Section */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/shetty-diya/"
                    className="bg-accent p-3 rounded-full hover:bg-accent/80 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-accent-foreground" />
                  </a>
                  <a
                    href="https://github.com/diyashettyy"
                    className="bg-accent p-3 rounded-full hover:bg-accent/80 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-accent-foreground" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Connect with me on social media for updates on my latest projects and tech insights
                </p>
              </div>

              {/* Ready to start a project CTA */}
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Ready to start a project?</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Let's discuss your ideas and turn them into reality. I'm always excited to work on new challenges.
                </p>
                <Button
                  className="bg-black hover:bg-black/90 text-white transform hover:scale-105 transition-all duration-300"
                  onClick={() => (window.location.href = "mailto:diyashetty145@gmail.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me Directly
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-primary text-primary-foreground py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Name, Tagline, Social Media */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Diya Shetty</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Full Stack Developer passionate about creating beautiful, functional web applications that make a
                difference
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/shetty-diya/"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/diyashettyy"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:diyashetty145@gmail.com"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Right Column - Contact Info & CTA */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>diyashetty145@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 8277870600</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mangalore, Karnataka</span>
                </div>
              </div>
              <Button
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Let's Work Together
              </Button>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2025 Diya Shetty. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}


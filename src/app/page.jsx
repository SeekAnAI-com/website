"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faTimes, faImage, faLanguage, faCreditCard, faSpider, faEye, faCode, faBug, faCodeBranch, faCloud, faCheck, faClock, faMagnifyingGlass, faChevronLeft, faChevronRight, } from '@fortawesome/free-solid-svg-icons';

function MainComponent() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [randomTool, setRandomTool] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [autoSlideTimer, setAutoSlideTimer] = React.useState(null);
  const [scrollPosition, setScrollPosition] = React.useState({
    Development: 0,
    Productivity: 0,
    Programming: 0,
    ContentCreation: 0,
    Miscellaneous: 0,
    Mainstream: 0,
    Business: 0,
  });
  const [tools] = React.useState([
    {
      name: "ChatGPT",
      description: "Advanced conversational AI developed by OpenAI",
      category: "Mainstream",
      icon: "faComments",
      image: "/chatgpt.jpg",
      trending: true,
      isNew: true,
      editor_pick: true,
      link: "https://chat.openai.com/",
    },
    {
      name: "DeepSeek R1",
      description: "Efficient open-source AI model rivaling ChatGPT",
      category: "Mainstream",
      icon: "faRobot",
      image: "/deepseek.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://deepseek.ai/",
    },
    {
      name: "Jasper",
      description: "AI writing assistant for creating high-quality content",
      category: "Mainstream",
      icon: "faPenNib",
      image: "/jasper.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://www.jasper.ai/",
    },
    {
      name: "Copy.ai",
      description: "AI-powered tool for generating marketing copy",
      category: "Mainstream",
      icon: "faCopy",
      image: "/copyai.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://www.copy.ai/",
    },
    {
      name: "DALL·E 3",
      description: "AI system generating images from textual descriptions",
      category: "Mainstream",
      icon: "faImage",
      image: "/dalle3.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://openai.com/dall-e-3",
    },
    {
      name: "Midjourney",
      description: "AI tool for creating images from textual prompts",
      category: "Mainstream",
      icon: "faPalette",
      image: "/midjourney.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://www.midjourney.com/",
    },
    {
      name: "Grammarly",
      description: "AI-powered writing assistant for grammar and style",
      category: "Mainstream",
      icon: "faSpellCheck",
      image: "/grammarly.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://www.grammarly.com/",
    },
    {
      name: "Notion AI",
      description: "AI-enhanced productivity and note-taking application",
      category: "Mainstream",
      icon: "faTasks",
      image: "/notionai.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://www.notion.so/product/ai",
    },
    {
      name: "Descript",
      description: "AI-driven video and audio editing platform",
      category: "Mainstream",
      icon: "faVideo",
      image: "/descript.jpg",
      trending: true,
      isNew: true,
      editor_pick: true,
      link: "https://www.descript.com/",
    },
    {
      name: "Murf",
      description: "AI voice generator for creating realistic voiceovers",
      category: "Mainstream",
      icon: "faMicrophone",
      image: "/murf.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://murf.ai/",
    },
    {
      name: "SaneBox",
      description: "AI tool for email inbox management and prioritization",
      category: "Mainstream",
      icon: "faEnvelopeOpenText",
      image: "/sanebox.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://www.sanebox.com/",
    },
    {
      name: "Reclaim",
      description: "AI-powered scheduling assistant for time management",
      category: "Mainstream",
      icon: "faCalendarAlt",
      image: "/reclaim.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://reclaim.ai/",
    },
    {
      name: "Fireflies",
      description: "AI meeting assistant for transcription and note-taking",
      category: "Mainstream",
      icon: "faFileAudio",
      image: "/fireflies.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://fireflies.ai/",
    },
    {
      name: "Gamma",
      description: "AI tool for creating engaging presentations",
      category: "Mainstream",
      icon: "faChalkboardTeacher",
      image: "/gamma.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://gamma.app/",
    },
    {
      name: "ElevenLabs",
      description: "AI platform for generating lifelike synthetic voices",
      category: "Mainstream",
      icon: "faHeadphones",
      image: "/elevenlabs.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://elevenlabs.io/",
    },
    {
      name: "Suno",
      description: "AI tool for music and audio generation",
      category: "Mainstream",
      icon: "faMusic",
      image: "/suno.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://www.suno.ai/",
    },
    {
      name: "Tidio AI",
      description: "AI-powered customer service chatbot",
      category: "Mainstream",
      icon: "faHeadset",
      image: "/tidioai.jpg",
      trending: true,
      isNew: false,
      editor_pick: false,
      link: "https://www.tidio.com/",
    },
    {
      name: "Textio",
      description: "AI tool for enhancing recruitment and job postings",
      category: "Mainstream",
      icon: "faBriefcase",
      image: "/textio.jpg",
      trending: true,
      isNew: false,
      editor_pick: false,
      link: "https://textio.com/",
    },
    {
      name: "HubSpot Email Writer",
      description: "AI assistant for crafting effective marketing emails",
      category: "Mainstream",
      icon: "faEnvelope",
      image: "/hubspotemail.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://www.hubspot.com/",
    },
    {
      name: "Clay",
      description: "AI-driven sales enablement platform",
      category: "Mainstream",
      icon: "faChartLine",
      image: "/clay.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://www.clay.com/",
    },
    {
      name: "Replit",
      description: "Cloud-based IDE for collaborative coding",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://replit.com",
    },
    {
      name: "Cursor",
      description: "AI-powered code editor with pair programming features",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://cursor.so",
    },
    {
      name: "Lovable",
      description: "Platform for building and deploying AI models",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://lovable.dev",
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that suggests code in real-time",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://github.com/features/copilot",
    },
    {
      name: "Tabnine",
      description: "AI-powered code completion for faster development",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://tabnine.com",
    },
    {
      name: "Hugging Face",
      description: "Open-source platform for machine learning models",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://huggingface.co",
    },
    {
      name: "Amazon SageMaker",
      description: "Cloud service for building and deploying ML models",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://amazon.com/sagemaker",
    },
    {
      name: "Azure AI Services",
      description: "Microsoft's suite of AI tools and APIs",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://azure.microsoft.com/en-us/products/ai-services",
    },
    {
      name: "Codiga",
      description: "Code analysis and automated code fixes",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codiga.io",
    },
    {
      name: "Codeium",
      description: "Free AI-powered code completion tool",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codeium.com",
    },
    {
      name: "Steamship",
      description: "Framework for building and deploying AI applications",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://steamship.com",
    },
    {
      name: "Mutable AI",
      description: "AI tools for rapid prototyping and development",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://mutable.ai",
    },
    {
      name: "Snyk",
      description: "Developer security platform for code vulnerabilities",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://snyk.io",
    },
    {
      name: "Panda AI",
      description: "AI-driven cybersecurity solutions for enterprises",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://pandasecurity.com/enterprise/panda-ai",
    },
    {
      name: "Seek.ai",
      description: "Natural language interface for data analytics",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://seek.ai",
    },
    {
      name: "DataRobot",
      description: "Automated machine learning platform",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://datarobot.com",
    },
    {
      name: "Scale",
      description: "Data labeling and annotation platform for AI",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://scale.com",
    },
    {
      name: "Cohere",
      description: "NLP models for text understanding and generation",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://cohere.com",
    },
    {
      name: "Stability AI",
      description: "Open-source generative AI models",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://stability.ai",
    },
    {
      name: "Runway ML",
      description: "Creative toolkit for AI-powered media editing",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://runwayml.com",
    },
    {
      name: "Clarifai",
      description: "AI platform for computer vision and NLP",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://clarifai.com",
    },
    {
      name: "AssemblyAI",
      description: "Speech-to-text and audio analysis APIs",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://assemblyai.com",
    },
    {
      name: "UI.com",
      description: "Tools for user interface design and development",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://ui.com",
    },
    {
      name: "Akindo",
      description: "AI-driven workflow automation for developers",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://akindo.com",
    },
    {
      name: "DeepL",
      description: "Advanced AI-powered translation service",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://deepl.com",
    },
    {
      name: "OctoML",
      description: "Optimize and deploy machine learning models",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://octoml.ai",
    },
    {
      name: "Grit",
      description: "AI-powered code refactoring and maintenance",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://grit.io",
    },
    {
      name: "Pico",
      description: "AI tools for embedded systems development",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://pico.com",
    },
    {
      name: "Gretel",
      description: "Synthetic data generation and privacy toolkit",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://gretel.ai",
    },
    {
      name: "MonkeyLearn",
      description: "Text analysis and data extraction tools",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://monkeylearn.com",
    },
    {
      name: "Levity",
      description: "No-code AI workflow automation platform",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://levity.ai",
    },
    {
      name: "ProWritingAid",
      description: "AI-powered writing assistant and grammar checker",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://prowritingaid.com",
    },
    {
      name: "AI21 Labs",
      description: "Advanced NLP models for text generation",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://ai21.com",
    },
    {
      name: "Writer",
      description: "Full-stack content generation platform",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://writer.com",
    },
    {
      name: "Jasper",
      description: "AI content creation for marketing and SEO",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://jasper.ai",
    },
    {
      name: "Copy.ai",
      description: "Generate marketing copy and content with AI",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://copy.ai",
    },
    {
      name: "Pictory",
      description: "Create and edit videos using AI",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://pictory.ai",
    },
    {
      name: "Descript",
      description: "Video and podcast editing with AI-powered features",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://descript.com",
    },
    {
      name: "Synthesia",
      description: "AI video generation with virtual avatars",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://synthesia.io",
    },
    {
      name: "Soundraw",
      description: "AI-generated music and soundtracks",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://soundraw.io",
    },
    {
      name: "Vercel AI",
      description: "AI integrations for web development and deployment",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://vercel.com/ai",
    },
    {
      name: "MindsDB",
      description: "In-database machine learning platform",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://mindsdb.com",
    },
    {
      name: "Baseten",
      description: "Infrastructure for deploying ML models",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://baseten.co",
    },
    {
      name: "Fal.ai",
      description: "Real-time AI processing APIs",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://fal.ai",
    },
    {
      name: "Continue",
      description: "AI-powered developer tools for continuous workflow",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://continue.dev",
    },
    {
      name: "CodeSandbox AI",
      description: "Cloud development environment with AI features",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codesandbox.io/ai",
    },
    {
      name: "Testim",
      description: "AI-based test automation for web applications",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://testim.io",
    },
    {
      name: "CodeWP",
      description: "AI-powered WordPress code generation",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codewp.ai",
    },
    {
      name: "Mintlify",
      description: "AI-driven documentation generator for developers",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://mintlify.com",
    },
    {
      name: "Akiflow",
      description: "Calendar and task management integration",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://akiflow.com",
    },
    {
      name: "AudioPen",
      description: "Voice-to-text transcription tool",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://audiopen.ai",
    },
    {
      name: "Avoma",
      description: "AI meeting assistant and analytics",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://avoma.com",
    },
    {
      name: "Brain.fm",
      description: "Focus-enhancing music generator",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://brain.fm",
    },
    {
      name: "BrowseAI",
      description: "Web automation and data extraction",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://browse.ai",
    },
    {
      name: "Clockwise",
      description: "Calendar optimization for focus time",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://clockwisemail.com",
    },
    {
      name: "Consensus",
      description: "Research paper analysis and summarization",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://consensus.app",
    },
    {
      name: "DeepSheet",
      description: "AI-powered spreadsheet automation",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://deepsheet.io",
    },
    {
      name: "Dive",
      description: "Data analysis and visualization tool",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://dive.ooo",
    },
    {
      name: "Eightify",
      description: "YouTube content summarization",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://eightify.app",
    },
    {
      name: "Elicit",
      description: "Research paper discovery and analysis",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://elicit.org",
    },
    {
      name: "Ellie Email",
      description: "AI-powered email composition",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://ellieemail.com",
    },
    {
      name: "Fathom",
      description: "Meeting recorder and summarizer",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://fathom.video",
    },
    {
      name: "FlowClub",
      description: "Group focus sessions and accountability",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://flowclub.com",
    },
    {
      name: "Focus Bear",
      description: "Habit tracking and productivity coach",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://focusbear.io",
    },
    {
      name: "Focus@Will",
      description: "Productivity-focused music streaming",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://focusatwill.com",
    },
    {
      name: "Genei",
      description: "Research and document summarization",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://genei.io",
    },
    {
      name: "Glimmer",
      description: "Presentation creation assistant",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://glimmer.ai",
    },
    {
      name: "Jamie",
      description: "AI meeting notes assistant",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://jamie.ai",
    },
    {
      name: "Lateral",
      description: "Research data organization tool",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://lateral.io",
    },
    {
      name: "Magical",
      description: "Text expansion and automation",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://magical.ai",
    },
    {
      name: "Mem",
      description: "AI-powered knowledge management",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://mem.ai",
    },
    {
      name: "Microsoft Copilot",
      description: "AI assistant for Microsoft 365",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://microsoft.com/copilot",
    },
    {
      name: "Motion",
      description: "AI-powered calendar scheduling",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://motion.ai",
    },
    {
      name: "Notion",
      description: "All-in-one workspace platform",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://notion.so",
    },
    {
      name: "Otter.ai",
      description: "Voice meeting transcription service",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://otter.ai",
    },
    {
      name: "Plaud",
      description: "Voice memo transcription service",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://plaud.ai",
    },
    {
      name: "Recall",
      description: "Meeting recording and search",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://recall.ai",
    },
    {
      name: "Recapit",
      description: "Meeting summary generator",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://recapit.com",
    },
    {
      name: "Reflect",
      description: "Daily journaling and note-taking",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://reflect.app",
    },
    {
      name: "Rytr",
      description: "AI writing assistant",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://rytr.me",
    },
    {
      name: "SciSpace",
      description: "Research paper analysis tool",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://scispace.com",
    },
    {
      name: "Sembly",
      description: "Meeting transcription and insights",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://sembly.ai",
    },
    {
      name: "Shortwave",
      description: "AI-enhanced email client",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://shortwave.com",
    },
    {
      name: "Sider",
      description: "AI-powered browser assistant",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://sider.ai",
    },
    {
      name: "Simplified",
      description: "Content creation and design platform",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://simplified.com",
    },
    {
      name: "Snipd",
      description: "Podcast highlight extraction",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://snipd.com",
    },
    {
      name: "Supernotes",
      description: "Hierarchical note-taking system",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://supernotes.com",
    },
    {
      name: "Tactiq",
      description: "Real-time meeting transcription",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://tactiq.io",
    },
    {
      name: "Taskade",
      description: "Collaborative task management",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://taskade.com",
    },
    {
      name: "TaskHeat",
      description: "Visual task mapping tool",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://taskheat.com",
    },
    {
      name: "TimeHero",
      description: "AI-powered task scheduling",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://timehero.com",
    },
    {
      name: "TimeStripe",
      description: "Visual timeline planning tool",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://timestripe.com",
    },
    {
      name: "TinyWow",
      description: "Multipurpose productivity tools",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://tinywow.com",
    },
    {
      name: "Trevor",
      description: "AI task prioritization assistant",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://trevor.ai",
    },
    {
      name: "Upword",
      description: "AI-powered content summarization",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://upword.ai",
    },
    {
      name: "Whisper Memos",
      description: "Voice note organization tool",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://whispermemos.com",
    },
    {
      name: "Wordtune",
      description: "AI-powered writing editor",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://wordtune.com",
    },
    {
      name: "Zapier",
      description: "Workflow automation between apps",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://zapier.com",
    },
    {
      name: "Summarize.tech",
      description: "Video content summarization",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://summarize.tech",
    },
    {
      name: "Summari",
      description: "Article summarization tool",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://summari.com",
    },
    {
      name: "GitHub",
      description: "Code collaboration and version control",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://github.com",
    },
    {
      name: "Tabnine",
      description: "AI-powered code completion",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://tabnine.com",
    },
    {
      name: "Replit",
      description: "Online IDE and coding platform",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://replit.com",
    },
    {
      name: "Codeium",
      description: "AI-driven code acceleration",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codeium.com",
    },
    {
      name: "AWS",
      description: "Cloud computing services",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://aws.amazon.com",
    },
    {
      name: "Sourcegraph",
      description: "Universal code search and intelligence",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://sourcegraph.com",
    },
    {
      name: "Snyk",
      description: "Developer security platform",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://snyk.io",
    },
    {
      name: "Codacy",
      description: "Automated code quality checks",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codacy.com",
    },
    {
      name: "Code Climate",
      description: "Software quality metrics and monitoring",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codeclimate.com",
    },
    {
      name: "Mutable AI",
      description: "AI-powered code generation",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://mutable.ai",
    },
    {
      name: "Codeball AI",
      description: "Predictive code analysis",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codeball.ai",
    },
    {
      name: "Codiga",
      description: "Code analysis and snippets",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codiga.io",
    },
    {
      name: "CodeWP AI",
      description: "WordPress coding assistant",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codewp.ai",
    },
    {
      name: "AixCoder",
      description: "AI pair programmer",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://aixcoder.com",
    },
    {
      name: "Codium AI",
      description: "Test generation for code",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codium.ai",
    },
    {
      name: "CodeRabbit AI",
      description: "Code review automation",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://coderabbit.ai",
    },
    {
      name: "CodeScene",
      description: "Software analytics and visualization",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codescene.com",
    },
    {
      name: "CodeStream",
      description: "Collaboration for development teams",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codestream.com",
    },
    {
      name: "Figstack",
      description: "Code documentation made easy",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://figstack.com",
    },
    {
      name: "Stepsize",
      description: "Technical debt management",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://stepsize.com",
    },
    {
      name: "Sourcery AI",
      description: "Code refactoring assistant",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://sourcery.ai",
    },
    {
      name: "AskCodi",
      description: "Code generation and assistance",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://askcodi.com",
    },
    {
      name: "Programming Helper",
      description: "Coding assistance and tutorials",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://programminghelper.com",
    },
    {
      name: "CodePal AI",
      description: "AI coding companion",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codepal.ai",
    },
    {
      name: "CodeSnippets AI",
      description: "Smart code snippets library",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codesnippets.ai",
    },
    {
      name: "AI Helper Bot",
      description: "AI-powered development support",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://aihelperbot.com",
    },
    {
      name: "CodeSquire AI",
      description: "Data science code assistant",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codesquire.ai",
    },
    {
      name: "Phind",
      description: "AI search engine for developers",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://phind.com",
    },
    {
      name: "Salesforce",
      description: "CRM and enterprise cloud services",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://salesforce.com",
    },
    {
      name: "CodeGPT",
      description: "GPT-powered code generation",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codegpt.co",
    },
    {
      name: "CodeSage AI",
      description: "AI-driven code optimization",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codesage.ai",
    },
    {
      name: "CodeMate AI",
      description: "Pair programming with AI",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codemate.ai",
    },
    {
      name: "CodeOracle AI",
      description: "Code predictions and suggestions",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codeoracle.ai",
    },
    {
      name: "CodeSensei",
      description: "Learn coding with AI guidance",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codesensei.com",
    },
    {
      name: "CodeWhiz AI",
      description: "Rapid code prototyping tool",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codewhiz.ai",
    },
    {
      name: "CodePilot AI",
      description: "AI co-pilot for developers",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codepilot.ai",
    },
    {
      name: "CodeBuddy AI",
      description: "Real-time coding assistance",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codebuddy.ai",
    },
    {
      name: "CodeGenie AI",
      description: "Wish-based code generation",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codegenie.ai",
    },
    {
      name: "Blackbox AI",
      description: "AI code search and automation",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://blackbox.ai",
    },
    {
      name: "DeepSeek",
      description: "Advanced code search engine",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://deepseek.com",
    },
    {
      name: "CodeThreat",
      description: "Code vulnerability detection",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codethreat.com",
    },
    {
      name: "CodeFactor",
      description: "Automated code review",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codefactor.io",
    },
    {
      name: "Codebeat",
      description: "Code quality analytics",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codebeat.co",
    },
    {
      name: "CodeTriage",
      description: "Open-source issue management",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codetriage.com",
    },
    {
      name: "AllenAI",
      description: "AI research and tools",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://allenai.org",
    },
    {
      name: "OpenAI",
      description: "Advanced AI research platform",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://openai.com",
    },
    {
      name: "Hugging Face",
      description: "AI model repository and community",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://huggingface.co",
    },
    {
      name: "Code Ocean",
      description: "Computational research platform",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://codeocean.com",
    },
    {
      name: "Bito AI",
      description: "AI-powered code snippets",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://bito.ai",
    },
    {
      name: "Continue",
      description: "Continuous development tools",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://continue.dev",
    },
    {
      name: "Jasper",
      description: "AI content generation for marketers",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://jasper.ai",
    },
    {
      name: "Copy",
      description: "AI-powered copywriting tool",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://copy.ai",
    },
    {
      name: "Writesonic",
      description: "AI writing assistant for businesses",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://writesonic.com",
    },
    {
      name: "Anyword",
      description: "AI-powered copy optimization platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://anyword.com",
    },
    {
      name: "Rytr",
      description: "AI writing assistant for various content types",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://rytr.me",
    },
    {
      name: "Grammarly",
      description: "Writing enhancement and grammar checking",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://grammarly.com",
    },
    {
      name: "ProWritingAid",
      description: "Writing style and grammar checker",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://prowritingaid.com",
    },
    {
      name: "Quillbot",
      description: "AI-powered paraphrasing tool",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://quillbot.com",
    },
    {
      name: "Midjourney",
      description: "AI image generation platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://midjourney.com",
    },
    {
      name: "DALL-E",
      description: "AI image generation from text prompts",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://dalle.ai",
    },
    {
      name: "Stability AI",
      description: "Open-source AI art generation",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://stability.ai",
    },
    {
      name: "NightCafe",
      description: "AI art creation platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://nightcafe.studio",
    },
    {
      name: "Artbreeder",
      description: "Collaborative AI art creation",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://artbreeder.com",
    },
    {
      name: "Runway ML",
      description: "Creative AI tools for media production",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://runwayml.com",
    },
    {
      name: "Descript",
      description: "Audio/video editing with AI features",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://descript.com",
    },
    {
      name: "Pictory",
      description: "AI video creation from text",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://pictory.ai",
    },
    {
      name: "Synthesia",
      description: "AI video generation with avatars",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://synthesia.io",
    },
    {
      name: "Lumen5",
      description: "AI-powered video creation platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://lumen5.com",
    },
    {
      name: "InVideo",
      description: "Online video creation tool",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://invideo.io",
    },
    {
      name: "Murf",
      description: "AI voice generation platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://murf.ai",
    },
    {
      name: "Resemble AI",
      description: "AI voice cloning technology",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://resemble.ai",
    },
    {
      name: "LOVO",
      description: "AI voiceover and text-to-speech",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://lovo.ai",
    },
    {
      name: "PlayHT",
      description: "Text-to-speech and voice generation",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://play.ht",
    },
    {
      name: "Listnr",
      description: "AI voice generator and podcast tool",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://listnr.tech",
    },
    {
      name: "Speechify",
      description: "Text-to-speech conversion tool",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://speechify.com",
    },
    {
      name: "Surfer SEO",
      description: "SEO optimization and content planning",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://surferseo.com",
    },
    {
      name: "Clearscope",
      description: "Content optimization for SEO",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://clearscope.io",
    },
    {
      name: "MarketMuse",
      description: "AI content strategy and optimization",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://marketmuse.com",
    },
    {
      name: "Frase",
      description: "AI content research and writing",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://frase.io",
    },
    {
      name: "Outranking",
      description: "SEO content creation platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://outranking.io",
    },
    {
      name: "Buffer",
      description: "Social media management platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://buffer.com",
    },
    {
      name: "Hootsuite",
      description: "Social media scheduling and monitoring",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://hootsuite.com",
    },
    {
      name: "Later",
      description: "Social media content scheduler",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://later.com",
    },
    {
      name: "SocialBee",
      description: "Social media content management",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://socialbee.io",
    },
    {
      name: "Tailwind",
      description: "Social media and content scheduling",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://tailwindapp.com",
    },
    {
      name: "Notion",
      description: "All-in-one workspace for content planning",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://notion.so",
    },
    {
      name: "Canva",
      description: "Graphic design and visual content creation",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://canva.com",
    },
    {
      name: "Wordtune",
      description: "AI-powered writing assistant",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://wordtune.com",
    },
    {
      name: "Copyfolio",
      description: "Portfolio creation for copywriters",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://copyfolio.com",
    },
    {
      name: "Adobe Sensei",
      description: "AI-powered creative tools",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://adobe.com/sensei",
    },
    {
      name: "Designs AI",
      description: "AI-powered design tools suite",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://designs.ai",
    },
    {
      name: "Simplified",
      description: "All-in-one content creation platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://simplified.co",
    },
    {
      name: "Opus",
      description: "Video content optimization tool",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://opus.pro",
    },
    {
      name: "Vidnami",
      description: "Video creation and marketing platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://vidnami.com",
    },
    {
      name: "Pebblely",
      description: "AI-powered product photography",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://pebblely.com",
    },
    {
      name: "Predis",
      description: "AI social media content generator",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://predis.ai",
    },
    {
      name: "CapCut",
      description: "Video editing and content creation",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://capcut.com",
    },
    {
      name: "HeyGen",
      description: "AI video generation platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://heygen.com",
    },
    {
      name: "VEED",
      description: "Online video editing platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://veed.io",
    },
    {
      name: "VistaSocial",
      description: "Social media management platform",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://vistasocial.com",
    },
    {
      name: "This Person Does Not Exist",
      description: "Generates AI-created human faces",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://thispersondoesnotexist.com",
    },
    {
      name: "This Cat Does Not Exist",
      description: "Generates AI-created cat images",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://thiscatdoesnotexist.com",
    },
    {
      name: "Deep Dream Generator",
      description: "Create art using deep learning algorithms",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://deepdreamgenerator.com",
    },
    {
      name: "NightCafe Studio",
      description: "AI-powered art creation platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://nightcafe.studio",
    },
    {
      name: "Craiyon",
      description: "AI image generator from text prompts",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://craiyon.com",
    },
    {
      name: "QuickChat AI",
      description: "AI-powered chatbot platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://quickchat.ai",
    },
    {
      name: "Character AI",
      description: "Create and interact with AI characters",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://character.ai",
    },
    {
      name: "InferKit",
      description: "Advanced text generation API",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://inferkit.com",
    },
    {
      name: "Novel AI",
      description: "AI-assisted storytelling platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://novelai.net",
    },
    {
      name: "Boomy",
      description: "AI music creation tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://boomy.com",
    },
    {
      name: "Voicemod",
      description: "Real-time voice changer software",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://voicemod.net",
    },
    {
      name: "FakeYou",
      description: "AI voice synthesis platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://fakeyou.com",
    },
    {
      name: "Magenta",
      description: "AI music and art research tools",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://magenta.tensorflow.org",
    },
    {
      name: "Runway ML",
      description: "Creative toolkit for machine learning",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://runwayml.com",
    },
    {
      name: "Artbreeder",
      description: "Collaborative art generation platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://artbreeder.com",
    },
    {
      name: "GauGAN",
      description: "AI painting tool from NVIDIA",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://gaugan.org",
    },
    {
      name: "Obituary AI",
      description: "AI-generated obituary writing tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://obituaryai.com",
    },
    {
      name: "Joke API",
      description: "Database of AI-generated jokes",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://jokeapi.dev",
    },
    {
      name: "Hotpot AI",
      description: "AI-powered design assistant",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://hotpot.ai",
    },
    {
      name: "Writesonic",
      description: "AI writing assistant",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://writesonic.com",
    },
    {
      name: "Dream AI",
      description: "AI-powered image generation tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://dream.ai",
    },
    {
      name: "Lumen5",
      description: "AI video creation platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://lumen5.com",
    },
    {
      name: "Remove BG",
      description: "Automatic background removal tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://remove.bg",
    },
    {
      name: "PFPMaker",
      description: "AI profile picture generator",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://pfpmaker.com",
    },
    {
      name: "Deep Nostalgia",
      description: "Animate historical photos",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://deep-nostalgia.myheritage.com",
    },
    {
      name: "WOMBO Art",
      description: "AI-powered art creation app",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://app.wombo.art",
    },
    {
      name: "Voice AI",
      description: "Voice modification software",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://voice.ai",
    },
    {
      name: "Synthesia",
      description: "AI video generation platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://synthesia.io",
    },
    {
      name: "Cleanvoice AI",
      description: "Audio editing automation tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://cleanvoice.ai",
    },
    {
      name: "Poe",
      description: "AI chat platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://poe.com",
    },
    {
      name: "Starry AI",
      description: "AI art generation tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://starryai.com",
    },
    {
      name: "D-ID",
      description: "AI-powered digital identity protection",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://d-id.com",
    },
    {
      name: "SuperMeme AI",
      description: "AI meme generator",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://supermeme.ai",
    },
    {
      name: "ElevenLabs",
      description: "AI voice synthesis platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://elevenlabs.io",
    },
    {
      name: "Jenni AI",
      description: "AI writing assistant for academics",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://jenni.ai",
    },
    {
      name: "FlowGPT",
      description: "AI-powered writing tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://flowgpt.com",
    },
    {
      name: "Leonardo AI",
      description: "Creative AI toolkit",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://leonardo.ai",
    },
    {
      name: "Cutout Pro",
      description: "AI image editing tools",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://cutout.pro",
    },
    {
      name: "Soundraw",
      description: "AI music composition tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://soundraw.io",
    },
    {
      name: "Mubert",
      description: "AI-generated music streaming",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://mubert.com",
    },
    {
      name: "Podcastle AI",
      description: "AI podcast production tools",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://podcastle.ai",
    },
    {
      name: "Recraft AI",
      description: "AI design automation tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://recraft.ai",
    },
    {
      name: "Krisp AI",
      description: "AI-powered noise cancellation",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://krisp.ai",
    },
    {
      name: "Looka",
      description: "AI logo design platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://looka.com",
    },
    {
      name: "Fliki AI",
      description: "AI video creation tool",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://fliki.ai",
    },
    {
      name: "Pictory AI",
      description: "AI video editing platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://pictory.ai",
    },
    {
      name: "Designs AI",
      description: "AI-powered design suite",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://designs.ai",
    },
    {
      name: "Clipdrop",
      description: "AI image editing toolkit",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://clipdrop.co",
    },
    {
      name: "Tome",
      description: "AI presentation builder",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://tome.app",
    },
    {
      name: "Mirror",
      description: "Decentralized publishing platform",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://mirror.xyz",
    },
    {
      name: "Salesforce",
      description: "Customer relationship management platform",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://salesforce.com",
    },
    {
      name: "HubSpot",
      description: "Marketing, sales, and service software",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://hubspot.com",
    },
    {
      name: "ZoomInfo",
      description: "B2B contact database and intelligence",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://zoominfo.com",
    },
    {
      name: "Outreach",
      description: "Sales engagement platform",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://outreach.io",
    },
    {
      name: "Salesloft",
      description: "Sales engagement and productivity software",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://salesloft.com",
    },
    {
      name: "Pipedrive",
      description: "CRM and pipeline management",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://pipedrive.com",
    },
    {
      name: "Clearbit",
      description: "Data enrichment and API services",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://clearbit.com",
    },
    {
      name: "Hunter",
      description: "Email finding and verification tool",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://hunter.io",
    },
    {
      name: "Lusha",
      description: "Lead generation and contact database",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://lusha.com",
    },
    {
      name: "Leadfeeder",
      description: "Website visitor tracking for leads",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://leadfeeder.com",
    },
    {
      name: "Drift",
      description: "Conversational marketing platform",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://drift.com",
    },
    {
      name: "Intercom",
      description: "Customer messaging and support tools",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://intercom.com",
    },
    {
      name: "Mailchimp",
      description: "Email marketing and automation",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://mailchimp.com",
    },
    {
      name: "Gong",
      description: "Revenue intelligence and conversation analytics",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://gong.io",
    },
    {
      name: "Chorus",
      description: "Conversation intelligence for sales teams",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://chorus.ai",
    },
    {
      name: "Clari",
      description: "Revenue operations and forecasting",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://clari.com",
    },
    {
      name: "XANT",
      description: "Sales engagement and AI-powered insights",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://xant.ai",
    },
    {
      name: "Zoho",
      description: "Suite of business applications and CRM",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://zoho.com",
    },
    {
      name: "Freshworks",
      description: "CRM and customer engagement software",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://freshworks.com",
    },
    {
      name: "Yesware",
      description: "Email tracking and sales productivity",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://yesware.com",
    },
    {
      name: "Groove",
      description: "Sales engagement platform",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://groove.co",
    },
    {
      name: "Mixmax",
      description: "Email productivity and scheduling tools",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://mixmax.com",
    },
    {
      name: "Reply",
      description: "Sales automation and outreach platform",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://reply.io",
    },
    {
      name: "Cognism",
      description: "B2B data and compliance solutions",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://cognism.com",
    },
    {
      name: "Seamless",
      description: "AI-powered lead generation",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://seamless.ai",
    },
    {
      name: "UpLead",
      description: "B2B prospecting and contact database",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://uplead.com",
    },
    {
      name: "PhantomBuster",
      description: "Automation and scraping tools",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://phantombuster.com",
    },
    {
      name: "Snov",
      description: "Lead generation and email finder",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://snov.io",
    },
    {
      name: "Leadsquared",
      description: "Marketing automation and CRM",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://leadsquared.com",
    },
    {
      name: "AgileCRM",
      description: "CRM with marketing automation",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://agilecrm.com",
    },
    {
      name: "Copper",
      description: "CRM designed for Google Workspace",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://copper.com",
    },
    {
      name: "Nimble",
      description: "Social CRM and contact management",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://nimble.com",
    },
    {
      name: "Infer",
      description: "Predictive analytics for sales and marketing",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://infer.com",
    },
    {
      name: "Leadspace",
      description: "Customer data platform and analytics",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://leadspace.com",
    },
    {
      name: "6sense",
      description: "Account engagement and predictive analytics",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://6sense.com",
    },
    {
      name: "People",
      description: "Revenue intelligence and automation",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://people.ai",
    },
    {
      name: "Exceed",
      description: "Conversational AI for lead generation",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://exceed.ai",
    },
    {
      name: "Conversica",
      description: "AI-powered sales assistant",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://conversica.com",
    },
    {
      name: "Regie",
      description: "AI content generation for sales",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://regie.ai",
    },
    {
      name: "Lavender",
      description: "AI email coaching and assistance",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://lavender.ai",
    },
    {
      name: "Zoom",
      description: "AI meeting assistant and scheduling",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://zoom.ai",
    },
    {
      name: "User",
      description: "User engagement and marketing platform",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://user.com",
    },
    {
      name: "Autoklose",
      description: "Sales automation and lead generation",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://autoklose.com",
    },
    {
      name: "Growbots",
      description: "AI-driven outbound sales platform",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://growbots.com",
    },
    {
      name: "Albert",
      description: "AI-powered digital advertising",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://albert.ai",
    },
    {
      name: "Triger",
      description: "Workflow automation and integration",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://triger.io",
    },
    {
      name: "Veloxy",
      description: "Sales enablement and analytics",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://veloxy.io",
    },
    {
      name: "Salesmsg",
      description: "Business texting and communication",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://salesmsg.io",
    },
    {
      name: "Kixie",
      description: "Sales engagement and phone system",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://kixie.com",
    },
    {
      name: "Closely",
      description: "LinkedIn automation and lead generation",
      category: "Business",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://closely.ai",
    }
  ]);

  // Define isClient directly in the component
  const [isClient, setIsClient] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", link: "", purpose: "" });


  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const searchRef = React.useRef(null);
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);

  const handleRandomAI = () => {
    const randomIndex = Math.floor(Math.random() * tools.length);
    setRandomTool(tools[randomIndex]);
  };

  const handleHideRandomAI = () => {
    setRandomTool(null);
  };

  React.useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isPopupOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.link && formData.purpose) {
      const emailContent = `AI Name: ${formData.name}\nLink to website: ${formData.link}\nPurpose of AI: ${formData.purpose}`;
      window.location.href = `mailto:abubakar@advancedyoutube.com?subject=Request to Add AI&body=${encodeURIComponent(emailContent)}`;
      setIsPopupOpen(false);
      setFormData({ name: "", link: "", purpose: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };


  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const [showAllEditorPicks, setShowAllEditorPicks] = React.useState(false);
  const [showAllSearchResults, setShowAllSearchResults] = React.useState(false);
  const trendingTools = tools.filter((tool) => tool.trending);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    setAutoSlideTimer(timer);

    return () => {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
    };
  }, [currentSlide, isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
      setCurrentSlide((prev) =>
        prev === trendingTools.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
      setCurrentSlide((prev) =>
        prev === 0 ? trendingTools.length - 1 : prev - 1
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const searchResults =
    searchTerm.length >= 2 && isSearchFocused // Changed condition
      ? tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      : [];
  const displayedResults = showAllSearchResults
    ? searchResults
    : searchResults.slice(0, 5);
  const hasMoreResults = searchResults.length > 5;
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowAllSearchResults(false);
  };
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };
  const handleImageError = (e) => {
    e.target.src = "/placeholder.jpg";
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleScroll = (category, direction) => {
    if (!isClient) return;

    const itemWidth = 280;
    const gap = 24;
    const itemsToScroll = 2;
    const scrollAmount = (itemWidth + gap) * itemsToScroll;

    setScrollPosition((prev) => {
      const toolsInCategory = tools.filter((t) => t.category === category);
      const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
      const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
      const maxScroll = Math.max(0, (toolsInCategory.length - itemsPerView) * (itemWidth + gap));

      let nextScroll;
      if (direction === 'left') {
        nextScroll = Math.max(0, prev[category] - scrollAmount);
      } else {
        nextScroll = Math.min(maxScroll, prev[category] + scrollAmount);
      }

      return { ...prev, [category]: nextScroll };
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#121212] overflow-x-hidden flex flex-col">
      <nav className="w-full bg-[#ffffff08] sticky backdrop-blur-sm px-8 py-2 border-b border-[#ffffff15]">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5FFAC6] to-[#4DE6B4] rounded-full blur opacity-30"></div>
              <FontAwesomeIcon icon={faRobot} className="relative text-[#5FFAC6] text-2xl mr-3" />
            </div>
            <h1 className="text-3xl text-white font-orbitron bg-gradient-to-r from-[#ffffff] to-[#ffffff80] bg-clip-text text-transparent">
              Seek An AI
            </h1>
          </div>
          <button
            className="px-6 py-2 rounded-full bg-[#5FFAC6] text-black font-medium hover:bg-[#4DE6B4]"
            onClick={() => setIsPopupOpen(true)}
          >
            Request an AI
          </button>
        </div>
      </nav>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <div className="relative bg-black text-white rounded-2xl shadow-lg w-96 p-6 z-50">
            <button
              className="absolute top-4 right-4 text-[#5FFAC6] hover:text-white"
              onClick={() => setIsPopupOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="text-xl text-center text-[#5FFAC6] font-semibold mb-8">Request an AI</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm" htmlFor="name">AI Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#ffffff0a] border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#5FFAC6]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm" htmlFor="link">Link to Website</label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#ffffff0a] border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#5FFAC6]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm" htmlFor="purpose">Purpose of AI</label>
                <textarea
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="resize-none w-full px-4 py-2 rounded-lg bg-[#ffffff0a] border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#5FFAC6]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-full bg-[#5FFAC6] text-black font-medium hover:bg-[#4DE6B4]"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="w-full backdrop-blur-md px-8 py-4 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto flex justify-center">
          <div className="flex space-x-8 overflow-x-auto bg-[#0A0A0A80] px-6 py-2 rounded-full">
            {[
              "Productivity",
              "Mainstream",
              'Development',
              "Programming",
              "Content Creation",
              "Business",
              "Miscellaneous",
            ].map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[#ffffff80] hover:text-white transition-colors duration-300 font-roboto whitespace-nowrap px-4 py-2 hover:bg-[#ffffff15] rounded-full"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(95,250,198,0.15)]">
            <div className="relative w-full overflow-hidden h-[200px] rounded-2xl">
              <div
                className="absolute w-full h-full transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  filter: isTransitioning ? "brightness(0.8)" : "brightness(1)",
                }}
              >
                <div className="flex h-full">
                  {tools
                    .filter((tool) => tool.trending)
                    .map((tool, index) => (
                      <a
                        key={index}
                        href={`/tool/${tool.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="w-full flex-shrink-0 cursor-pointer"
                      >
                        <div className="relative h-full">
                          <img
                            src={tool.image || "/placeholder.jpg"}
                            alt={`${tool.name} interface preview`}
                            onError={handleImageError}
                            className="w-full h-full object-cover transform transition-transform duration-500"
                            style={{
                              transform:
                                currentSlide === index
                                  ? "scale(1.05)"
                                  : "scale(1)",
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.95)] via-[rgba(0,0,0,0.7)] to-transparent hover:via-[rgba(0,0,0,0.6)] transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-[40px] right-0 px-[72px] pb-8">
                            <div className="flex items-center gap-2 mb-3">
                              <span
                                className="inline-block px-3 py-1 text-xs rounded-lg bg-[#5FFAC6] text-black font-medium backdrop-blur-sm transform transition-all duration-500 opacity-90"
                                style={{
                                  transform: `translateY(${currentSlide === index ? "0" : "20px"
                                    })`,
                                  opacity: currentSlide === index ? 1 : 0,
                                }}
                              >
                                {tool.category}
                              </span>
                            </div>
                            <h3
                              className="text-white text-xl font-semibold font-roboto transform transition-all duration-500 mb-2"
                              style={{
                                transform: `translateY(${currentSlide === index ? "0" : "20px"
                                  })`,
                                opacity: currentSlide === index ? 1 : 0,
                              }}
                            >
                              {tool.name}
                            </h3>
                            <p
                              className="text-white/70 text-sm font-roboto line-clamp-2 transform transition-all duration-500"
                              style={{
                                transform: `translateY(${currentSlide === index ? "0" : "20px"
                                  })`,
                                opacity: currentSlide === index ? 1 : 0,
                              }}
                            >
                              {tool.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 z-20">
              {tools
                .filter((tool) => tool.trending)
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full cursor-pointer hover:scale-110 ${currentSlide === index
                      ? "w-[24px] h-[6px] bg-[#5FFAC6]"
                      : "w-[6px] h-[6px] bg-white/50 hover:bg-white/70"
                      }`}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="relative mb-16 max-w-2xl mx-auto">
          <div className="relative" ref={searchRef}>
            <input
              type="text"
              name="search"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              className="w-full h-16 pl-14 pr-4 rounded-2xl bg-[#ffffff0a] text-white text-lg border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#5FFAC6] focus:border-transparent font-roboto placeholder-[#ffffff40] transition-all duration-300 hover:bg-[#ffffff12] shadow-lg cursor-text"
              style={{
                position: "relative",
                zIndex: 49,
                pointerEvents: "auto",
              }}
              autoComplete="off"
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#5FFAC6] text-lg" />
            </div>
            {searchTerm.length >= 2 && isSearchFocused && (
              <div className="absolute w-full mt-2 bg-[#1A1A1A] rounded-xl overflow-hidden shadow-xl z-50 border border-[#ffffff15] max-h-[600px] overflow-y-auto">
                {searchResults.length === 0 ? (
                  <div className="px-6 py-4 text-[#ffffff80] font-roboto">
                    No result found
                  </div>
                ) : (
                  <>
                    {displayedResults.map((result, index) => (
                      <a
                        key={index}
                        href={`/tool/${result.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-6 py-4 hover:bg-[#ffffff0a] border-b border-[#ffffff15] last:border-b-0 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <div className="w-[40px] h-[40px] rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={result.image}
                              alt={result.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-3">
                            <h4 className="text-white font-roboto font-medium">
                              {result.name}
                            </h4>
                            <p className="text-[#ffffff80] text-sm font-roboto line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                    {hasMoreResults && !showAllSearchResults && (
                      <button
                        onClick={() => setShowAllSearchResults(true)}
                        className="w-full px-6 py-4 text-center text-[#5FFAC6] font-roboto hover:bg-[#ffffff0a] transition-colors duration-200 border-t border-[#ffffff15] font-medium"
                      >
                        View All Results
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5FFAC620] to-[#4DE6B410] rounded-2xl blur opacity-50"></div>
        </div>

        {/* Random AI Section */}
        <div className="text-center mb-16">
          <button
            onClick={handleRandomAI}
            className="px-6 py-2 rounded-full bg-[#5FFAC6] text-black font-medium hover:bg-[#4DE6B4] transition-all duration-300 font-roboto shadow-lg shadow-[#5FFAC640] hover:shadow-[#5FFAC660] hover:scale-105"
          >
            Show me a Random AI
          </button>

          {randomTool && (
            <div className="mt-8 max-w-md mx-auto">
              <a
                href={randomTool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-64 rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl block"
              >
                {randomTool.isNew && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                      NEW
                    </span>
                  </div>
                )}
                <img
                  src={randomTool.image || "/placeholder.jpg"}
                  alt={randomTool.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                    <h3 className="text-white text-lg font-semibold font-roboto">
                      {randomTool.name}
                    </h3>
                    <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                      {randomTool.description}
                    </p>
                    <span className="text-[#5FFAC6] text-sm font-medium">
                      {randomTool.category}
                    </span>
                  </div>
                </div>
              </a>
              <button
                onClick={handleHideRandomAI}
                className="mt-4 px-4 py-2 rounded-full bg-red-500/20 text-red-300 font-medium hover:bg-red-500/30 transition-all duration-300 font-roboto text-sm hover:scale-105"
              >
                Hide
              </button>
            </div>
          )}
        </div>

        <div className="mb-16">
          <h2 id="productivity" className="text-2xl text-white font-roboto mb-6">Productivity</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Productivity}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Productivity")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Productivity', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Productivity === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Productivity', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const ProductivityTools = tools.filter((t) => t.category === 'Productivity');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (ProductivityTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Productivity >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="development" className="text-2xl text-white font-roboto mb-6">Development</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Development}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Development")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Development', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Development === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Development', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const developmentTools = tools.filter((t) => t.category === 'Development');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (developmentTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Development >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl text-white font-roboto mb-6">
            Editor's Picks
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools
                .filter((tool) => tool.editor_pick)
                .slice(0, showAllEditorPicks ? 6 : 4)
                .map((tool, index) => (
                  <a
                    key={index}
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-[220px] rounded-t-2xl group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    {tool.isNew && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                          NEW
                        </span>
                      </div>
                    )}
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000cc] to-transparent group-hover:via-[#000000b3] transition-all duration-300 rounded-t-2xl">
                      <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <div className="mb-2">
                          <span className="text-[#5FFAC6] text-sm font-medium">
                            {tool.category}
                          </span>
                        </div>
                        <h3 className="text-white text-lg font-semibold font-roboto">
                          {tool.name}
                        </h3>
                        <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
            {!showAllEditorPicks &&
              tools.filter((t) => t.editor_pick).length > 4 && (
                <div className="relative mt-6">
                  <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-[#000000] via-[#000000cc] to-transparent pointer-events-none"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-30">
                    {tools
                      .filter((t) => t.editor_pick)
                      .slice(4, 6)
                      .map((tool, index) => (
                        <div
                          key={index}
                          className="relative h-[80px] rounded-t-2xl overflow-hidden"
                        >
                          <img
                            src={tool.image}
                            alt={tool.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllEditorPicks(!showAllEditorPicks)}
                className="px-6 py-2 rounded-full bg-[#ffffff15] text-white font-medium hover:bg-[#ffffff20] transition-all duration-300 font-roboto"
              >
                {showAllEditorPicks ? "View Less" : "Load More"}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="mainstream" className="text-2xl text-white font-roboto mb-6">Mainstream</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Mainstream}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Mainstream")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Mainstream', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Mainstream === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Mainstream', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const MainstreamTools = tools.filter((t) => t.category === 'Mainstream');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (MainstreamTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Mainstream >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="business" className="text-2xl text-white font-roboto mb-6">Business</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Business}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Business")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Business', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Business === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Business', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const BusinessTools = tools.filter((t) => t.category === 'Business');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (BusinessTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Business >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="programming" className="text-2xl text-white font-roboto mb-6">Programming</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Programming}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Programming")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Programming', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Programming === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Programming', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const ProgrammingTools = tools.filter((t) => t.category === 'Programming');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (ProgrammingTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Programming >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl text-white font-roboto mb-6">
            New Additions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {tools
              .filter((tool) => tool.isNew)
              .slice(0, 12)
              .map((tool, index) => (
                <a
                  key={index}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col w-full cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                    {tool.isNew && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                          NEW
                        </span>
                      </div>
                    )}
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                  <div className="mt-4 px-2">
                    <h3 className="text-white text-lg font-semibold font-roboto mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-[#ffffff80] text-sm font-roboto line-clamp-2">
                      {tool.category}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 id="content-creation" className="text-2xl text-white font-roboto mb-6">Content Creation</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.ContentCreation}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "ContentCreation")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('ContentCreation', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.ContentCreation === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('ContentCreation', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const ContentCreationTools = tools.filter((t) => t.category === 'ContentCreation');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (ContentCreationTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.ContentCreation >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="miscellaneous" className="text-2xl text-white font-roboto mb-6">Miscellaneous</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Miscellaneous}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Miscellaneous")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Miscellaneous', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Miscellaneous === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Miscellaneous', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const MiscellaneousTools = tools.filter((t) => t.category === 'Miscellaneous');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (MiscellaneousTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Miscellaneous >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#ffffff08] backdrop-blur-sm px-8 py-12 border-t border-[#ffffff15] mt-16">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center">
          <div className="flex items-center mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5FFAC6] to-[#4DE6B4] rounded-full blur opacity-30"></div>
              <FontAwesomeIcon icon={faRobot} className="relative text-[#5FFAC6] text-2xl mr-3" />

            </div>
            <h2 className="text-3xl text-white font-orbitron bg-gradient-to-r from-[#ffffff] to-[#ffffff80] bg-clip-text text-transparent">
              SeekAnAI
            </h2>
          </div>
          <div className="flex space-x-8 mb-4">
            <a
              href="/terms"
              className="text-[#ffffff80] hover:text-white transition-colors duration-300 font-roboto"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="text-[#ffffff80] hover:text-white transition-colors duration-300 font-roboto"
            >
              Privacy Policy
            </a>
          </div>
          <p className="text-sm text-[#ffffff60] font-roboto">
            SeekAnAI Copyright 2025. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
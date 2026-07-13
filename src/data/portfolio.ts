export type SocialLink = {
  label: string;
  href: string;
  display: string;
};

export type Project = {
  name: string;
  summary: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
};

export const profile = {
  name: 'Akshit Maheshwari',
  title: 'AI / ML Builder | Portfolio Engineer | Retrieval & Forecasting Systems',
  location: 'Delhi, India',
  tagline:
    'I build measurable AI systems, clean data pipelines, and polished product experiences that feel intentional, fast, and reliable.',
  about:
    'A motivated undergraduate in IT and Data Science with hands-on experience in AI/ML projects. I focus on making systems measurable and solvable, not just functional - from data preparation and embedding pipelines to ranking logic and retrieval evaluation.',
  stats: [
    { label: 'Degrees in progress', value: '2' },
    { label: 'Core project themes', value: '4' },
    { label: 'ML stack coverage', value: 'End-to-end' },
    { label: 'Focus', value: 'Reliable AI' }
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/AkshitMaheshwari',
      display: 'Github'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akshit-maheshwari-46b428272/',
      display: 'linkedin.com/in/akshit-maheshwari-46b428272/'
    },
    {
      label: 'Email',
      href: 'akshitmaheshwari06@gmail.com',
      display: 'akshitmaheshwari06@gmail.com'
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/akshitmaheshwari06/',
      display: 'leetcode.com/u/akshitmaheshwari06/'
    }
  ] satisfies SocialLink[],
  education: [
    {
      school: 'University School of Information, Communication and Technology',
      place: 'Delhi, India',
      degree: 'B.Tech - Information and Technology',
      period: 'September 2023 - August 2027'
    },
    {
      school: 'IIT Madras',
      place: 'Remote',
      degree: 'B.Sc. - Data Science and its Applications',
      period: 'September 2023 - July 2027'
    }
    // {
    //   school: 'Sant Gyaneshwar Model School',
    //   place: 'Delhi, India',
    //   degree: '12th Standard (CBSE) - 81.6%',
    //   period: 'May 2021 - April 2023'
    // }
  ],
  skills: [
    {
      category: 'Languages',
      items: ['C', 'C++', 'Python','JavaScript', 'SQL']
    },
    {
      category: 'ML / DL',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Imbalanced-learn', 'Scikit-learn', 'TensorFlow', 'OpenCV','PyTorch','Hugging Face', 'Transformers','GANs']
    },
    {
      category: 'Frameworks',
      items: ['Flask', 'FastAPI', 'LangChain', 'LangGraph','React']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Vector Stores', 'Neo4j']
    },
    {
      category: 'Tools',
      items: ['MLflow', 'Docker', 'Dagshub', 'Git', 'Jupyter Notebooks']
    },
    {
      category: 'Cloud',
      items: ['AWS S3', 'AWS ECR']
    }
  ],
  experience: [
    {
      title: 'ML Research Intern',
      organization: 'Under Prof. Ruchi Sherawat',
      period: 'June 2025 - August 2025',
      description:
        'Built a dental RGB image classification system for age and gender prediction. The project covered preprocessing, masking, training, evaluation, and model comparison to identify the strongest pretrained approach.'
    },
    {
      title: 'AI / ML Team Lead',
      organization: 'Google Developer Students Club, USICT',
      period: 'October 2024 - Present',
      description:
        'Leading AI / ML initiatives, mentoring project work, and shaping practical experimentation across student-driven builds.'
    }
  ],
  projects: [
    {
      name: 'Vision-Store',
      summary: 'Real-time AI store intelligence for retail behavior analysis.',
      description:
        'A containerized real-time Store Intelligence API built with YOLOv8 nano, OpenCV, and FastAPI to track customer entry and exit, separate staff from shoppers, monitor queues, map movement across zones, and surface purchase conversion insights instantly.',
      highlights: [
        'Real-time customer entry and exit tracking',
        'Queue monitoring, dwell time analysis, and zone-wise movement insights',
        'Containerized FastAPI analytics pipeline with YOLOv8 nano and Docker'
      ],
      tags: ['Computer Vision', 'YOLOv8', 'OpenCV', 'FastAPI', 'Docker'],
      githubUrl: 'https://github.com/AkshitMaheshwari/Vision-Store',
      liveUrl: 'https://github.com/AkshitMaheshwari/Vision-Store',
      image: '/projects/vision-store.png',
      imageAlt: 'Screenshot of the Vision-Store website'
    },
    {
      name: 'CallBased Product Retrieval Agent',
      summary: 'Voice calling product discovery for e-commerce.',
      description:
        'An AI-powered calling agent that helps customers find products through natural phone conversations. Built with Twilio, ElevenLabs, Groq LLM, and ChromaDB with semantic search plus metadata filters.',
      highlights: [
        'Voice conversation flow for product discovery',
        'Semantic retrieval with budget, brand, and category filters',
        'User preference memory for better follow-up turns'
      ],
      tags: ['Twilio', 'ElevenLabs', 'Groq', 'ChromaDB', 'Retrieval'],
      githubUrl: 'https://github.com/your-username/VoiceProductAgent',
      liveUrl: 'https://your-live-demo-url.com',
      image: '/projects/voice-agent.png',
      imageAlt: 'Screenshot of the CallBased Product Retrieval Agent website'
    },
    {
      name: 'Network Security Model',
      summary: 'Phishing and anomaly detection with MLOps structure.',
      description:
        'A network anomaly detection system using phishing data with modules for ingestion, transformation, training, logging, exception handling, and utility functions.',
      highlights: [
        'Structured MLOps pipeline organization',
        'Detection for phishing and network threats',
        'Repeatable workflow with cleaner maintenance boundaries'
      ],
      tags: ['MLOps', 'Phishing Detection', 'Pipeline Design'],
      githubUrl: 'https://github.com/your-username/Network-Security',
      liveUrl: 'https://your-live-demo-url.com',
      image: '/projects/network-security.png',
      imageAlt: 'Screenshot of the Network Security Model website'
    },
    {
      name: 'Theatre Audience Forecasting',
      summary: 'Multi-source time-series forecasting system.',
      description:
        'Forecasts per-theatre daily audience attendance using booking and POS data. Includes temporal, holiday, and behavioral features, with handling for zero-demand and closure days.',
      highlights: [
        'Cross-platform theatre ID alignment',
        'Seasonality and trend modeling',
        'Achieved 13.4 MAE'
      ],
      tags: ['Time Series', 'Forecasting', 'Gradient Boosting', 'Feature Engineering'],
      githubUrl: 'https://github.com/your-username/audience-forecasting',
      liveUrl: 'https://your-live-demo-url.com',
      image: '/projects/audience-forecasting.png',
      imageAlt: 'Screenshot of the Theatre Audience Forecasting website'
    },
    {
      name: 'Image Caption Generator',
      summary: 'Real-time captioning from RGB images.',
      description:
        'A caption generator trained on Flickr8k that combines DenseNet201 feature extraction with an LSTM language model to produce short natural-language captions.',
      highlights: [
        'DenseNet201 feature backbone',
        'LSTM-based caption generation',
        'Fast inference workflow for image-to-text output'
      ],
      tags: ['Computer Vision', 'DenseNet201', 'LSTM', 'NLP'],
      githubUrl: 'https://github.com/your-username/ImgCaption-Model',
      liveUrl: 'https://your-live-demo-url.com',
      image: '/projects/image-caption-generator.png',
      imageAlt: 'Screenshot of the Image Caption Generator website'
    },
    {
      name: 'Sentiment Analyzer',
      summary: 'Text sentiment classification with Transformers, LSTMs and GRU',
      description:
        'A custom Transformer-based model with an attention layer was implemented to capture contextual relationships within text sequences. The performance of the Transformer model was then compared with LSTM and GRU models by evaluating metrics.',
      highlights: [
        'Custom Transformer-based architecture with attention mechanism',
        'Comparison of Transformer, LSTM, and GRU models',
        'Evaluation of model performance using standard metrics'
      ],
      tags: ['NLP', 'Transformers', 'LSTM', 'GRU'],
      githubUrl: 'https://github.com/AkshitMaheshwari/Sentiment-Analyzer',
      liveUrl: 'https://sentiment-analyzer-rndz.onrender.com/',
      featured: true,
      image: '/projects/sentiment-analyzer.png',
      imageAlt: 'Screenshot of the Sentiment Analyzer website'
    }
  ] satisfies Project[]
};

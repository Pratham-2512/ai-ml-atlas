// Auto-generated from the original static index.html — do not hand-edit.
// Regenerate via the parse/gen scripts if the source list changes.

export type Resource = {
  id: string;
  href: string;
  title: string;
  desc: string;
};

export type Subgroup = {
  heading: string | null;
  items: Resource[];
};

export type Category = {
  id: string;
  stamp: string;
  title: string;
  count: number;
  subgroups: Subgroup[];
};

export const categories: Category[] = [
  {
    "id": "key-concepts",
    "stamp": "🧠",
    "title": "AI/ML Key Concepts",
    "count": 15,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://medium.com/@kodeinkgp/supervised-learning-a-comprehensive-guide-7032b34d5097",
            "title": "Supervised Learning",
            "desc": "Comprehensive guide to supervised learning algorithms and use cases",
            "id": "key-concepts-1"
          },
          {
            "href": "https://cloud.google.com/discover/what-is-unsupervised-learning",
            "title": "Unsupervised Learning",
            "desc": "Google Cloud's explainer on unsupervised learning techniques",
            "id": "key-concepts-2"
          },
          {
            "href": "https://spinningup.openai.com/en/latest/user/introduction.html",
            "title": "Reinforcement Learning",
            "desc": "OpenAI Spinning Up's introduction to reinforcement learning concepts",
            "id": "key-concepts-3"
          },
          {
            "href": "https://www.datacamp.com/tutorial/tutorial-deep-learning-tutorial",
            "title": "Deep Learning",
            "desc": "DataCamp tutorial covering deep learning fundamentals",
            "id": "key-concepts-4"
          },
          {
            "href": "https://medium.com/@ageitgey/natural-language-processing-is-fun-9a0bff37854e",
            "title": "Natural Language Processing (NLP)",
            "desc": "Beginner-friendly introduction to natural language processing",
            "id": "key-concepts-5"
          },
          {
            "href": "https://www.geeksforgeeks.org/computer-vision/",
            "title": "Computer Vision",
            "desc": "GeeksforGeeks overview of computer vision fundamentals",
            "id": "key-concepts-6"
          },
          {
            "href": "https://aws.amazon.com/what-is/gan/",
            "title": "Generative Adversarial Networks (GANs)",
            "desc": "AWS explainer on how generative adversarial networks work",
            "id": "key-concepts-7"
          },
          {
            "href": "https://scikit-learn.org/stable/modules/decomposition.html",
            "title": "Dimensionality Reduction",
            "desc": "Scikit-learn guide to PCA and other dimensionality reduction methods",
            "id": "key-concepts-8"
          },
          {
            "href": "https://scikit-learn.org/stable/modules/clustering.html",
            "title": "Clustering Algorithms",
            "desc": "Scikit-learn documentation on clustering algorithms",
            "id": "key-concepts-9"
          },
          {
            "href": "https://www.statlect.com/fundamentals-of-statistics/Bayesian-inference",
            "title": "Bayesian Inference",
            "desc": "StatLect lecture notes on Bayesian inference fundamentals",
            "id": "key-concepts-10"
          },
          {
            "href": "https://otexts.com/fpp3/",
            "title": "Time Series Analysis",
            "desc": "Free online textbook on forecasting and time series analysis",
            "id": "key-concepts-11"
          },
          {
            "href": "https://lilianweng.github.io/posts/2021-05-31-self-supervised-learning/",
            "title": "Self-Supervised Learning",
            "desc": "Lilian Weng's deep dive into self-supervised learning methods",
            "id": "key-concepts-12"
          }
        ]
      },
      {
        "heading": "Interactive visualizations",
        "items": [
          {
            "href": "https://mlu-explain.github.io",
            "title": "MLU-Explain",
            "desc": "Interactive visual explanations of core ML concepts",
            "id": "key-concepts-13"
          },
          {
            "href": "https://poloclub.github.io/cnn-explainer/",
            "title": "CNN Explainer",
            "desc": "In-browser interactive explainer for Convolutional Neural Networks",
            "id": "key-concepts-14"
          },
          {
            "href": "https://poloclub.github.io/transformer-explainer/",
            "title": "Transformer Explainer",
            "desc": "Interactive visualization of the Transformer architecture",
            "id": "key-concepts-15"
          }
        ]
      }
    ]
  },
  {
    "id": "building-blocks",
    "stamp": "🔧",
    "title": "AI/ML Building Blocks",
    "count": 12,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://gwthomas.github.io/docs/math4ml.pdf",
            "title": "Mathematics for Machine Learning (UC Berkeley)",
            "desc": "UC Berkeley lecture notes covering the math foundations for ML",
            "id": "building-blocks-1"
          },
          {
            "href": "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/",
            "title": "Linear Algebra for ML – MIT OpenCourseWare",
            "desc": "MIT's full linear algebra course, free and self-paced",
            "id": "building-blocks-2"
          },
          {
            "href": "https://www.youtube.com/watch?v=2MuDZIAzBMY&list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg",
            "title": "Probability & Statistics – Stanford",
            "desc": "Stanford lecture series on probability and statistics",
            "id": "building-blocks-3"
          },
          {
            "href": "https://www.khanacademy.org/math/multivariable-calculus",
            "title": "Calculus for Optimization – Khan Academy",
            "desc": "Khan Academy's free multivariable calculus course",
            "id": "building-blocks-4"
          },
          {
            "href": "https://www.coursera.org/learn/ai-python-for-beginners",
            "title": "Python for ML – Coursera",
            "desc": "Coursera course teaching Python fundamentals for AI",
            "id": "building-blocks-5"
          },
          {
            "href": "https://www.geeksforgeeks.org/optimization-algorithms-in-machine-learning/",
            "title": "Optimization Techniques",
            "desc": "Overview of optimization algorithms used in machine learning",
            "id": "building-blocks-6"
          },
          {
            "href": "https://www.geeksforgeeks.org/what-is-feature-engineering/",
            "title": "Data Preprocessing & Feature Engineering",
            "desc": "Guide to feature engineering and data preprocessing techniques",
            "id": "building-blocks-7"
          },
          {
            "href": "https://scikit-learn.org/stable/modules/model_evaluation.html",
            "title": "Model Evaluation & Metrics",
            "desc": "Scikit-learn documentation on model evaluation metrics",
            "id": "building-blocks-8"
          },
          {
            "href": "https://www.geeksforgeeks.org/regularization-in-machine-learning/",
            "title": "Regularization Techniques",
            "desc": "Overview of regularization methods used to prevent overfitting",
            "id": "building-blocks-9"
          },
          {
            "href": "https://www.datacamp.com/tutorial/loss-function-in-machine-learning",
            "title": "Loss Functions",
            "desc": "DataCamp tutorial on common loss functions in machine learning",
            "id": "building-blocks-10"
          },
          {
            "href": "https://ml-cheatsheet.readthedocs.io/en/latest/activation_functions.html",
            "title": "Activation Functions",
            "desc": "Cheat sheet covering neural network activation functions",
            "id": "building-blocks-11"
          },
          {
            "href": "https://www.geeksforgeeks.org/hyperparameter-tuning/",
            "title": "Hyperparameter Tuning",
            "desc": "Guide to hyperparameter tuning strategies",
            "id": "building-blocks-12"
          }
        ]
      }
    ]
  },
  {
    "id": "roadmap",
    "stamp": "🗺️",
    "title": "AI/ML Roadmap",
    "count": 24,
    "subgroups": [
      {
        "heading": "1. Learn Python and core libraries",
        "items": [
          {
            "href": "https://cs50.harvard.edu/python/2022/",
            "title": "Intro Python – Harvard CS50",
            "desc": "Harvard's CS50 introduction to Python programming",
            "id": "roadmap-1"
          },
          {
            "href": "https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python",
            "title": "Advanced Python – Harvard AI with Python",
            "desc": "Harvard's CS50 course on AI with Python",
            "id": "roadmap-2"
          },
          {
            "href": "https://numpy.org/devdocs/user/quickstart.html",
            "title": "NumPy Quickstart",
            "desc": "Official NumPy quickstart tutorial",
            "id": "roadmap-3"
          },
          {
            "href": "https://www.w3schools.com/python/pandas/default.asp",
            "title": "Pandas Tutorial",
            "desc": "W3Schools tutorial on the Pandas library",
            "id": "roadmap-4"
          },
          {
            "href": "https://matplotlib.org/stable/tutorials/index.html",
            "title": "Matplotlib Tutorials",
            "desc": "Official Matplotlib tutorials for data visualization",
            "id": "roadmap-5"
          },
          {
            "href": "https://scikit-learn.org/1.4/tutorial/index.html",
            "title": "Scikit-learn Tutorial",
            "desc": "Official scikit-learn getting-started tutorial",
            "id": "roadmap-6"
          }
        ]
      },
      {
        "heading": "2. Build a strong math foundation",
        "items": [
          {
            "href": "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/",
            "title": "Linear Algebra – MIT",
            "desc": "MIT's full linear algebra course, free and self-paced",
            "id": "roadmap-7"
          },
          {
            "href": "https://web.stanford.edu/class/stats116/syllabus.html",
            "title": "Probability & Statistics – Stanford",
            "desc": "Stanford course syllabus for probability and statistics",
            "id": "roadmap-8"
          },
          {
            "href": "https://www.khanacademy.org/math/multivariable-calculus",
            "title": "Multivariable Calculus – Khan Academy",
            "desc": "Khan Academy's free multivariable calculus course",
            "id": "roadmap-9"
          }
        ]
      },
      {
        "heading": "3. Learn ML fundamentals",
        "items": [
          {
            "href": "https://developers.google.com/machine-learning/crash-course",
            "title": "Google ML Crash Course",
            "desc": "Google's free crash course covering core ML concepts",
            "id": "roadmap-10"
          },
          {
            "href": "https://www.coursera.org/learn/machine-learning",
            "title": "Machine Learning by Andrew Ng",
            "desc": "Andrew Ng's foundational machine learning course on Coursera",
            "id": "roadmap-11"
          },
          {
            "href": "http://ema.cri-info.cm/wp-content/uploads/2019/07/2019BurkovTheHundred-pageMachineLearning.pdf",
            "title": "The Hundred-Page ML Book",
            "desc": "Concise book covering the essentials of machine learning",
            "id": "roadmap-12"
          }
        ]
      },
      {
        "heading": "4. Build practical experience",
        "items": [
          {
            "href": "https://course.fast.ai/",
            "title": "Practical Deep Learning for Coders – fast.ai",
            "desc": "fast.ai's hands-on deep learning course for coders",
            "id": "roadmap-13"
          },
          {
            "href": "https://www.coursera.org/learn/machine-learning-projects",
            "title": "Structured ML Projects – Coursera",
            "desc": "Andrew Ng's course on structuring machine learning projects",
            "id": "roadmap-14"
          },
          {
            "href": "https://www.youtube.com/watch?v=kCc8FmEb1nY",
            "title": "Build GPT from Scratch – Karpathy",
            "desc": "Andrej Karpathy's video walkthrough building a GPT model from scratch",
            "id": "roadmap-15"
          }
        ]
      },
      {
        "heading": "5. Specialize",
        "items": [
          {
            "href": "https://huggingface.co/learn/nlp-course/chapter1/1",
            "title": "NLP Course – Hugging Face",
            "desc": "Hugging Face's free course on NLP with transformers",
            "id": "roadmap-16"
          },
          {
            "href": "https://huggingface.co/learn/deep-rl-course/unit0/introduction",
            "title": "Deep RL Course – Hugging Face",
            "desc": "Hugging Face's free course on deep reinforcement learning",
            "id": "roadmap-17"
          },
          {
            "href": "https://www.kaggle.com/learn/computer-vision",
            "title": "Computer Vision – Kaggle",
            "desc": "Kaggle's hands-on computer vision mini-course",
            "id": "roadmap-18"
          },
          {
            "href": "https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PLSVEhWrZWDHQTBmWZufjxpw3s8sveJtnJ",
            "title": "Deep Learning – CS231n Stanford",
            "desc": "Stanford's CS231n course on CNNs for visual recognition",
            "id": "roadmap-19"
          },
          {
            "href": "https://pixelbank.dev",
            "title": "Computer Vision, LLM, VLM Courses – PixelBank",
            "desc": "PixelBank's course collection on CV, LLMs, and VLMs",
            "id": "roadmap-20"
          }
        ]
      },
      {
        "heading": "6. Learn MLOps",
        "items": [
          {
            "href": "https://ml-ops.org/",
            "title": "Intro to MLOps",
            "desc": "Introduction to MLOps principles and practices",
            "id": "roadmap-21"
          },
          {
            "href": "https://ml-ops.org/content/three-levels-of-ml-software",
            "title": "Three Levels of ML Software",
            "desc": "ml-ops.org's breakdown of the three levels of ML software maturity",
            "id": "roadmap-22"
          },
          {
            "href": "https://fullstackdeeplearning.com/course/2022/",
            "title": "Full Stack Deep Learning",
            "desc": "Course on building and deploying production ML systems",
            "id": "roadmap-23"
          }
        ]
      },
      {
        "heading": "7. Read research papers",
        "items": [
          {
            "href": "https://arxiv.org/",
            "title": "ArXiv",
            "desc": "Preprint server for ML and AI research",
            "id": "roadmap-24"
          }
        ]
      }
    ]
  },
  {
    "id": "genai-general",
    "stamp": "✨",
    "title": "Generative AI — General",
    "count": 11,
    "subgroups": [
      {
        "heading": "Recommended talks",
        "items": [
          {
            "href": "https://www.youtube.com/watch?v=EWvNQjAaOHw",
            "title": "Andrej Karpathy – How I Use LLMs",
            "desc": "Andrej Karpathy's walkthrough of his personal LLM workflow",
            "id": "genai-general-1"
          },
          {
            "href": "https://www.youtube.com/watch?v=zjkBMFhNj_g",
            "title": "Andrej Karpathy – Intro to Large Language Models (1hr)",
            "desc": "Andrej Karpathy's hour-long introduction to large language models",
            "id": "genai-general-2"
          }
        ]
      },
      {
        "heading": "Visual explainers",
        "items": [
          {
            "href": "http://jalammar.github.io/illustrated-transformer/",
            "title": "The Illustrated Transformer – Jay Alammar",
            "desc": "Definitive visual guide to the Transformer architecture",
            "id": "genai-general-3"
          },
          {
            "href": "http://bbycroft.net/llm",
            "title": "3D Visualization of LLMs – Brendan Bycroft",
            "desc": "Step-by-step 3D walkthrough of transformer execution",
            "id": "genai-general-4"
          }
        ]
      },
      {
        "heading": "Learning paths",
        "items": [
          {
            "href": "https://www.cloudskillsboost.google/paths/118",
            "title": "Beginner: Introduction to Generative AI",
            "desc": "Google Cloud Skills Boost path introducing generative AI fundamentals",
            "id": "genai-general-5"
          },
          {
            "href": "https://www.cloudskillsboost.google/paths/236",
            "title": "Intermediate: Gemini for Google Cloud",
            "desc": "Learning path on using Gemini within Google Cloud",
            "id": "genai-general-6"
          },
          {
            "href": "https://www.cloudskillsboost.google/paths/183",
            "title": "Advanced: Generative AI for Developers",
            "desc": "Advanced Google Cloud path on building with generative AI",
            "id": "genai-general-7"
          }
        ]
      },
      {
        "heading": "Coursera courses",
        "items": [
          {
            "href": "https://www.coursera.org/learn/genai-for-executives-and-business-leaders-an-introduction",
            "title": "GenAI for Executives & Business Leaders: An Introduction",
            "desc": "Coursera course introducing generative AI concepts for business leaders",
            "id": "genai-general-8"
          },
          {
            "href": "https://www.coursera.org/learn/genai-for-execs-and-business-leaders-integration-strategy",
            "title": "GenAI for Execs & Business Leaders: Integration Strategy",
            "desc": "Coursera course on integrating generative AI into business strategy",
            "id": "genai-general-9"
          },
          {
            "href": "https://www.coursera.org/learn/genai-for-product-rd-teams",
            "title": "GenAI for Product R&D Teams",
            "desc": "Coursera course on applying generative AI in product R&D",
            "id": "genai-general-10"
          },
          {
            "href": "https://www.coursera.org/learn/genai-for-product-managers",
            "title": "GenAI for Product Managers",
            "desc": "Coursera course on generative AI for product management",
            "id": "genai-general-11"
          }
        ]
      }
    ]
  },
  {
    "id": "genai-advanced",
    "stamp": "🚀",
    "title": "Generative AI — Advanced",
    "count": 6,
    "subgroups": [
      {
        "heading": "Gemini",
        "items": [
          {
            "href": "https://www.deeplearning.ai/short-courses/large-multimodal-model-prompting-with-gemini/",
            "title": "Large Multimodal Model Prompting with Gemini – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on prompting Gemini's multimodal capabilities",
            "id": "genai-advanced-1"
          },
          {
            "href": "https://www.coursera.org/learn/gemini-for-application-developers",
            "title": "Gemini for Application Developers – Coursera",
            "desc": "Coursera course on building applications with Gemini",
            "id": "genai-advanced-2"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/gemini-cli-code-and-create-with-an-open-source-agent/",
            "title": "Gemini CLI: Code & Create with an Open-Source Agent",
            "desc": "DeepLearning.AI course on using the open-source Gemini CLI agent",
            "id": "genai-advanced-3"
          }
        ]
      },
      {
        "heading": "Google ADK",
        "items": [
          {
            "href": "https://learn.deeplearning.ai/courses/building-live-voice-agents-with-googles-adk/information",
            "title": "Building Live Voice Agents with Google's ADK – DeepLearning.AI",
            "desc": "DeepLearning.AI course on building live voice agents with Google's Agent Development Kit",
            "id": "genai-advanced-4"
          },
          {
            "href": "https://www.coursera.org/learn/understand-google-cloud-agents",
            "title": "Understand Google Cloud Agents – Coursera",
            "desc": "Coursera course explaining Google Cloud's agent-building blocks",
            "id": "genai-advanced-5"
          }
        ]
      },
      {
        "heading": "Model Context Protocol (MCP)",
        "items": [
          {
            "href": "https://www.coursera.org/learn/intro-to-model-context-protocol-mcp",
            "title": "Intro to Model Context Protocol (MCP) – Coursera (Scrimba)",
            "desc": "Scrimba course on Coursera introducing the Model Context Protocol",
            "id": "genai-advanced-6"
          }
        ]
      }
    ]
  },
  {
    "id": "prompt-engineering",
    "stamp": "💬",
    "title": "Prompt Engineering",
    "count": 10,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.promptingguide.ai/",
            "title": "Prompt Engineering Guide",
            "desc": "Comprehensive guide to prompt engineering techniques",
            "id": "prompt-engineering-1"
          },
          {
            "href": "https://platform.openai.com/docs/guides/prompt-engineering",
            "title": "Prompt Engineering – OpenAI API",
            "desc": "OpenAI's official guide to prompt engineering techniques",
            "id": "prompt-engineering-2"
          },
          {
            "href": "https://developers.openai.com/api/docs/guides/prompt-engineering",
            "title": "Prompt Engineering – OpenAI Developer Docs",
            "desc": "Official OpenAI developer documentation on prompt engineering best practices",
            "id": "prompt-engineering-3"
          },
          {
            "href": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
            "title": "Prompt Engineering Overview – Anthropic",
            "desc": "Official Anthropic guide to prompt engineering for Claude",
            "id": "prompt-engineering-4"
          },
          {
            "href": "https://code.claude.com/docs/en/prompt-library",
            "title": "Claude Code Prompt Library",
            "desc": "Copy-paste prompt examples for Claude Code, tagged by task and role",
            "id": "prompt-engineering-5"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
            "title": "ChatGPT Prompt Engineering for Developers – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on prompt engineering with ChatGPT",
            "id": "prompt-engineering-6"
          },
          {
            "href": "https://grow.google/prompting-essentials/",
            "title": "Google Prompting Essentials",
            "desc": "Google's free course on prompting essentials",
            "id": "prompt-engineering-7"
          },
          {
            "href": "https://arxiv.org/abs/2406.06608",
            "title": "The Prompt Report: A Systematic Survey of Prompting Techniques",
            "desc": "Comprehensive survey of 58 LLM prompting techniques with a unified taxonomy and vocabulary",
            "id": "prompt-engineering-8"
          },
          {
            "href": "https://github.com/anthropics/prompt-eng-interactive-tutorial",
            "title": "Anthropic Prompt Engineering Interactive Tutorial",
            "desc": "Hands-on Jupyter notebook tutorial covering prompt engineering techniques for Claude",
            "id": "prompt-engineering-9"
          },
          {
            "href": "https://platform.openai.com/tokenizer",
            "title": "OpenAI Tokenizer",
            "desc": "Interactive tool to visualize how text is tokenized and count tokens for OpenAI models",
            "id": "prompt-engineering-10"
          }
        ]
      }
    ]
  },
  {
    "id": "rag",
    "stamp": "🔎",
    "title": "RAG (Retrieval-Augmented Generation)",
    "count": 3,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/",
            "title": "Building and Evaluating Advanced RAG Applications – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building and evaluating RAG systems",
            "id": "rag-1"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/knowledge-graphs-rag/",
            "title": "Knowledge Graphs for RAG – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on combining knowledge graphs with RAG",
            "id": "rag-2"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/",
            "title": "Building Agentic RAG with LlamaIndex – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building agentic RAG pipelines with LlamaIndex",
            "id": "rag-3"
          }
        ]
      }
    ]
  },
  {
    "id": "fine-tuning",
    "stamp": "⚙️",
    "title": "Fine-tuning",
    "count": 3,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/",
            "title": "Finetuning Large Language Models – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on fine-tuning LLMs",
            "id": "fine-tuning-1"
          },
          {
            "href": "https://www.coursera.org/learn/generative-ai-advanced-fine-tuning-for-llms",
            "title": "Generative AI Advanced Fine-Tuning for LLMs – Coursera (IBM)",
            "desc": "IBM's Coursera course on advanced LLM fine-tuning techniques",
            "id": "fine-tuning-2"
          },
          {
            "href": "https://www.deeplearning.ai/courses/fine-tuning-and-reinforcement-learning-for-llms-intro-to-post-training/",
            "title": "Fine-tuning & RL for LLMs: Intro to Post-Training – DeepLearning.AI",
            "desc": "DeepLearning.AI course covering post-training techniques including fine-tuning and RL",
            "id": "fine-tuning-3"
          }
        ]
      }
    ]
  },
  {
    "id": "frameworks",
    "stamp": "🛠️",
    "title": "Frameworks",
    "count": 16,
    "subgroups": [
      {
        "heading": "LangChain",
        "items": [
          {
            "href": "https://github.com/langchain-ai/langchain",
            "title": "GitHub – langchain-ai/langchain",
            "desc": "Framework for building applications powered by LLMs",
            "id": "frameworks-1"
          },
          {
            "href": "https://python.langchain.com/docs/get_started/introduction",
            "title": "LangChain Documentation",
            "desc": "Official LangChain documentation",
            "id": "frameworks-2"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/",
            "title": "LangChain for LLM Application Development – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building LLM apps with LangChain",
            "id": "frameworks-3"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
            "title": "LangChain: Chat with Your Data – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building RAG chatbots with LangChain",
            "id": "frameworks-4"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/",
            "title": "Functions, Tools and Agents with LangChain – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building agents with LangChain",
            "id": "frameworks-5"
          }
        ]
      },
      {
        "heading": "LangGraph",
        "items": [
          {
            "href": "https://github.com/langchain-ai/langgraph",
            "title": "GitHub – langchain-ai/langgraph",
            "desc": "Library for building stateful, multi-actor LLM agent workflows",
            "id": "frameworks-6"
          },
          {
            "href": "https://langchain-ai.github.io/langgraph/tutorials/introduction/",
            "title": "LangGraph Tutorials",
            "desc": "Official LangGraph tutorials and getting-started guides",
            "id": "frameworks-7"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
            "title": "AI Agents in LangGraph – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building agents with LangGraph",
            "id": "frameworks-8"
          }
        ]
      },
      {
        "heading": "CrewAI",
        "items": [
          {
            "href": "https://github.com/crewAIInc/crewAI",
            "title": "GitHub – crewAIInc/crewAI",
            "desc": "Framework for orchestrating role-playing autonomous AI agents",
            "id": "frameworks-9"
          },
          {
            "href": "https://www.crewai.com/",
            "title": "CrewAI Official Site",
            "desc": "Official site for the CrewAI multi-agent framework",
            "id": "frameworks-10"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/",
            "title": "Multi AI Agent Systems with crewAI – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building multi-agent systems with crewAI",
            "id": "frameworks-11"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/practical-multi-ai-agents-and-advanced-use-cases-with-crewai/",
            "title": "Practical Multi AI Agents and Advanced Use Cases with crewAI",
            "desc": "DeepLearning.AI course on advanced multi-agent crewAI use cases",
            "id": "frameworks-12"
          }
        ]
      },
      {
        "heading": "Google Agent Development Kit (ADK)",
        "items": [
          {
            "href": "https://google.github.io/adk-docs/",
            "title": "Google ADK Documentation",
            "desc": "Official documentation for Google's Agent Development Kit",
            "id": "frameworks-13"
          },
          {
            "href": "https://github.com/google/adk-python",
            "title": "GitHub – google/adk-python",
            "desc": "Python SDK for Google's Agent Development Kit",
            "id": "frameworks-14"
          }
        ]
      },
      {
        "heading": "Agno (formerly Phidata)",
        "items": [
          {
            "href": "https://docs.agno.com/introduction/agents",
            "title": "Agno Documentation – Agents",
            "desc": "Official documentation for building agents with Agno",
            "id": "frameworks-15"
          },
          {
            "href": "https://github.com/agno-agi/agno",
            "title": "GitHub – agno-agi/agno",
            "desc": "Lightweight framework for building multi-agent systems",
            "id": "frameworks-16"
          }
        ]
      }
    ]
  },
  {
    "id": "agentic-ai",
    "stamp": "🤖",
    "title": "Agentic AI",
    "count": 16,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://github.com/vostride/agent-qa",
            "title": "Agent QA – Self-Improving QA Agent",
            "desc": "Open-source self-improving QA agent that runs natural-language tests across web and mobile applications with persistent memory and self-healing",
            "id": "agentic-ai-1"
          },
          {
            "href": "https://github.com/gitlawb/zero",
            "title": "Zero – Open-Source Coding Agent",
            "desc": "The coding agent that answers to you, your model, your machine, your rules",
            "id": "agentic-ai-2"
          },
          {
            "href": "https://agentskills.io/home",
            "title": "Agent Skills – Open Standard for Extending AI Agent Capabilities",
            "desc": "Open standard for building reusable skills that extend AI agents across 30+ platforms including Claude, GitHub Copilot, and OpenAI Codex",
            "id": "agentic-ai-3"
          },
          {
            "href": "https://github.com/juliusbrussee/caveman",
            "title": "Caveman – Token-Saving Output Compression Skill",
            "desc": "Agent skill that compresses AI output ~65% with terse, fragment-based responses while preserving reasoning; works across Claude Code, Codex, Gemini, Cursor and 30+ agents",
            "id": "agentic-ai-4"
          },
          {
            "href": "https://github.com/DietrichGebert/ponytail",
            "title": "Ponytail – Minimal-Code Agent Skill",
            "desc": "Agent skill enforcing a 'lazy senior developer' philosophy: check YAGNI, codebase, stdlib, platform and existing deps before writing new code (~54% less code); works across 16+ agents",
            "id": "agentic-ai-5"
          },
          {
            "href": "https://github.com/ModernRelay/omnigraph",
            "title": "Omnigraph – Lakehouse Graph Database for Agents",
            "desc": "Operational state and coordination layer for agent fleets with multimodal retrieval, Git-style branching, and object-storage-native deployment",
            "id": "agentic-ai-6"
          },
          {
            "href": "https://github.com/AgricIDaniel/claude-seo",
            "title": "Claude SEO – AI-Powered SEO Audit Skill",
            "desc": "Open-source Claude Code skill that runs 25 sub-skills and 18 parallel agents to audit technical SEO, content quality, schema markup, and AI search optimization with falsifiable recommendations",
            "id": "agentic-ai-7"
          },
          {
            "href": "https://www.youtube.com/watch?v=Fbr_Solax1w",
            "title": "Introduction to Agent2Agent (A2A) Protocol – Google Cloud",
            "desc": "Google Cloud video introducing the Agent2Agent protocol for agent interoperability",
            "id": "agentic-ai-8"
          },
          {
            "href": "https://www.youtube.com/playlist?list=PL51gEhIbWzJESLuGJUGkG2VZzrPO0H0Rc",
            "title": "AI Agents Series – FuturMinds (YouTube Playlist)",
            "desc": "YouTube playlist covering AI agent concepts and tutorials",
            "id": "agentic-ai-9"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/evaluating-ai-agents/",
            "title": "Evaluating AI Agents – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on evaluating AI agent performance",
            "id": "agentic-ai-10"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/llms-as-operating-systems-agent-memory/",
            "title": "LLMs as Operating Systems: Agent Memory – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on agent memory architectures",
            "id": "agentic-ai-11"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
            "title": "AI Agents in LangGraph – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building agents with LangGraph",
            "id": "agentic-ai-12"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/",
            "title": "AI Agentic Design Patterns with AutoGen – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on agentic design patterns using AutoGen",
            "id": "agentic-ai-13"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/",
            "title": "Multi AI Agent Systems with crewAI – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building multi-agent systems with crewAI",
            "id": "agentic-ai-14"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/",
            "title": "Building Agentic RAG with LlamaIndex – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on building agentic RAG pipelines with LlamaIndex",
            "id": "agentic-ai-15"
          },
          {
            "href": "https://www.deeplearning.ai/short-courses/event-driven-agentic-document-workflows/",
            "title": "Event-Driven Agentic Document Workflows – DeepLearning.AI",
            "desc": "DeepLearning.AI short course on event-driven agentic document processing",
            "id": "agentic-ai-16"
          }
        ]
      }
    ]
  },
  {
    "id": "mlops",
    "stamp": "📡",
    "title": "MLOps and GenAIOps",
    "count": 5,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.cloudskillsboost.google/course_templates/927",
            "title": "MLOps for Generative AI – Google Cloud Skill Boost",
            "desc": "Google Cloud Skills Boost course on MLOps for generative AI",
            "id": "mlops-1"
          },
          {
            "href": "https://www.youtube.com/watch?v=UfUoG_Ijgq4",
            "title": "GenAIOps: Operationalize Generative AI (YouTube)",
            "desc": "Video overview of operationalizing generative AI systems",
            "id": "mlops-2"
          },
          {
            "href": "https://ml-ops.org/",
            "title": "MLOps.org",
            "desc": "Community resource hub for MLOps best practices",
            "id": "mlops-3"
          },
          {
            "href": "https://fullstackdeeplearning.com/course/2022/",
            "title": "Full Stack Deep Learning",
            "desc": "Course on building and deploying production ML systems",
            "id": "mlops-4"
          },
          {
            "href": "https://pixelbank.dev/systems",
            "title": "Systems & Networking for AI Engineers – PixelBank",
            "desc": "PixelBank course on systems and networking fundamentals for AI engineers",
            "id": "mlops-5"
          }
        ]
      }
    ]
  },
  {
    "id": "security",
    "stamp": "🔒",
    "title": "Security",
    "count": 3,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
            "title": "OWASP Top 10 for Large Language Model Applications",
            "desc": "OWASP's list of the top 10 security risks for LLM applications",
            "id": "security-1"
          },
          {
            "href": "https://safety.google/cybersecurity-advancements/saif/",
            "title": "Google's Secure AI Framework (SAIF)",
            "desc": "Google's framework for building AI systems securely",
            "id": "security-2"
          },
          {
            "href": "https://cloud.google.com/blog/products/identity-security/the-dawn-of-agentic-ai-in-security-operations-at-rsac-2025",
            "title": "The Dawn of Agentic AI in Security Operations – Google Cloud",
            "desc": "Google Cloud blog on agentic AI's role in security operations",
            "id": "security-3"
          }
        ]
      }
    ]
  },
  {
    "id": "google-cloud",
    "stamp": "☁️",
    "title": "Google Cloud AI and ML",
    "count": 8,
    "subgroups": [
      {
        "heading": "Learning paths on Cloud Skills Boost",
        "items": [
          {
            "href": "https://www.cloudskillsboost.google/paths/236",
            "title": "Gemini for Google Cloud",
            "desc": "Learning path on using Gemini within Google Cloud",
            "id": "google-cloud-1"
          },
          {
            "href": "https://www.cloudskillsboost.google/paths/118",
            "title": "Beginner: Introduction to Generative AI",
            "desc": "Google Cloud Skills Boost path introducing generative AI fundamentals",
            "id": "google-cloud-2"
          },
          {
            "href": "https://www.cloudskillsboost.google/paths/1872",
            "title": "Intermediate: Generative AI Labs with Gemini",
            "desc": "Hands-on labs for generative AI with Gemini",
            "id": "google-cloud-3"
          },
          {
            "href": "https://www.cloudskillsboost.google/paths/887",
            "title": "Deploy and Manage Generative AI Models",
            "desc": "Learning path on deploying and managing generative AI models on Google Cloud",
            "id": "google-cloud-4"
          },
          {
            "href": "https://www.cloudskillsboost.google/paths/17",
            "title": "Machine Learning Engineer Learning Path",
            "desc": "Google Cloud's learning path for machine learning engineers",
            "id": "google-cloud-5"
          },
          {
            "href": "https://www.cloudskillsboost.google/paths/878",
            "title": "Build and Modernize Applications With Generative AI",
            "desc": "Learning path on modernizing applications with generative AI",
            "id": "google-cloud-6"
          },
          {
            "href": "https://www.cloudskillsboost.google/paths/882",
            "title": "Integrate Generative AI Into Your Data Workflow",
            "desc": "Learning path on integrating generative AI into data workflows",
            "id": "google-cloud-7"
          },
          {
            "href": "https://www.cloudskillsboost.google/paths/880",
            "title": "Generate Smarter Generative AI Outputs",
            "desc": "Learning path on improving generative AI output quality",
            "id": "google-cloud-8"
          }
        ]
      }
    ]
  },
  {
    "id": "cost-optimization",
    "stamp": "💰",
    "title": "AI Cost Optimization",
    "count": 3,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://cloud.google.com/transform/three-proven-strategies-for-optimizing-ai-costs",
            "title": "Three Proven Strategies for Optimizing AI Costs – Google Cloud",
            "desc": "Google Cloud blog on strategies to reduce AI costs",
            "id": "cost-optimization-1"
          },
          {
            "href": "https://cloud.google.com/blog/products/ai-machine-learning/reduce-cost-and-improve-your-ai-workloads",
            "title": "Reduce Cost and Improve Your AI Workloads – Google Cloud",
            "desc": "Google Cloud blog on optimizing AI workload cost and performance",
            "id": "cost-optimization-2"
          },
          {
            "href": "https://cloud.google.com/vertex-ai/pricing",
            "title": "Vertex AI Pricing",
            "desc": "Official pricing page for Google Cloud's Vertex AI",
            "id": "cost-optimization-3"
          }
        ]
      }
    ]
  },
  {
    "id": "adopting-genai",
    "stamp": "🏢",
    "title": "Adopting GenAI in Organizations",
    "count": 3,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.coursera.org/specializations/generative-ai-for-executives-and-business-leaders",
            "title": "Generative AI for Executives and Business Leaders Specialization – Coursera (IBM)",
            "desc": "Coursera specialization on generative AI strategy for executives",
            "id": "adopting-genai-1"
          },
          {
            "href": "https://www.coursera.org/learn/generative-ai-for-executives-and-business-leaders-integration-strategy",
            "title": "GenAI for Execs & Business Leaders: Integration Strategy – Coursera",
            "desc": "Coursera course on integrating generative AI into business strategy",
            "id": "adopting-genai-2"
          },
          {
            "href": "https://www.coursera.org/learn/genai-for-everyone",
            "title": "GenAI for Everyone – Coursera (DeepLearning.AI)",
            "desc": "DeepLearning.AI's beginner-friendly course on generative AI for everyone",
            "id": "adopting-genai-3"
          }
        ]
      }
    ]
  },
  {
    "id": "productivity",
    "stamp": "🧰",
    "title": "AI Tools for Productivity",
    "count": 3,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.coursera.org/learn/google-maximize-productivity-with-ai-tools",
            "title": "Maximize Productivity with AI Tools – Coursera (Google)",
            "desc": "Google's Coursera course on using AI tools to boost productivity",
            "id": "productivity-1"
          },
          {
            "href": "https://www.coursera.org/professional-certificates/google-ai",
            "title": "Google AI Professional Certificate – Coursera",
            "desc": "Google's professional certificate covering practical AI skills",
            "id": "productivity-2"
          },
          {
            "href": "https://www.coursera.org/professional-certificates/microsoft-365-copilot-for-productivity",
            "title": "Microsoft 365 Copilot for Productivity – Coursera (Microsoft)",
            "desc": "Microsoft's Coursera course on using Copilot in Microsoft 365",
            "id": "productivity-3"
          }
        ]
      }
    ]
  },
  {
    "id": "quantum",
    "stamp": "⚛️",
    "title": "Quantum Computing and PQC",
    "count": 2,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.edx.org/learn/computer-science/university-system-of-maryland-introduction-to-post-quantum-cryptography",
            "title": "Introduction to Post-Quantum Cryptography – edX (UMBC)",
            "desc": "University of Maryland's edX course on post-quantum cryptography",
            "id": "quantum-1"
          },
          {
            "href": "https://learning.quantum.ibm.com/course/practical-introduction-to-quantum-safe-cryptography/quantum-safe-cryptography",
            "title": "Practical Introduction to Quantum-Safe Cryptography – IBM Quantum",
            "desc": "IBM Quantum's course on quantum-safe cryptography",
            "id": "quantum-2"
          }
        ]
      }
    ]
  },
  {
    "id": "sdlc",
    "stamp": "💻",
    "title": "AI Augmented SDLC",
    "count": 3,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.deeplearning.ai/courses/generative-ai-for-software-development/",
            "title": "Generative AI for Software Development Specialization – DeepLearning.AI",
            "desc": "DeepLearning.AI specialization on using generative AI in software development",
            "id": "sdlc-1"
          },
          {
            "href": "https://www.coursera.org/specializations/ai-powered-software-development-certification",
            "title": "AI-Powered Software Development – Coursera",
            "desc": "Coursera specialization on AI-powered software development practices",
            "id": "sdlc-2"
          },
          {
            "href": "https://learn.microsoft.com/en-us/training/paths/copilot/",
            "title": "GitHub Copilot Fundamentals – Microsoft Learn",
            "desc": "Microsoft Learn path covering GitHub Copilot fundamentals",
            "id": "sdlc-3"
          }
        ]
      }
    ]
  },
  {
    "id": "coming-innovations",
    "stamp": "🔮",
    "title": "Coming Innovations in LLMs",
    "count": 1,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://deepmind.google/discover/blog/",
            "title": "Google DeepMind Blog",
            "desc": "Latest research and announcements from Google DeepMind",
            "id": "coming-innovations-1"
          }
        ]
      }
    ]
  },
  {
    "id": "courses",
    "stamp": "🎓",
    "title": "Courses",
    "count": 10,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.coursera.org/learn/machine-learning",
            "title": "Machine Learning by Andrew Ng (Coursera)",
            "desc": "Andrew Ng's foundational machine learning course on Coursera",
            "id": "courses-1"
          },
          {
            "href": "https://www.coursera.org/learn/ai-for-everyone",
            "title": "AI For Everyone by Andrew Ng (Coursera)",
            "desc": "Andrew Ng's non-technical introduction to AI for business",
            "id": "courses-2"
          },
          {
            "href": "https://www.coursera.org/specializations/deep-learning",
            "title": "Deep Learning Specialization (Coursera)",
            "desc": "Andrew Ng's five-course specialization on deep learning",
            "id": "courses-3"
          },
          {
            "href": "https://www.edx.org/course/machine-learning-with-python-a-practical-introduct",
            "title": "Machine Learning with Python (edX – IBM)",
            "desc": "IBM's edX course on practical machine learning with Python",
            "id": "courses-4"
          },
          {
            "href": "https://www.coursera.org/specializations/reinforcement-learning",
            "title": "Reinforcement Learning Specialization (Coursera)",
            "desc": "University of Alberta's Coursera specialization on reinforcement learning",
            "id": "courses-5"
          },
          {
            "href": "https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PLSVEhWrZWDHQTBmWZufjxpw3s8sveJtnJ",
            "title": "CS231n: CNNs for Visual Recognition (Stanford)",
            "desc": "Stanford's CS231n course on CNNs for visual recognition",
            "id": "courses-6"
          },
          {
            "href": "https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ",
            "title": "RL Course by David Silver",
            "desc": "David Silver's classic reinforcement learning lecture series",
            "id": "courses-7"
          },
          {
            "href": "https://www.youtube.com/watch?v=rmVRLeJRkl4&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4",
            "title": "NLP with Deep Learning – Stanford CS224n",
            "desc": "Stanford's CS224n course on deep learning for NLP",
            "id": "courses-8"
          },
          {
            "href": "https://course.fast.ai/",
            "title": "Practical Deep Learning for Coders – fast.ai",
            "desc": "fast.ai's hands-on deep learning course for coders",
            "id": "courses-9"
          },
          {
            "href": "https://pixelbank.dev",
            "title": "CV, LLM, VLM Courses – PixelBank",
            "desc": "PixelBank's course collection on CV, LLMs, and VLMs",
            "id": "courses-10"
          }
        ]
      }
    ]
  },
  {
    "id": "certifications",
    "stamp": "🏆",
    "title": "Certifications",
    "count": 4,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
            "title": "AWS Certified Machine Learning Engineer – Associate",
            "desc": "AWS certification validating machine learning engineering skills",
            "id": "certifications-1"
          },
          {
            "href": "https://skillbuilder.aws/",
            "title": "AWS Certified AI Practitioner – Skill Builder",
            "desc": "AWS certification covering foundational AI and ML knowledge",
            "id": "certifications-2"
          },
          {
            "href": "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
            "title": "Microsoft Certified: Azure AI Engineer Associate",
            "desc": "Microsoft certification for building AI solutions on Azure",
            "id": "certifications-3"
          },
          {
            "href": "https://online.stanford.edu/programs/artificial-intelligence-professional-program",
            "title": "Stanford AI and Machine Learning Certificate",
            "desc": "Stanford's professional certificate program in AI and machine learning",
            "id": "certifications-4"
          }
        ]
      }
    ]
  },
  {
    "id": "books",
    "stamp": "📚",
    "title": "Books",
    "count": 8,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.amazon.com/Hands-Large-Language-Models-Understanding/dp/1098150961",
            "title": "Hands-On Large Language Models – Jay Alammar & Maarten Grootendorst",
            "desc": "GitHub notebooks available",
            "id": "books-1"
          },
          {
            "href": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
            "title": "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
            "desc": "Practical guide to ML and deep learning with popular Python libraries",
            "id": "books-2"
          },
          {
            "href": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/",
            "title": "AI Engineering: Building Applications with Foundational Models",
            "desc": "O'Reilly book on building applications with foundation models",
            "id": "books-3"
          },
          {
            "href": "https://huyenchip.com/ml-interviews-book/",
            "title": "Introduction to Machine Learning Interviews – Chip Huyen",
            "desc": "Chip Huyen's free book preparing candidates for ML interviews",
            "id": "books-4"
          },
          {
            "href": "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
            "title": "Designing Data-Intensive Applications",
            "desc": "Classic book on building reliable, scalable data systems",
            "id": "books-5"
          },
          {
            "href": "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
            "title": "Designing Machine Learning Systems",
            "desc": "Chip Huyen's book on building production-ready ML systems",
            "id": "books-6"
          },
          {
            "href": "https://www.deeplearningbook.org/",
            "title": "Deep Learning (Goodfellow, Bengio, Courville)",
            "desc": "The definitive textbook on deep learning theory and practice",
            "id": "books-7"
          },
          {
            "href": "https://mlstory.org/pdf/patterns.pdf",
            "title": "Patterns, Predictions, and Actions – Hardt & Recht",
            "desc": "Free textbook covering supervised learning, deep learning, causal inference, and RL",
            "id": "books-8"
          }
        ]
      }
    ]
  },
  {
    "id": "papers",
    "stamp": "📄",
    "title": "Must-Read Research Papers",
    "count": 11,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://arxiv.org/pdf/1706.03762",
            "title": "Attention Is All You Need (Google)",
            "desc": "The paper that introduced the Transformer architecture",
            "id": "papers-1"
          },
          {
            "href": "https://arxiv.org/abs/2005.14165",
            "title": "Language Models are Few-Shot Learners – GPT-3 (OpenAI)",
            "desc": "Introduces GPT-3, a 175B parameter model demonstrating strong few-shot learning across NLP tasks",
            "id": "papers-2"
          },
          {
            "href": "https://arxiv.org/abs/2201.11903",
            "title": "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Google)",
            "desc": "Introduces chain-of-thought prompting, showing intermediate reasoning steps significantly improve LLM performance on complex tasks",
            "id": "papers-3"
          },
          {
            "href": "https://arxiv.org/pdf/2501.12948",
            "title": "DeepSeek R1: Incentivizing Reasoning Capability in LLMs",
            "desc": "Paper detailing DeepSeek's reasoning-focused R1 model trained with reinforcement learning",
            "id": "papers-4"
          },
          {
            "href": "https://arxiv.org/pdf/2209.07663",
            "title": "Monolith: Real Time Recommendation System (TikTok/ByteDance)",
            "desc": "TikTok/ByteDance's paper on their real-time recommendation system",
            "id": "papers-5"
          },
          {
            "href": "https://arxiv.org/pdf/1810.04805",
            "title": "BERT: Pre-training of Deep Bidirectional Transformers",
            "desc": "Paper introducing BERT, a bidirectional transformer for language understanding",
            "id": "papers-6"
          },
          {
            "href": "https://arxiv.org/pdf/1611.03530",
            "title": "Understanding Deep Learning Requires Rethinking Generalization",
            "desc": "Paper challenging traditional views of generalization in deep learning",
            "id": "papers-7"
          },
          {
            "href": "https://arxiv.org/pdf/1312.5602",
            "title": "Playing Atari with Deep Reinforcement Learning",
            "desc": "DeepMind's paper introducing deep Q-networks for Atari games",
            "id": "papers-8"
          },
          {
            "href": "https://arxiv.org/pdf/1503.02531",
            "title": "Distilling the Knowledge in a Neural Network",
            "desc": "Hinton et al.'s paper introducing knowledge distillation",
            "id": "papers-9"
          },
          {
            "href": "https://spinningup.openai.com/en/latest/spinningup/keypapers.html",
            "title": "OpenAI Key Papers in Deep RL",
            "desc": "OpenAI's curated reading list of foundational deep RL papers",
            "id": "papers-10"
          }
        ]
      },
      {
        "heading": "Research discovery tools",
        "items": [
          {
            "href": "https://asta.allen.ai",
            "title": "Ai2 Asta",
            "desc": "Agentic research assistant by Allen Institute for AI; discovers and synthesizes literature across 200M+ papers",
            "id": "papers-11"
          }
        ]
      }
    ]
  },
  {
    "id": "tools",
    "stamp": "🔨",
    "title": "Tools and Frameworks",
    "count": 8,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.youtube.com/watch?v=V_xro1bcAuA",
            "title": "PyTorch",
            "desc": "Video introduction to the PyTorch deep learning framework",
            "id": "tools-1"
          },
          {
            "href": "https://www.youtube.com/watch?v=tPYj3fFJGjk",
            "title": "TensorFlow",
            "desc": "Video introduction to the TensorFlow deep learning framework",
            "id": "tools-2"
          },
          {
            "href": "https://playground.tensorflow.org",
            "title": "TensorFlow Playground",
            "desc": "Browser-based neural network experimentation tool",
            "id": "tools-3"
          },
          {
            "href": "https://scikit-learn.org/stable/getting_started.html",
            "title": "Scikit-Learn",
            "desc": "Official getting-started guide for the scikit-learn library",
            "id": "tools-4"
          },
          {
            "href": "https://xgboost.readthedocs.io/en/latest/",
            "title": "XGBoost",
            "desc": "Official documentation for the XGBoost gradient boosting library",
            "id": "tools-5"
          },
          {
            "href": "https://keras.io/getting_started/",
            "title": "Keras",
            "desc": "Official getting-started guide for the Keras deep learning API",
            "id": "tools-6"
          },
          {
            "href": "https://github.com/openai/whisper",
            "title": "Whisper – OpenAI",
            "desc": "OpenAI's open-source automatic speech recognition model",
            "id": "tools-7"
          },
          {
            "href": "https://www.canirun.ai/",
            "title": "Can I Run AI?",
            "desc": "Check if your hardware can run AI models locally",
            "id": "tools-8"
          }
        ]
      }
    ]
  },
  {
    "id": "youtube",
    "stamp": "▶️",
    "title": "YouTube Channels",
    "count": 5,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
            "title": "Stanford Online",
            "desc": "Stanford's YouTube channel featuring AI and ML lecture series",
            "id": "youtube-1"
          },
          {
            "href": "https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
            "title": "Andrej Karpathy",
            "desc": "Andrej Karpathy's channel on deep learning and LLMs from scratch",
            "id": "youtube-2"
          },
          {
            "href": "https://www.youtube.com/watch?v=i_LwzRVP7bg",
            "title": "FreeCodeCamp",
            "desc": "FreeCodeCamp's channel with full-length coding and ML courses",
            "id": "youtube-3"
          },
          {
            "href": "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
            "title": "3Blue1Brown",
            "desc": "Grant Sanderson's channel known for visual, intuitive math explanations",
            "id": "youtube-4"
          },
          {
            "href": "https://www.youtube.com/watch?v=OGxgnH8y2NM&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v",
            "title": "Sentdex",
            "desc": "Channel with practical Python and machine learning tutorials",
            "id": "youtube-5"
          }
        ]
      }
    ]
  },
  {
    "id": "research-blogs",
    "stamp": "🔬",
    "title": "Research Blogs",
    "count": 7,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://openai.com/news/",
            "title": "OpenAI Blog",
            "desc": "Official news and research updates from OpenAI",
            "id": "research-blogs-1"
          },
          {
            "href": "https://deepmind.google/discover/blog/",
            "title": "Google DeepMind",
            "desc": "Official blog covering DeepMind's research and announcements",
            "id": "research-blogs-2"
          },
          {
            "href": "https://research.google/blog/",
            "title": "Google Research",
            "desc": "Google's official blog on research across AI and computer science",
            "id": "research-blogs-3"
          },
          {
            "href": "https://machinelearning.apple.com/",
            "title": "Apple ML Research",
            "desc": "Apple's official machine learning research blog",
            "id": "research-blogs-4"
          },
          {
            "href": "https://www.amazon.science/blog",
            "title": "Amazon Science",
            "desc": "Amazon's blog covering science and ML research across the company",
            "id": "research-blogs-5"
          },
          {
            "href": "https://www.microsoft.com/en-us/ai/blog/",
            "title": "Microsoft AI",
            "desc": "Microsoft's official blog on AI research and products",
            "id": "research-blogs-6"
          },
          {
            "href": "https://ai.meta.com/blog/",
            "title": "Meta AI Blog",
            "desc": "Meta's official blog on AI research and models",
            "id": "research-blogs-7"
          }
        ]
      }
    ]
  },
  {
    "id": "applied-blogs",
    "stamp": "📝",
    "title": "Applied AI/ML Blogs",
    "count": 8,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://thedeveloperstory.com/2026/06/24/everything-you-need-to-know-about-ai-agent-engineering-in-brief/",
            "title": "Everything You Need To Know About AI Agent Engineering, In Brief",
            "desc": "Explains how Context, Memory, and Harness Engineering differ for AI agents, through one simple analogy",
            "id": "applied-blogs-1"
          },
          {
            "href": "https://aws.amazon.com/blogs/machine-learning/",
            "title": "AWS Machine Learning Blog",
            "desc": "AWS's blog on applied machine learning and ML services",
            "id": "applied-blogs-2"
          },
          {
            "href": "https://blogs.nvidia.com/blog/category/deep-learning/",
            "title": "NVIDIA Deep Learning Blog",
            "desc": "NVIDIA's blog covering deep learning research and applications",
            "id": "applied-blogs-3"
          },
          {
            "href": "https://medium.com/airbnb-engineering/ai/home",
            "title": "AirBnB Engineering – AI & ML",
            "desc": "Airbnb Engineering's posts on applied AI and ML",
            "id": "applied-blogs-4"
          },
          {
            "href": "https://engineering.atspotify.com/",
            "title": "Spotify Engineering",
            "desc": "Spotify's engineering blog covering ML and platform work",
            "id": "applied-blogs-5"
          },
          {
            "href": "https://eng.uber.com/category/articles/ai/",
            "title": "Uber Engineering – AI",
            "desc": "Uber Engineering's articles on applied AI",
            "id": "applied-blogs-6"
          },
          {
            "href": "https://netflixtechblog.com/",
            "title": "Netflix Tech Blog",
            "desc": "Netflix's engineering blog covering ML and recommendation systems",
            "id": "applied-blogs-7"
          },
          {
            "href": "https://blog.google/technology/ai/",
            "title": "Google AI Blog",
            "desc": "Google's blog on applied AI products and research",
            "id": "applied-blogs-8"
          }
        ]
      }
    ]
  },
  {
    "id": "communities",
    "stamp": "👥",
    "title": "Communities",
    "count": 3,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://www.reddit.com/r/learnmachinelearning/",
            "title": "r/LearnMachineLearning",
            "desc": "Reddit community for people learning machine learning",
            "id": "communities-1"
          },
          {
            "href": "https://discord.com/invite/dzh728c5t3",
            "title": "Chip Huyen MLOps Discord",
            "desc": "Discord community focused on MLOps discussions",
            "id": "communities-2"
          },
          {
            "href": "https://discord.com/invite/hugging-face-879548962464493619",
            "title": "Hugging Face Discord",
            "desc": "Official Hugging Face community Discord server",
            "id": "communities-3"
          }
        ]
      }
    ]
  },
  {
    "id": "practice",
    "stamp": "🏋️",
    "title": "Practice Problems",
    "count": 10,
    "subgroups": [
      {
        "heading": "Easy",
        "items": [
          {
            "href": "https://www.deep-ml.com/problems/1",
            "title": "Matrix times Vector",
            "desc": "Deep-ML coding problem on matrix-vector multiplication",
            "id": "practice-1"
          },
          {
            "href": "https://www.kaggle.com/c/titanic",
            "title": "Titanic: ML from Disaster – Kaggle",
            "desc": "Kaggle's classic beginner competition predicting Titanic survival",
            "id": "practice-2"
          },
          {
            "href": "https://www.kaggle.com/competitions/home-data-for-ml-course",
            "title": "Predicting House Prices – Kaggle",
            "desc": "Kaggle competition on predicting house prices with regression",
            "id": "practice-3"
          }
        ]
      },
      {
        "heading": "Medium",
        "items": [
          {
            "href": "https://www.deep-ml.com/problems/24",
            "title": "Single Neuron",
            "desc": "Deep-ML coding problem implementing a single neuron",
            "id": "practice-4"
          },
          {
            "href": "https://www.deep-ml.com/problems/17",
            "title": "K-Means Clustering",
            "desc": "Deep-ML coding problem implementing K-Means clustering from scratch",
            "id": "practice-5"
          },
          {
            "href": "https://www.kaggle.com/c/home-credit-default-risk",
            "title": "Predicting Loan Default Risk – Kaggle",
            "desc": "Kaggle competition on predicting loan default risk",
            "id": "practice-6"
          },
          {
            "href": "https://www.kaggle.com/c/sentiment-analysis-on-movie-reviews",
            "title": "Sentiment Analysis on Movie Reviews – Kaggle",
            "desc": "Kaggle competition on classifying movie review sentiment",
            "id": "practice-7"
          }
        ]
      },
      {
        "heading": "Hard",
        "items": [
          {
            "href": "https://www.deep-ml.com/problems/20",
            "title": "Decision Tree Learning",
            "desc": "Deep-ML coding problem implementing decision tree learning",
            "id": "practice-8"
          },
          {
            "href": "https://www.deep-ml.com/problems/62",
            "title": "Implement a Simple RNN with Backpropagation",
            "desc": "Deep-ML coding problem implementing an RNN with backpropagation from scratch",
            "id": "practice-9"
          },
          {
            "href": "https://www.kaggle.com/c/generative-dog-images",
            "title": "GANs for Image Synthesis – Kaggle",
            "desc": "Kaggle competition on generating images with GANs",
            "id": "practice-10"
          }
        ]
      }
    ]
  },
  {
    "id": "interview",
    "stamp": "🎯",
    "title": "Interview Preparation",
    "count": 6,
    "subgroups": [
      {
        "heading": null,
        "items": [
          {
            "href": "https://huyenchip.com/ml-interviews-book/",
            "title": "Introduction to Machine Learning Interviews – Chip Huyen",
            "desc": "Chip Huyen's free book preparing candidates for ML interviews",
            "id": "interview-1"
          },
          {
            "href": "https://github.com/khangich/machine-learning-interview",
            "title": "ML Interviews MVP – GitHub",
            "desc": "Curated GitHub repo of resources for ML interview preparation",
            "id": "interview-2"
          },
          {
            "href": "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
            "title": "Designing Machine Learning Systems",
            "desc": "Chip Huyen's book on building production-ready ML systems",
            "id": "interview-3"
          },
          {
            "href": "https://github.com/mallahyari/ml-practical-usecases",
            "title": "ML System Design: 650 Case Studies – GitHub",
            "desc": "Real-world ML use cases from 100+ companies including Netflix, Airbnb, and Uber",
            "id": "interview-4"
          },
          {
            "href": "https://github.com/rohitg00/ai-engineering-from-scratch",
            "title": "AI Engineering from Scratch – GitHub",
            "desc": "GitHub repo teaching AI engineering concepts from first principles",
            "id": "interview-5"
          },
          {
            "href": "https://pixelbank.dev/collections",
            "title": "ML Coding Questions – PixelBank",
            "desc": "PixelBank's collection of ML coding interview questions",
            "id": "interview-6"
          }
        ]
      }
    ]
  }
];

export const totalResources = categories.reduce((acc, c) => acc + c.count, 0);
export const totalCategories = categories.length;
export const byId = (id: string) => categories.find((c) => c.id === id);

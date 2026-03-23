export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', level: 92, icon: '🐍' },
      { name: 'JavaScript', level: 90, icon: '🟨' },
      { name: 'Node.js', level: 88, icon: '🟢' },
      { name: 'TypeScript', level: 82, icon: '🔷' },
      { name: 'Java', level: 78, icon: '☕' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 88, icon: '⚛️' },
      { name: 'Next.js', level: 84, icon: '▲' },
      { name: 'TypeScript', level: 82, icon: '🔷' },
      { name: 'Tailwind CSS', level: 85, icon: '💨' },
      { name: 'REST APIs', level: 90, icon: '🔗' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Express', level: 88, icon: '🚀' },
      { name: 'Flask', level: 85, icon: '🧪' },
      { name: 'Spring Boot', level: 72, icon: '🌱' },
      { name: 'Microservices', level: 82, icon: '🔧' },
      { name: 'PostgreSQL / MySQL / MongoDB', level: 80, icon: '🗄️' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS (ECS, Lambda, S3, DynamoDB)', level: 85, icon: '☁️' },
      { name: 'Docker & Kubernetes', level: 80, icon: '🐳' },
      { name: 'Terraform', level: 75, icon: '🏗️' },
      { name: 'CI/CD & GitHub Actions', level: 82, icon: '⚙️' },
      { name: 'CloudWatch', level: 78, icon: '📊' },
    ],
  },
  {
    category: 'AI & ML',
    items: [
      { name: 'TensorFlow', level: 78, icon: '🔥' },
      { name: 'Scikit-learn', level: 80, icon: '🤖' },
      { name: 'Computer Vision (YOLOv8)', level: 76, icon: '👁️' },
      { name: 'NLP', level: 74, icon: '💬' },
      { name: 'OpenAI API Integration', level: 82, icon: '🧠' },
    ],
  },
]

export const projects = [
  {
    title: 'Serverless Cloud API for Task Management',
    description:
      'Designed and deployed a serverless REST API using AWS Lambda and API Gateway. Implemented DynamoDB-based data storage with optimized key schema for low-latency queries. Integrated CloudWatch logging and monitoring for runtime error tracking and auto-scaling.',
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'CloudWatch', 'Serverless'],
    gradient: 'from-amber-500 to-orange-600',
    github: 'https://github.com/harshavundavalli',
    live: 'https://github.com/harshavundavalli',
  },
  {
    title: 'Real-Time Object Detection & Tracking',
    description:
      'End-to-end real-time surveillance system using YOLOv8 and DeepSORT for accurate multi-object detection and persistent tracking across video streams. Full-stack monitoring dashboard with Flask for live video streaming and system-level observability.',
    tags: ['Python', 'YOLOv8', 'DeepSORT', 'OpenCV', 'Flask', 'PyTorch'],
    gradient: 'from-indigo-500 to-purple-600',
    github: 'https://github.com/harshavundavalli',
    live: 'https://github.com/harshavundavalli',
  },
  {
    title: 'Retrieval-Based Domain Chatbot',
    description:
      'Scraped 20+ domain-specific websites and built a retrieval chatbot using TF-IDF and Cosine Similarity, achieving 90.2% precision in response accuracy.',
    tags: ['Python', 'TF-IDF', 'Cosine Similarity', 'BeautifulSoup', 'NLP'],
    gradient: 'from-cyan-500 to-blue-600',
    github: 'https://github.com/harshavundavalli',
    live: 'https://github.com/harshavundavalli',
  },
  {
    title: 'Natural Language to SQL (Seq2SQL)',
    description:
      'Translates natural language queries into executable SQL using a sequence-to-sequence deep learning model. Supports aggregation functions, WHERE clauses, and complex joins.',
    tags: ['Python', 'PyTorch', 'MySQL', 'SQLite', 'NLP'],
    gradient: 'from-rose-500 to-pink-600',
    github: 'https://github.com/harshavundavalli',
    live: 'https://github.com/harshavundavalli',
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Nirmaan Organization',
    period: 'May 2022 – Jan 2024',
    description:
      'Engineered scalable, cloud-native full-stack applications using React, Next.js, Node.js, and Python (Flask) supporting 1,000+ monthly active users at 99.9% uptime. Built CI/CD pipelines with GitHub Actions and Docker, cutting deployment time by 50%+. Automated infrastructure provisioning with Terraform and integrated OpenAI APIs into production workflows.',
    tags: ['React', 'Next.js', 'Node.js', 'Flask', 'Docker', 'Terraform', 'MongoDB'],
    side: 'right',
  },
  {
    role: 'Cloud Engineering Intern',
    company: 'Swecha Organization',
    period: 'Jun 2021 – Aug 2021',
    description:
      'Deployed containerized microservices on AWS ECS Fargate with load balancing and auto-scaling for high availability. Implemented proactive system monitoring via AWS CloudWatch. Automated cloud operations using Bash scripting and AWS CLI, reducing manual operational effort by 70%.',
    tags: ['AWS ECS', 'Fargate', 'CloudWatch', 'Docker', 'Bash', 'AWS CLI'],
    side: 'left',
  },
]

export const education = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'University of Texas at Dallas',
    location: 'Dallas, TX',
    period: 'Jan 2024 – Dec 2025',
    gpa: '3.81',
    coursework: [
      'Design & Analysis of Algorithms',
      'Machine Learning',
      'Natural Language Processing',
      'Big Data Analytics',
      'Artificial Intelligence',
      'Computer Vision',
      'Database Design',
      'Information Security',
      'Web Programming',
      'Statistics for Data Science',
    ],
  },
  {
    degree: 'Bachelor of Engineering, Computer Science',
    school: 'Birla Institute of Technology and Science, Pilani',
    location: 'Hyderabad, India',
    period: 'Aug 2019 – May 2023',
    gpa: '3.5',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
      'OOP with Java',
      'Compiler Design',
    ],
  },
]

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2025' },
  { name: 'Microsoft Certified: Azure Data Fundamentals', issuer: 'Microsoft', year: '2025' },
  { name: 'Claude Code in Action', issuer: 'Anthropic', year: '2026' },
]

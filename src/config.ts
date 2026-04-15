export const siteConfig = {
  name: "Maria Djuric",
  title: "Physics PhD · Deep Learning · Quantitative Modelling",
  description:
    "Portfolio website for Maria Djuric — Physics PhD researcher working across deep learning, Hamiltonian dynamics, stochastic modelling, and scientific computing.",
  accentColor: "#627f2f",
  heroGreeting: "Hi, I'm",
  heroSubtitle:
    "Physics PhD at UCL specialising in deep learning, dynamical systems, stochastic modelling, and scientific computing.",
  location: "London, UK / EU",
  social: {
    email: "maria.djuric99@gmail.com",
    linkedin: "https://www.linkedin.com/in/maria-djuric/",
    github: "https://github.com/mariadjuric",
  },
  profileImage: "/profile.png",
  profileImageAlt: "Portrait of Maria Djuric",
  aboutMe: [
    "I'm a Physics PhD researcher at University College London with a background in mathematics, physics, and scientific computing. My work sits between theory and computation: I like building models from abstract mathematical principles, that are numerically reliable, and actually useful in practice.",
    "Recently I've been focusing on deep learning for Hamiltonian dynamics and action-angle coordinates, alongside broader quantitative modelling in nonlinear diffusion, stochastic calculus, and dynamical systems. I'm especially interested in interpretable machine learning for physical systems, efficient simulation pipelines, and research tools that make complicated models easier to test and trust.",
  ],
  skills: [
    "Python",
    "NumPy",
    "SciPy",
    "PyTorch",
    "scikit-learn",
    "C++",
    "Deep Learning",
    "Quantitative Modelling",
    "Astrophysics",
    "Data Analysis",
    "Stochastic Calculus",
    "Nonlinear Diffusion",
    "Hamiltonian Dynamics",
    "Scientific Computing",
    "NLP Embeddings",
  ],
  projects: [
    {
      name: "AAKoopmanTrain",
      description:
        "PyTorch model for learning action-angle coordinates and Hamiltonian dynamics with Koopman autoencoder and symplectic deep learning approaches. Built to support reusable training, evaluation, diagnostics, and reproducible comparison against analytical and numerical baselines.",
      previewImage: "/images/blog/aakoopman/anim_isothermal_latent_training_dark.mp4",
      previewAlt: "Dark latent-space animation for the AAKoopmanTrain project",
      previewEyebrow: "Hamiltonian dynamics · Deep learning",
      links: [
        {
          label: "Blog",
          url: "/blog/aakoopman-action-angle-kooopman"
        },
      ],
      skills: ["PyTorch", "Deep Learning", "Hamiltonian Dynamics", "PhD Research"]
    },
    {
      name: "FMAP: FindMyArxivPaper",
      description:
        "An paper-finder that fetches astro-ph papers from arXiv, embeds title+abstract text, trains a category classifier, evaluates retrieval, and generates an interactive UMAP-based HTML map for browsing scientific papers as a dense local map.",
      previewImage: "/images/blog/fmap-embedding-projection.png",
      previewAlt: "FMAP embedding projection visualisation",
      previewEyebrow: "Embeddings · UMAP · Interactive atlas",
      links: [
        {
          label: "Blog v2",
          url: "/blog/fmap-v2-classifier-comparison"
        },
        {
          label: "Blog v1",
          url: "/blog/fmap-paper-atlas"
        },
        {
          label: "Interactive map",
          url: "/fmap/index.html"
        },
        {
          label: "GitHub",
          url: "https://github.com/mariadjuric/FindMyArxivPaper"
        }
      ],
      skills: ["Python", "NLP Embeddings", "UMAP", "Astrophysics", "Interactive Visualization"]
    },
  ],
  awards: [
    {
      title: "UCL Graduate Research Scholarship (GRS)",
      dateRange: "2022–2025",
      description: "Full international tuition support and annual stipend."
    },
    {
      title: "Bok Prize, Astronomical Society of Australia",
      dateRange: "2022",
      description: "Awarded for outstanding research in Honours research in astronomy."
    },
    {
      title: "Henry Chamberlain Russell Prize in Astronomy, University of Sydney",
      dateRange: "2022",
      description: "Awarded for excellence in astronomy."
    },
    {
      title: "University Medal, University of Sydney",
      dateRange: "2021",
      description: "Awarded for outstanding academic achievement in the Bachelor of Science (Advanced) degree."
    },
    {
      title: 'Physics Foundation Scholarship No III, University of Sydney',
      dateRange: '2021',
      description: 'Awarded for academic excellence in physics.'
    }
  ],
  experience: [
    {
      company: "University College London",
      title: "Deep Learning Model for Hamiltonian Dynamics and Action-Angle Coordinates",
      dateRange: "2025–2026",
      bullets: [
        "Developed PyTorch Koopman autoencoder and symplectic deep learning models to learn action-angle coordinates from Hamiltonian trajectories.",
        "Benchmarked model outputs against numerical and analytical methods, reproducing results efficiently with errors at the 10^-4 level.",
        "Built reusable training, evaluation, and diagnostics pipelines to support model comparison, validation, and experiment reproducibility."
      ]
    },
    {
      company: "University College London",
      title: "Steady-State Equilibrium Distribution Functions for the Milky Way",
      dateRange: "2023–2025",
      bullets: [
        "Built quantitative models for complex dynamical systems using stochastic calculus, partial differential equations, and nonlinear diffusion methods.",
        "Implemented Python-based solvers for the Fokker–Planck equation, analysing equilibrium distributions, stability, and sensitivity to modelling assumptions.",
        "Obtained modified self-consistent distribution functions within a physically constrained framework and tested their numerical stability and consistency."
      ]
    },
    {
      company: "University College London",
      title: "Vertical Phase-Space Spirals in the Milky Way",
      dateRange: "2022–2023",
      bullets: [
        "Built test-particle simulations in C++ to model vertical phase-space spirals generated by large-scale perturbations in the Galactic disc.",
        "Compared simulations with observational stellar data by selecting age-consistent subgiant samples from survey catalogues."
      ]
    },
    {
      company: " ",
      title: "Private Tutor — Mathematics and Physics",
      dateRange: "2017–Present",
      bullets: [
        "Tutored mathematics and physics across a range of levels, translating technical ideas into clear, structured explanations.",
        "Worked one-to-one with students over multiple years, adapting explanations to different learning styles and goals."
      ]
    }
  ],
  education: [
    {
      school: "University College London",
      degree: "Doctor of Philosophy (PhD)",
      dateRange: "2022–Present",
      achievements: [
        "Astrophysics PhD based at Mullard Space Science Laboratory (MSSL).",
        "Research in deep learning, Hamiltonian dynamics, stochastic modelling, and Galactic dynamics.",
        "Supported by the UCL Graduate Research Scholarship (GRS)."
      ]
    },
    {
      school: "University of Sydney",
      degree: "Bachelor of Science (Advanced) / Bachelor of Advanced Studies (Honours)",
      dateRange: "2018–2021",
      achievements: [
        "Major in Mathematics and Physics.",
        "First Class Honours in Physics.",
        "93 average mark."
      ]
    }
  ],
  blog: [
    {
      title: "Learning action-angle coordinates with a Koopman-inspired symplectic autoencoder",
      status: "New",
      description:
        "A short research note on learning action-angle coordinates and orbital frequencies from trajectories with a symplectic Koopman autoencoder, showing only the 1D harmonic oscillator and isothermal slab tests for now.",
      url: "/blog/aakoopman-action-angle-kooopman",
      previewImage: "/images/blog/aakoopman/anim_isothermal_latent_training_dark.mp4",
      previewAlt: "Dark latent-space animation for the Koopman-inspired symplectic autoencoder", 
      previewEyebrow: "Koopman-inspired symplectic learning"
    },
    {
      title: "FMAP v2: comparing a SciBERT classifier against the v1 TF-IDF baseline on astro-ph arXiv data",
      status: "New",
      description:
        "A side-by-side comparison of FMAP v1 and v2 on real astro-ph arXiv ingestion data, covering accuracy, macro F1, per-class differences, and the practical tradeoffs between a fast classical baseline and transformer fine-tuning.",
      url: "/blog/fmap-v2-classifier-comparison",
      previewImage: "/images/blog/fmap-v1-v2-headline-metrics.png",
      previewAlt: "Comparison metrics for FMAP v1 and v2",
      previewEyebrow: "Classifier comparison · metrics"
    },
    {
      title: "Building FMAP: an interactive astro-ph paper atlas with embeddings, UMAP, and arXiv metadata",
      status: " ",
      description:
        "A write-up of the FMAP project: arXiv ingestion, TF-IDF + LinearSVC classification, sentence-transformer embeddings, UMAP map construction, evaluation plots, and an embedded interactive map.",
      url: "/blog/fmap-paper-atlas",
      previewImage: "/images/blog/fmap-embedding-projection.png",
      previewAlt: "FMAP embedding projection map",
      previewEyebrow: "Paper atlas · embeddings · UMAP"
    },
  ],
  footerNote:
    "Built by me and my AI agent. Source code available at [GitHub](https://github.com/mariadjuric/mariadjuric.github.io).",
};

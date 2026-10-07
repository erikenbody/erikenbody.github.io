// News article content supports both simple paragraph strings and structured blocks.
// Examples:
// { type: "paragraph", text: "Article paragraph..." }
// { type: "heading", text: "Section heading" }
// { type: "image", src: "/images/news/photo.jpg", alt: "Description", caption: "Optional caption", aspect: "landscape", objectPosition: "50% 40%" }
// Image aspect options: "wide", "landscape", "standard", "square", "portrait", or "natural".
// Optional image controls: fit: "cover" | "contain", objectPosition: "50% 50%", height: "520px".
// { type: "gallery", images: [{ src: "/images/news/photo-1.jpg", alt: "Description", caption: "Optional caption", aspect: "standard" }] }
// { type: "quote", text: "Quoted text", attribution: "Optional name" }
// { type: "list", items: ["First item", "Second item"] }
// { type: "link", href: "https://example.com", label: "Read more" }

export const news = [
      {
      slug: "enbody-lab-meet-the-grants",
      date: "September 2026",
      type: "Events",
      title: "The Enbody Lab meets the Grants",

      description:
        "Drs. Peter and Rosemary Grants visited the Enbody Lab at Cornell University to discuss Darwin's finches and their long-term research on Daphne Major.",

      image: "/images/meeting_grants1.jpg", // image shown on News & Updates card

      cardImageAspect: "standard",
      cardImagePosition: "50% 40%",

      heroImage: "/images/meeting_grants1.jpg", // different image after clicking in
      heroImageAspect: "standard",
      heroImageFit: "cover",
      heroImagePosition: "50% 40%",
      heroImageCaption: "The Enbody Lab meets the Grants.",

      content: [
        {
          type: "paragraph",
          text:
            "We all got to meet Drs. Peter and Rosemary Grants, who have been studying Darwin's finches on Daphne Major for decades. It was a wonderful opportunity to discuss our ongoing research and learn from their extensive experience in the field."
        },

        {
          type: "heading",
          text: "The Grants on Stage at Cornell" 
        },

        {
          type: "paragraph",
          text:
            "The Grants presented to the Cornell community about their 40+ years of research on Darwin's finches, sharing insights into the evolutionary processes they have observed over the years."
        },

        {
          type: "image",
          src: "/images/grants_stage.png",
          alt: "Drs. Peter and Rosemary Grants presenting at Cornell",
          caption:
            "Drs. Peter and Rosemary Grants presenting at Cornell.",
          aspect: "portrait",
          fit: "cover",
          objectPosition: "50% 35%"
        },

        {
          type: "paragraph",
          text:
            "It was an inspiring day for the Enbody Lab, and we are grateful for the opportunity to learn from and work with such legendary researchers in the field of evolutionary biology."
        }
      ],
    },
    {
      slug: "enbody-lab-at-aos-2026",
      date: "August 2026",
      type: "Conference",
      title: "The Enbody Lab at AOS 2026",

      description:
        "The Enbody Lab at AOS 2026 in Amherst, Massachusetts.",

      image: "/images/Amanda_AOS.jpg", // image shown on News & Updates card

      cardImageAspect: "standard",
      cardImagePosition: "50% 40%",

      heroImage: "/images/AOS_2026_logo.png", // different image after clicking in
      heroImageAspect: "standard",
      heroImageFit: "cover",
      heroImagePosition: "50% 40%",
      heroImageCaption: "The Enbody Lab at AOS 2026.",

      content: [
        {
          type: "paragraph",
          text:
            "The Enbody Lab attended the 144th Annual Meeting of the American Ornithological Society, held August 3–7, 2026 at the University of Massachusetts Amherst."
        },

        {
          type: "heading",
          text: "California Conservation Genomics Project"
        },

        {
          type: "paragraph",
          text:
            "Dr. Erik Enbody presented his work with the California Conservation Genomics Project, using genomic data from bird species across California to understand population health and identify populations that may be most at risk."
        },

        {
          type: "image",
          src: "/images/Erik_AOS_2026.jpeg",
          alt: "Erik presenting the California Conservation Genomics Project project at AOS 2026",
          caption:
            "Erik presenting the California Conservation Genomics Project project at AOS 2026.",
          aspect: "standard",
          fit: "cover",
          objectPosition: "50% 35%"
        },

        {
          type: "heading",
          text: "Pangenomes and avian evolution"
        },

        {
          type: "paragraph",
          text:
            "As part of the symposium “Pangenomes and population-scale long-read sequencing in avian evolutionary studies,” Amanda presented her work on the Pangenome Architecture of Quantitative Trait Loci in Darwin’s Finches."
        },

        {
          type: "image",
          src: "/images/Amanda_AOS.jpg",
          alt: "Amanda presenting the Darwin's finch pangenome project at AOS 2026",
          caption:
            "Amanda presenting the Darwin's finch pangenome project at AOS 2026.",
          aspect: "landscape",
          fit: "cover",
          objectPosition: "50% 35%"
        },

                {
          type: "heading",
          text: "The Lek Paradox in the white-bearded manakin"
        },

        {
          type: "paragraph",
          text:
            "Luke presented his work on white-bearded manakins, investigating how heterozygosity and environmental variation influence male display effort and mating success, and how these interactions may help maintain genetic variation."
        },

        {
          type: "image",
          src: "/images/Luke_AOS.jpg",
          alt: "Luke presenting on the white-bearded manakins project at AOS 2026",
          caption:
            "Luke presenting on the white-bearded manakins project at AOS 2026.",
          aspect: "landscape",
          fit: "cover",
          objectPosition: "50% 35%"
        },


        {
          type: "paragraph",
          text:
            "It was a wonderful week of bird genomics, new ideas, and conversations with ornithologists working across many different systems!"
        }
      ],
    },
    {
      slug: "enbody-lab-at-peqg-2026",
      date: "June 2026",
      type: "Conference",
      title: "The Enbody Lab at PEQG 2026",
    
      description:
        "The Enbody Lab attended PEQG 2026 at Asilomar.",
    
      image: "/images/enbody_lab.jpg",

      cardImageAspect: "standard",
      cardImagePosition: "50% 35%",
      
      heroImageAspect: "landscape",
      heroImageFit: "cover",
      heroImagePosition: "50% 35%",
    
      content: [
        {
          type: "paragraph",
          text:
            "Members of the Enbody Lab recently attended the 2026 Population, Evolutionary, and Quantitative Genetics Conference at the Asilomar Conference Grounds in Pacific Grove, California."
        },
    
        {
          type: "heading",
          text: "Sharing our Darwin's finch research"
        },
    
        {
          type: "paragraph",
          text:
            "Rachel presented her recent work on the Big Bird hybrid lineage on Daphne."
        },
        
        {
          type: "image",
          src: "/images/rachel_talk.jpg",
          alt: "Rachel presenting the Big Bird research at PEQG 2026",
          caption:
            "Rachel presenting recent work on the Big Bird hybrid lineage.",
          aspect: "landscape",
          fit: "cover",
          objectPosition: "50% 30%"
        },
        
        {
          type: "heading",
          text: "Poster presentations"
        },
        
        {
          type: "paragraph",
          text:
            "Members of the Enbody Lab presented posters highlighting ongoing research across evolutionary genomics, hybridization, adaptation, and Darwin's finch biology."
        },
        
        {
          type: "gallery",
          columns: 3,
          gap: "gap-3",
          images: [
            {
              src: "/images/erik_poster.jpg",
              alt: "Erik presenting his poster at PEQG 2026",
              caption: "Erik presenting his research at PEQG 2026.",
              aspect: "portrait",
              objectPosition: "50% 35%"
            },
            {
              src: "/images/amanda_poster.jpg",
              alt: "Amanda presenting her poster at PEQG 2026",
              caption: "Amanda presenting her research at PEQG 2026.",
              aspect: "portrait",
              objectPosition: "50% 35%"
            },
            {
              src: "/images/luke_poster.jpg",
              alt: "Luke presenting his poster at PEQG 2026",
              caption: "Luke presenting his research at PEQG 2026.",
              aspect: "portrait",
              objectPosition: "50% 35%"
            },
            {
              src: "/images/gerardo_poster.jpg",
              alt: "Gerardo presenting his poster at PEQG 2026",
              caption: "Gerardo presenting his research at PEQG 2026.",
              aspect: "portrait",
              objectPosition: "50% 35%"
            },
            {
              src: "/images/rachel_poster.jpg",
              alt: "Rachel presenting her poster at PEQG 2026",
              caption: "Rachel presenting her research at PEQG 2026.",
              aspect: "portrait",
              objectPosition: "50% 35%"
            },
            {
              src: "/images/mara_poster.jpg",
              alt: "Mara presenting her poster at PEQG 2026",
              caption: "Mara presenting her research at PEQG 2026.",
              aspect: "portrait",
              objectPosition: "50% 35%"
            }
          ]
        },
        {
          type: "heading",
          text: "The Enbody Lab at Asilomar"
        },
    
        {
          type: "paragraph",
          text:
            "Gloomy weather never stops the Enbody Lab."
        },
        
        {
          type: "image",
          src: "/images/enbody_lab_fun.jpg",
          alt: "Luke making everyone laugh at the Asilomar Beach",
          caption:
            "Luke making everyone laugh at the Asilomar Beach.",
          aspect: "landscape",
          fit: "cover",
          objectPosition: "50% 30%"
        },
        {
          type: "image",
          src: "/images/enbody_lab_fun2.jpg",
          alt: "Luke making everyone laugh at the Asilomar Beach",
          caption:
            "All smiles:)",
          aspect: "landscape",
          fit: "cover",
          objectPosition: "50% 30%"
        },
        {
          type: "paragraph",
          text:
            "We are returning from Asilomar with many new ideas, conversations, and directions for the research ahead!"
        }
      ],
    },
    {
      slug: "amanda-receives-grfp",
      date: "2026",
      type: "Award",
      title: "Amanda receives GRFP!",
      description: "PhD student Amanda Sun received a competitive NSF GRFP this year for her work on finch pangenomes. Congrats Amanda!",
      image: "/images/ice_cream_2026.JPG",
      content: [
        "PhD student Amanda Sun received a National Science Foundation Graduate Research Fellowship for her work on Darwin's finch pangenomes.",
        "Amanda's research uses population genomics and pangenome approaches to investigate structural variation and the genetic basis of phenotypic diversity in Darwin's finches.",
        "The fellowship will support Amanda's graduate research in the Enbody Lab and Cornell's Genetics, Genomics and Development graduate field."
      ]
    },
    {
      slug: "welcome-gerardo",
      date: "2025",
      type: "Welcome!",
      title: "Welcome Gerardo!",
      description: "Gerardo Cendejas Mendoza joins the lab as a PhD student in Computational Biology and Fulbright Scholar.",
      image: "/images/gerardo.jpg",
      content: [
        "Gerardo Cendejas Mendoza joined the Enbody Lab as a PhD student in Computational Biology and as a Fulbright Scholar.",
        "His work focuses on evolutionary biology and phylogenetics.",
        "We are excited to welcome Gerardo to Cornell and to the growing Enbody Lab community.",
      ]
    },
    {
      slug: "welcome-luke",
      date: "2025",
      type: "Welcome!",
      title: "Welcome Luke!",
      description: "Luke Anderson joins the lab as a Rose Postdoctoral Fellow.",
      image: "/images/Luke_A.jpeg",
      content: [
        "Luke Anderson joined the Enbody Lab as a Rose Postdoctoral Fellow.",
        "Luke is investigating the genomics of adaptation, speciation, and hybridization in Darwin's finches on the Galápagos Islands.",
        "We are delighted to welcome Luke to the lab and look forward to the research he will develop at Cornell.",
      ]
    },
    {
      slug: "welcome-amanda",
      date: "2025",
      type: "Welcome!",
      title: "Welcome to the lab Amanda!",
      description: "Amanda joins the lab as a PhD student from the GGD field.",
      image: "/images/A_Sun.jpg",
      content: [
        "Amanda Sun joined the Enbody Lab as a PhD student in Cornell's Genetics, Genomics and Development graduate field.",
        "Her work focuses on evolutionary and population genomics, with an emphasis on understanding complex traits and structural variation in Darwin's finches.",
        "We are excited to welcome Amanda to the lab."
      ]
    },
    {
      slug: "rachel-performs-nutcracker",
      date: "2025",
      type: "News",
      title: "Rachel performs at The Nutcracker",
      description: "In her Ithaca ballet debut, Rachel performed at the 2025 Ithaca Ballet performance of The Nutcracker.",
      image: "/images/IMG_5636.jpg",
      content: [
        "Rachel made her Ithaca ballet debut in the 2025 Ithaca Ballet production of The Nutcracker.",
      ]
    },
    {
      slug: "clam-is-published",
      date: "2025",
      type: "Publication",
      title: "CLAM is published!",
      description: "Cade's new method for estimating nucleotide diversity and divergence using depth information is published in MBE!",
      image: "/images/clam.jpeg",
      externalLink: "https://doi.org/10.1093/molbev/msaf282",
      content: [
        "Cade's new method, CLAM, for estimating nucleotide diversity and divergence using sequencing depth information has been published in Molecular Biology and Evolution.",
        "The method provides a new approach for extracting population-genetic information from sequencing data.",
        "Follow the publication link below to read the article."
      ]
    },
    {
      slug: "welcome-rachel",
      date: "2025",
      type: "Welcome",
      title: "Welcome to the lab Rachel!",
      description: "Rachel joins the lab as a PhD student co-advised with Philipp Messer.",
      image: "/images/Rachel_G_crop.jpg",
      content: [
        "Rachel joined the Enbody Lab as a PhD student co-advised by Erik Enbody and Philipp Messer.",
        "She studies patterns of introgressive hybridization in Darwin's finches on Daphne Major, a small island in the Galápagos.",
        "We are excited to welcome Rachel to the lab!"
      ]
    },
    {
      slug: "enbody-lab-opens",
      date: "2025",
      type: "Lab opening",
      title: "The Enbody Lab is Open!",
      description: "The Enbody Lab is officially open at Cornell University! Erik is joining the faculty in the Department of Computational Biology.",
      image: "/images/atkinson.png",
      content: [
        "The Enbody Lab officially opened at Cornell University in 2025.",
        "Erik joined the faculty in the Department of Computational Biology, where the lab studies evolutionary genomics, adaptation, speciation and conservation.",
        "We look forward to building a collaborative lab community that combines field biology with computational genomics."
      ]
    }
  ];
